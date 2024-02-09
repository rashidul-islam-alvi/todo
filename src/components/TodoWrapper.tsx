import React from "react";
import { TodoForm } from "./TodoForm";
import TodoNav from "./TodoNav";
import TodoFilter from "./TodoFilter";
import Todos from "./Todos";

import useTodoCrudActions from "../hooks/useTodo";

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  priority: string;
}

export const TodoWrapperLocalStorage: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    editTodo,
    editTask,
    filterAllTodos,
    filterCompletedTodos,
    filterActiveTodos,
  } = useTodoCrudActions();

  return (
    <div className="rounded-md px-5 py-5 bg-white min-w-[50%] flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <TodoNav />
        <TodoForm addTodo={addTodo} />
        <Todos
          editTask={editTask}
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>

      <TodoFilter
        filterAllTodos={filterAllTodos}
        filterCompletedTodos={filterCompletedTodos}
        filterActiveTodos={filterActiveTodos}
      />
    </div>
  );
};
