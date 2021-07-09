const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={"p-3 max-h-14 flex align-center justify-between border"}>
      <span className={"truncate flex-grow"}>
        <span className={`w-full flex-grow`}>{todo.task}</span>
      </span>
      <button
        className={"rounded-md text-red-500 text-xl border px-2"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
