import { isNil } from "./_lodashUtils";

export const isStringValid = (val?: string) => {
  return val && !isNil(val) && val.trim() !== "";
};
