import { useState } from "react";
import type { ITodo } from "../types";

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
        <button
          className="button todo-completed-button"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? (
            <span className="check-box material-symbols-outlined">
              check_box
            </span>
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
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          )}
          <div className="author-time-text">
            By {todo.author} | {todo.timestamp.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="todo-controls-wrapper">
        <button className="button edit-button" onClick={handleEdit}>
          {isEditing ? (
            "Save"
          ) : (
            <span className="material-symbols-outlined">edit</span>
          )}
        </button>
        <button
          className="button remove-button"
          onClick={() => onRemove(todo.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
        <button
          className="button arrow-up-button"
          onClick={() => onMove(todo.id, "up")}
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
        <button
          className="button arrow-down-button"
          onClick={() => onMove(todo.id, "down")}
        >
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </li>
  );
};
