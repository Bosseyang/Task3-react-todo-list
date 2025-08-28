import { useState, type ReactElement } from "react";

import type { ITodo } from "../types";
import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../useTodos";

export const TodoList: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    moveTodo,
    sortBy,
    setSortBy,
  } = useTodos();

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
