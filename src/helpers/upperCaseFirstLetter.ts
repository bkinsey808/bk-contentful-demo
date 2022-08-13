export const upperCaseFirstLetter = (str?: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : undefined;
