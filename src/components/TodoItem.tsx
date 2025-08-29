import { useState } from "react";
import type { ITodo } from "../types";
import { TodoItemControls } from "./TodoItemControls";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };
  return (
    <li className="todo-item">
      <div className="todo-wrapper">
        <button className="button todo-checkbox-button" onClick={() => onToggle(todo.id)}>
          {todo.completed ? (
            <span className="check-box material-symbols-outlined">check_box</span>
          ) : (
            <span className="check-box-blank material-symbols-outlined">
              check_box_outline_blank
            </span>
          )}
        </button>
        <div className="todo-text-wrapper">
          {isEditing ? (
            <textarea
              className="edit-input-text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
          )}
          <p className="author-time-text">
            By <i>{todo.author}</i> | {todo.date.toLocaleString()}
          </p>
        </div>
      </div>

      <TodoItemControls
        todoId={todo.id}
        isEditing={isEditing}
        onEditToggle={handleEdit}
        onRemove={onRemove}
        onMove={onMove}
      />
    </li>
  );
};
