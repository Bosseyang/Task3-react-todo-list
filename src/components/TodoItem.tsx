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
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };
  return (
    <li className="todo-item">
      <p className={`todo-text-p`}>{todo.text}</p>
      <p className="author-p">
        By {todo.author} | {todo.timestamp.toLocaleString()}
      </p>
      <div className="todo-wrapper">
        {isEditing ? (
          <input
            className="input-text"
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

      <div className="todo-controls">
        <button
          className="todo-completed-button"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? (
            "Undo"
          ) : (
            <span className="material-symbols-outlined">
              check_box_outline_blank
            </span>
          )}
        </button>
        <button className="button edit-button" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </li>
  );
};
