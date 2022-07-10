import * as changeCase from "change-case";

export const moduleTemplate = (moduleName: string): string => {
  const pascalCaseModuleName = `${changeCase.pascalCase(moduleName)}Module`;
  return `import React from 'react';

export interface ${pascalCaseModuleName}Props {}

const ${pascalCaseModuleName}: React.FunctionComponent<${pascalCaseModuleName}Props> = () => {
  return <></>;
};

export default ${pascalCaseModuleName};
`;
};
