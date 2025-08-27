import { type ITodo } from "./types";

const STORAGE_KEY = "todos";

export const loadTodos = (): ITodo[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  const parsed: ITodo[] = JSON.parse(stored);
  return parsed.map((t) => ({ ...t, timestamp: new Date(t.timestamp) }));
};

export const saveTodos = (todos: ITodo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
