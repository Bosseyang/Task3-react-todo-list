import { useState, type ReactElement } from "react";

import type { ITodo } from "../types";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = (): ReactElement => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (todo: ITodo) => setTodos([...todos, todo]);
  return (
    <section className="todo-list">
      <AddTodo onAdd={addTodo} />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
};
