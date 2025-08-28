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
      <h2 className="h2 todos">Todos</h2>

      <div className="sort-wrapper">
        <button
          className={`button sort-date-button ${
            sortBy === "timestamp" ? "gray1" : "gray2"
          }`}
          onClick={() => setSortBy("timestamp")}
        >
          Sort by Date
        </button>
        <button
          className={`button sort-author-button ${
            sortBy === "author" ? "gray1" : "gray2"
          }`}
          onClick={() => setSortBy("author")}
        >
          Sort by Author
        </button>
      </div>
        {todos.map((todo) => (
        ))}
      </ul>
    </section>
  );
};
