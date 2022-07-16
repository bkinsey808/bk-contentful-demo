export const lowerCaseFirstLetter = (str?: string) =>
  str ? str.charAt(0).toLowerCase() + str.slice(1) : undefined;
