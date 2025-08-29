import { useState } from "react";
import type { ITodo } from "../types";

interface IAddTodoProps {
  onAdd: (todo: ITodo) => void;
}

export const AddTodo: React.FC<IAddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !author.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      text,
      author,
      completed: false,
      date: new Date(),
    });

    setText("");
    setAuthor("");
  };

  return (
    <section className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="add-todo-wrapper">
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
        </div>
        <button className="button add-todo-button" type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
};
