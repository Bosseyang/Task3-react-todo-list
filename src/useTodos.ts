import { useState, useEffect } from "react";
import { type ITodo } from "./types";
import { loadTodos, saveTodos } from "./storage";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [sortBy, setSortBy] = useState<"timestamp" | "author">("timestamp");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveTodos(todos);
    }
  }, [todos, isLoaded]);

  const addTodo = (todo: ITodo) => setTodos((prev) => [...prev, todo]);

  const toggleTodo = (id: string) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const removeTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const editTodo = (id: string, text: string) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));

  const moveTodo = (id: string, direction: "up" | "down") =>
    setTodos((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index === -1) return prev;

      const newTodos = [...prev];
      if (direction === "up" && index > 0) {
        [newTodos[index - 1], newTodos[index]] = [
          newTodos[index],
          newTodos[index - 1],
        ];
      }
      if (direction === "down" && index < prev.length - 1) {
        [newTodos[index + 1], newTodos[index]] = [
          newTodos[index],
          newTodos[index + 1],
        ];
      }
      return newTodos;
    });

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortBy === "timestamp") {
      return b.timestamp.getTime() - a.timestamp.getTime();
    } else {
      return a.author.localeCompare(b.author);
    }
  });

  return {
    todos: sortedTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    moveTodo,
    sortBy,
    setSortBy,
  };
};
