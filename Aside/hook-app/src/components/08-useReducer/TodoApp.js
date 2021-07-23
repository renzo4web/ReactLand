import React, {
  useReducer,
  useState,
  useEffect,
} from "react";

const todoReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      if (!payload.newTodo.todo) return state;
      return [...state, payload.newTodo];

    case "REMOVE_TODO":
      return state.filter(({ todo }) => todo !== payload);

    case "TODO_COMPLETED":
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.completed = true;
        }

        return todo;
      });

    default:
      throw new Error(
        `Action type :${type} do not correspond`
      );
  }
};

const FormTodo = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(input);
        setInput("");
      }}
    >
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

const ListTodos = ({
  todos = [],
  onRemove,
  onCompleted,
}) => {
  return (
    <ul className="list-group mt-3">
      {todos.map(({ todo, id, completed }) => (
        <li
          className={
            completed
              ? "bg-success list-group-item d-flex justify-content-between align-items-start "
              : "list-group-item d-flex justify-content-between align-items-start"
          }
          key={`${todo}-${id}`}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo}</div>
            completed: {completed.toString()}
          </div>

          <button
            className="btn badge bg-danger rounded-pill"
            onClick={() => onRemove(todo)}
          >
            X
          </button>
          <button
            className="btn badge bg-success rounded-pill"
            onClick={() => onCompleted(id)}
          >
            V
          </button>
        </li>
      ))}
    </ul>
  );
};

const init = (initialState) => {
  console.log("INit");
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

  const handleSubmit = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        newTodo: {
          id: new Date().getTime(),
          todo,
          completed: false,
        },
      },
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

      <FormTodo onSubmit={handleSubmit} />

      <ListTodos
        todos={state}
        onRemove={handleRemove}
        onCompleted={handleCompleted}
      />
    </div>
  );
};

export default TodoApp;
