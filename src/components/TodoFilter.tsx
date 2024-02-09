import React from "react";

const TodoFilter = ({
  filterCompletedTodos,
  filterActiveTodos,
  filterAllTodos,
}) => {
  return (
    <div className="border-t-2 flex justify-center items-center gap-10 py-5">
      <button onClick={() => filterAllTodos()}>All</button>
      <button onClick={() => filterCompletedTodos()}>Completed</button>
      <button onClick={() => filterActiveTodos()}>Active</button>
    </div>
  );
};

export default TodoFilter;
