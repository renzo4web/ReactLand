import React, { useState } from "react";

export const useForm = (formInputs = {}) => {
  const [inputs, setInputs] = useState(formInputs);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return [inputs, handleChange];
};
