import { todo } from "node:test";
import React from "react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between gap-5 py-2 rounded-sm bg-slate-200">
      <div
        className={`${
          task.completed ? "line-through" : ""
        } cursor-pointer w-[70%]  bg-slate-200 px-2 flex  gap-5 items-center `}
      >
        <div
          className={`${
            task.priority === "medium"
              ? "bg-yellow-400 h-3 w-3 rounded-full block"
              : "hidden"
          }`}
        />

        <div
          className={`${
            task.priority === "high"
              ? "bg-red-400 h-3 w-3 rounded-full block"
              : "hidden"
          }`}
        />

        <div
          className={`${
            task.priority === "low"
              ? "bg-green-400 h-3 w-3 rounded-full block"
              : "hidden"
          }`}
        />
        <p className="flex flex-col justify-center text-xl">
          {task.task} <span className="text-[10px]">{task.time}</span>
        </p>
      </div>
      <div className="flex gap-2 px-2">
        <div
          onClick={() => toggleComplete(task.id)}
          className="flex items-center justify-center px-2 text-white bg-blue-500 rounded-sm cursor-pointer h-9"
        >
          Complete
        </div>
        <div
          onClick={() => editTodo(task.id)}
          className="flex items-center justify-center px-2 text-white rounded-sm cursor-pointer bg-emerald-500 h-9"
        >
          Edit
        </div>
        <div
          onClick={() => deleteTodo(task.id)}
          className="flex items-center justify-center px-2 text-white bg-red-500 rounded-sm cursor-pointer h-9"
        >
          Delete
        </div>
      </div>
    </div>
  );
};
