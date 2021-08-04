const todoReducer = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

    case "REMOVE_TODO":
      return state.filter(({ todo }) => todo !== payload);

    case "TODO_COMPLETED":
      return state.map((todo) =>
        todo.id === payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      throw new Error(
        `Action type :${type} do not correspond`
      );
  }
};

export default todoReducer;
