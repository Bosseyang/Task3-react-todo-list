import { useState, useEffect } from "react";
import { type ITodo } from "./types";
import { loadTodos, saveTodos } from "./storage";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "author" | null>(null);
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

  const addTodo = (todo: ITodo) => setTodos((list) => [...list, todo]);

  const toggleTodo = (id: string) =>
    setTodos((list) => list.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const removeTodo = (id: string) => setTodos((list) => list.filter((t) => t.id !== id));

  const editTodo = (id: string, text: string) =>
    setTodos((list) => list.map((t) => (t.id === id ? { ...t, text } : t)));

  const moveTodo = (id: string, direction: "up" | "down") => {
    setSortBy(null);
    setTodos((list) => {
      const index = list.findIndex((t) => t.id === id);
      if (index === -1) return list;

      const newTodos = [...list];
      if (direction === "up" && index > 0) {
        [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
      }
      if (direction === "down" && index < list.length - 1) {
        [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
      }

      return newTodos;
    });
  };

  // const getTodos = () => {
  //   console.log(sortBy);
  //   if (sortBy) {
  //     return [...todos].sort((a, b) => {
  //       if (sortBy === "timestamp") {
  //         return b.timestamp.getTime() - a.timestamp.getTime();
  //       } else {
  //         return a.author.localeCompare(b.author);
  //       }
  //     });
  //   }
  //   return todos;
  // };

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    moveTodo,
    sortBy,
    setSortBy,
    setTodos,
  };
};
