import { getValidSeverity } from "../selectors/getValidSeverity";

export const getAlertMessage = (value, name) => {
  switch (name) {
    case "name":
      value = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return value.length < 15 ? "" : "The name on the bug must be short";

    case "email":
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return Boolean(value.match(validRegex)) ? "" : "Invalid email";

    case "severity":
      return !getValidSeverity(value);
    case "description":
      return value.length >= 160 ? "Description to long" : "";
    case "assignee":
      return value.length > 20 ? "Just one assignee Member" : "";

    default:
      break;
  }
};
