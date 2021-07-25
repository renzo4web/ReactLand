import React, { useReducer, useEffect } from "react";
import FormTodo from "./FormTodo";
import ListTodos from "./ListTodos";
import todoReducer from "./todoReducer";

const init = (initialState) => {
  console.log("init");
  return (
    JSON.parse(localStorage.getItem("todos")) ||
    initialState
  );
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(
    todoReducer,
    [],
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const handleRemove = (todo) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todo,
    });
  };

  const handleCompleted = (id) => {
    dispatch({
      type: "TODO_COMPLETED",
      payload: id,
    });
  };

  console.log(state);
  return (
    <div className="bg-light p-3">
      <h4>Todo App</h4>
      <hr />

      <FormTodo addTodo={addTodo} />

      <ListTodos
        todos={state}
        onRemove={handleRemove}
        onCompleted={handleCompleted}
      />
    </div>
  );
};

export default TodoApp;
