// useTodoCRUD.ts
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoItem {
  id: string;
  task: string;
  time: string; // New property for time
  completed: boolean;
  isEditing: boolean;
  priority: string;
}

const useTodoCrudActions = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [originalTodos, setOriginalTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const savedTodos: TodoItem[] =
      JSON.parse(localStorage.getItem("todos")!) || [];
    setTodos(savedTodos);
    setOriginalTodos(savedTodos);
  }, []);

  const addTodo = ({ task, time, priority }): void => {
    const newTodos: TodoItem[] = [
      ...todos,
      {
        id: uuidv4(),
        task,
        time,
        completed: false,
        isEditing: false,
        priority,
      },
    ];
    setOriginalTodos(newTodos);
    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id: string): void => {
    const newTodos: TodoItem[] = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setOriginalTodos(newTodos);
    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: string): void => {
    const newTodos: TodoItem[] = todos.filter((todo) => todo.id !== id);
    setOriginalTodos(todos);
    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );

    setOriginalTodos(todos);
  };

  const editTask = (task: string, id: string): void => {
    const newTodos: TodoItem[] = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    setOriginalTodos(todos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const filterAllTodos = () => {
    setTodos(originalTodos); // Reset todos to original list
  };

  const filterCompletedTodos = (): void => {
    const completedTodos: TodoItem[] = originalTodos.filter(
      (todo) => todo.completed
    );
    setTodos(completedTodos);
  };

  const filterActiveTodos = (): void => {
    const activeTodos: TodoItem[] = originalTodos.filter(
      (todo) => !todo.completed
    );
    setTodos(activeTodos);
  };

  return {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    editTodo,
    editTask,
    filterAllTodos,
    filterCompletedTodos,
    filterActiveTodos,
  };
};

export default useTodoCrudActions;
