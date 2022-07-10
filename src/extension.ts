import { commands, ExtensionContext } from "vscode";
import { newPageModule } from "./commands";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("extension.new-page-module", newPageModule)
  );
}
