import { getValidSeverity } from "../selectors/getValidSeverity";

export const cleanForm = (form = {}) => {
  console.log(form);
  const objToArray = Object.entries(form).filter((tupple) => {
    let [name, value] = tupple;

    if (name === "name") {
      value = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return value.length > 15;
    }

    if (name === "description") {
      return value.length >= 160;
    }

    if (name === "assignee") {
      return value.length > 20;
    }

    return false;
  });
  const invalidInputs = {};

  for (const [k, v] of objToArray) {
    invalidInputs[k] = v;
  }
  return invalidInputs;
};
