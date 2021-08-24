export const getInputAlertMessage = (name) => {
  const ALERT_MESSAGES = {
    name: "The name on the bug must be short",
    email: "Invalid email",
    description: "Description to long",
    assignee: "Just one member for bug",
    incomplete_form: "All field mut be completed",
  };
  const validInputsNames = ["name", "email", "description", "assignee"];

  return ALERT_MESSAGES[name];
};
