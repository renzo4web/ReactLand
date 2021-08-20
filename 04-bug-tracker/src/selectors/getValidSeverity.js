export const getValidSeverity = (str) => {
  const VALID_SEVERITYS = ["major", "medium", "low", "none", "showstopper"];

  return VALID_SEVERITYS.includes(str);
};
