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
        {/* <input type="text" className="text-input" placeholder="Todo" /> */}
        <textarea className="text-input" placeholder="Todo" />
        <input type="text" className="author-input" placeholder="Author" />
        <button className="button add-todo-btn" type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
};
