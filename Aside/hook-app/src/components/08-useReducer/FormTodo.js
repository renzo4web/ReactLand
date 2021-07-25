import { useState } from "react";

const FormTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    addTodo({
      id: new Date().getTime(),
      todo: input.trim(),
      completed: false,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="todo">
        Add new todo
        <input
          className="form-control"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          type="text"
        />
      </label>
      <button
        className="btn btn-outline-success"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default FormTodo;
