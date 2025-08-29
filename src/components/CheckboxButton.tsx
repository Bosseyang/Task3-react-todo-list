interface ICheckboxButton {
  onToggle: (id: string) => void;
  id: string;
  completed: boolean;
}

export const CheckboxButton = ({ id, completed, onToggle }: ICheckboxButton) => {
  return (
    <button className="button todo-checkbox-button" onClick={() => onToggle(id)}>
      {completed ? (
        <span className="check-box material-symbols-outlined">check_box</span>
      ) : (
        <span className="check-box-blank material-symbols-outlined">check_box_outline_blank</span>
      )}
    </button>
  );
};
