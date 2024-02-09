import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-[1px] border-zinc-600 h-9 rounded-md flex justify-center items-center w-[80%] px-2 py-1"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-black text-white w-[20%]  h-9 flex justify-center items-center py-2 px-2 rounded-md hover:bg-black/60"
      >
        Update
      </button>
    </form>
  );
};
