const TodoListItem = ({
  k,
  onRemove,
  onCompleted,
  item,
}) => {
  const { todo, id, completed } = item;

  return (
    <li
      className={
        completed
          ? "bg-success list-group-item d-flex justify-content-between align-items-start "
          : "list-group-item d-flex justify-content-between align-items-start"
      }
      key={k}
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
  );
};
export default TodoListItem;
