import todoReducer from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("todoReducer Test", () => {
  test("Should show the new added todo", () => {
    const newTodo = {
      id: 99,
      todo: "Learn Testing",
      completed: true,
    };

    const state = todoReducer(demoTodos, {
      type: "ADD_TODO",
      payload: newTodo,
    });

    expect(state).toStrictEqual([...demoTodos, newTodo]);
  });

  test("should delete a todo by id", () => {
    const state = todoReducer(demoTodos, {
      type: "REMOVE_TODO",
      payload: "Learn React",
    });
    expect(state).toStrictEqual([demoTodos[1]]);
  });

  test("should toggle the todo completed state", () => {
    const state = todoReducer(demoTodos, {
      type: "TODO_COMPLETED",
      payload: 1,
    });

    expect(state[0].completed).toBe(true);
  });
});
