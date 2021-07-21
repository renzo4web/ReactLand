import React from "react";
import { useForm } from "../../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const formInputs = {
    name: "",
    password: "",
    email: "",
  };
  const [inputs, handleChange] = useForm(formInputs);

  const { name, password, email } = inputs;

  return (
    <div>
      <h1>Form With custom Hook</h1>
      <form>
        <input onChange={handleChange} type="text" name="name" value={name} />
        <input onChange={handleChange} type="text" name="email" value={email} />
        <input
          onChange={handleChange}
          type="password"
          placeholder="***"
          name="email"
          value={password}
        />
        <button type="submit">SEND</button>
      </form>

      {name && <Message />}
    </div>
  );
};
