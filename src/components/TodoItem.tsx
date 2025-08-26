import type { FC } from "react";
import type { ITodo } from "../types";

export const TodoItem: FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <li className="todo-item">
      <p className={`todo-text-p`}>{todo.text}</p>
      <p className="author-p">
        By {todo.author} | {todo.timestamp.toLocaleString()}
      </p>
    </li>
  );
};
