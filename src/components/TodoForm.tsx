import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("low");
  const currentTime = new Date().toLocaleTimeString();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      // Get current time
      addTodo({ task: value, time: currentTime, priority }); // Pass task, time, and priority to addTodo
      setValue("");
      setPriority("low");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-[1px] border-zinc-600 h-9 rounded-md flex justify-center items-center w-[80%] px-2 py-1"
        placeholder="Type here..."
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border-[1px] border-zinc-600 h-9 rounded-md flex justify-center items-center w-[20%] px-2 py-1"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        type="submit"
        className="bg-black text-white w-[20%]  h-9 flex justify-center items-center py-2 px-2 rounded-md hover:bg-black/60"
      >
        Add new todo
      </button>
    </form>
  );
};
