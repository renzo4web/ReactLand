import TodoListItem from "./TodoListItem";

const ListTodos = ({
  todos = [],
  onRemove,
  onCompleted,
}) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoListItem
          key={`${todo}-${todo.id}`}
          k={`${todo}-${todo.id}`}
          item={todo}
          onRemove={onRemove}
          onCompleted={onCompleted}
        />
      ))}
    </ul>
  );
};

export default ListTodos;
