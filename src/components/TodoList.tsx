import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../useTodos";
import { SortButton } from "./SortButton";

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
    setTodos,
  } = useTodos();

  return (
    <section className="todo-list">
      <AddTodo onAdd={addTodo} />
      {/* <h2 className="h2 todos">Todos</h2> */}

      <div className="sort-wrapper">
        <SortButton sortType="date" sortBy={sortBy} setSortBy={setSortBy} setTodos={setTodos} />
        <SortButton sortType="author" sortBy={sortBy} setSortBy={setSortBy} setTodos={setTodos} />
      </div>

      <ul className="todo-items-list ul">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
            onEdit={editTodo}
            onMove={moveTodo}
          />
        ))}
      </ul>
      
    </section>
  );
};
