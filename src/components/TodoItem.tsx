import type { FC } from "react";
import type { ITodo } from "../types";

export const TodoItem: FC<{ todo: ITodo }> = ({ todo }) => {
interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, direction: "up" | "down") => void;
}
export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onToggle,
  onRemove,
  onEdit,
  onMove,
}) => {
  return (
    <li className="todo-item">
      <p className={`todo-text-p`}>{todo.text}</p>
      <p className="author-p">
        By {todo.author} | {todo.timestamp.toLocaleString()}
      </p>
    </li>
  );
};
