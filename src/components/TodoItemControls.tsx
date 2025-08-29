import React from "react";

interface ITodoItemControlsProps {
  todoId: string;
  isEditing: boolean;
  onEditToggle: () => void;
  onRemove: (id: string) => void;
  onMove: (id: string, direction: "up" | "down") => void;
}

export const TodoItemControls: React.FC<ITodoItemControlsProps> = ({
  todoId,
  isEditing,
  onEditToggle,
  onRemove,
  onMove,
}) => {
  return (
    <div className="todo-controls-wrapper">
      <button className="button edit-button" onClick={onEditToggle} title="edit">
        {isEditing ? "Save" : <span className="material-symbols-outlined">edit</span>}
      </button>

      <button className="button remove-button" onClick={() => onRemove(todoId)}>
        <span className="material-symbols-outlined">delete</span>
      </button>

      <button className="button arrow-up-button" onClick={() => onMove(todoId, "up")}>
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>

      <button className="button arrow-down-button" onClick={() => onMove(todoId, "down")}>
        <span className="material-symbols-outlined">arrow_downward</span>
      </button>
    </div>
  );
};
