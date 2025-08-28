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

  return (
    <section className="todo-list">
      <AddTodo onAdd={addTodo} />
        {todos.map((todo) => (
        ))}
      </ul>
    </section>
  );
};
