import React from "react";
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";

const Todos = ({ todos, toggleComplete, deleteTodo, editTodo, editTask }) => {
  return (
    <div className="flex flex-col gap-3">
      {todos.length === 0 ? (
        <h2 className="text-xl font-semibold">No todos available</h2>
      ) : (
        <>
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
            ) : (
              <Todo
                task={todo}
                key={todo.id}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default Todos;
