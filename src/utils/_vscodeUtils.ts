import { InputBoxOptions, window } from "vscode";

interface PromptArgs {
  name: string;
}

export const prompt = ({ name }: PromptArgs): Thenable<string | undefined> => {
  const pageNamePromptOptions: InputBoxOptions = {
    prompt: name,
    placeHolder: "counter",
  };
  return window.showInputBox(pageNamePromptOptions);
};

export const showError = (error: unknown | string | Error) => {
  window.showErrorMessage(
    typeof error === "string"
      ? error
      : `Error:
      ${error instanceof Error ? error.message : JSON.stringify(error)}`
  );
};
