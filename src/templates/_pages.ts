import * as changeCase from "change-case";

export const pageTemplate = (pageName: string): string => {
  const formattedPageName = changeCase.pascalCase(pageName);
  return `import React from 'react';
import ${formattedPageName}Module from '@/modules/${formattedPageName}';
import { AppNextPage } from '@/types';

const ${formattedPageName}Page: AppNextPage = () => {
  return <${formattedPageName}Module />;
};

export default ${formattedPageName}Page;
`;
};
