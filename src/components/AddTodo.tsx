import { useId, useState } from "react";
import type { ITodo } from "../types";

interface IAddTodoProps {
  onAdd: (todo: ITodo) => void;
}

export const AddTodo: React.FC<IAddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !author.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
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
        <textarea
          className="text-input"
          placeholder="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          className="author-input"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="button add-todo-btn" type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
};
