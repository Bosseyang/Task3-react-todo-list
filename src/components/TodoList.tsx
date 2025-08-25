import { useState, type ReactElement } from "react";

import type { ITodo } from "../types";
import { AddTodo } from "./AddTodo";

export const TodoList = (): ReactElement => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (todo: ITodo) => setTodos([...todos, todo]);
  return (
    <section className="todo-list">
      <h2>Todos</h2>
      <AddTodo onAdd={addTodo} />
    </section>
  );
};
