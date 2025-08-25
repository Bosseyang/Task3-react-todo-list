import { useId, useState } from "react";
import type { ITodo } from "../types";

export const AddTodo: React.FC<{ onAdd: (todo: ITodo) => void }> = ({
  onAdd,
}) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !author.trim()) return;

    onAdd({
      id: useId(),
      text,
      author,
      completed: false,
      timestamp: new Date(),
    });

    setText("");
    setAuthor("");
  };

  return (
    <section className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <label htmlFor="text-input" className="input">
          Todo
        </label>
        <input type="text" className="text-input" />
        <label htmlFor="author-input" className="input">
          Author
        </label>
        <input type="text" className="author-input" />
        <button className="add-todo-btn" type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
};
