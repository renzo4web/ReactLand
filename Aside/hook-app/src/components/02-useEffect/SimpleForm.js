import React, { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [completed, setCompleted] = useState(false);
  const { name, email } = form;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCompleted(true);
    console.log(completed);
  };

  return (
    <div className="bg-light p-3">
      <h1>SimpleForm</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={name} />
        <input onChange={handleChange} type="text" name="email" value={email} />
        <button type="submit">SEND</button>
      </form>

      {name && <Message />}
    </div>
  );
};
