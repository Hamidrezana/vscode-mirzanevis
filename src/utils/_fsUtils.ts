import { existsSync, mkdirSync, writeFile } from "fs";

export { existsSync } from "fs";

interface CreateFileArgs {
  path: string;
  fileName: string;
  fileContent?: string;
}

export const createFile = ({ path, fileName, fileContent }: CreateFileArgs) => {
  return new Promise<void>(async (resolve, reject) => {
    if (!existsSync(path)) {
      mkdirSync(path);
    }
    writeFile(`${path}/${fileName}`, fileContent, "utf8", (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};
