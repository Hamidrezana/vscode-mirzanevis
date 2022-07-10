import { Uri, window, workspace } from "vscode";
import { moduleTemplate, pageTemplate } from "../../templates";
import Utils from "../../utils";

const createModuleTemplate = (pageName: string, targetDirectory: string) => {
  const pageDirName = Utils.ChangeCaseUtils.pascalCase(pageName);
  const targetPathDirectory = `${targetDirectory}/modules/${pageDirName}`;
  const targetPathFile = `${targetPathDirectory}/index.tsx`;
  if (Utils.FsUtils.existsSync(targetPathFile)) {
    throw Error(`Module ${pageName} already exists`);
  }

  return Utils.FsUtils.createFile({
    path: targetPathDirectory,
    fileName: "index.tsx",
    fileContent: moduleTemplate(pageName),
  });
};

const createPageTemplate = (pageName: string, targetDirectory: string) => {
  const pageDirName = Utils.ChangeCaseUtils.paramCase(pageName);
  const targetPathDirectory = `${targetDirectory}/pages/${pageDirName}`;
  const targetPathFile = `${targetPathDirectory}/index.tsx`;
  if (Utils.FsUtils.existsSync(targetPathFile)) {
    throw Error(`Page ${pageName} already exists`);
  }

  return Utils.FsUtils.createFile({
    path: targetPathDirectory,
    fileName: "index.tsx",
    fileContent: pageTemplate(pageName),
  });
};

const generatePageCode = async (pageName: string, targetDirectory: string) => {
  await Promise.all([
    createModuleTemplate(pageName, targetDirectory),
    createPageTemplate(pageName, targetDirectory),
  ]);
};

export const newPageModule = async (_uri: Uri) => {
  const pageName = await Utils.VscodeUtils.prompt({ name: "Page Name" });
  if (!pageName || !Utils.StringUtils.isStringValid(pageName)) {
    Utils.VscodeUtils.showError("The page name must not be empty");
    return;
  }
  const targetDirectory = `${workspace.workspaceFolders?.[0]?.uri.fsPath}/src`;
  if (!targetDirectory) {
    Utils.VscodeUtils.showError("The project root path is not available");
    return;
  }
  try {
    await generatePageCode(pageName, targetDirectory);
    window.showInformationMessage(`Successfully Generated ${pageName} Page`);
  } catch (error) {
    Utils.VscodeUtils.showError(error);
  }
};
