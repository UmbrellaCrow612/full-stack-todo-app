import { createTodo } from "@/hooks";
import { useState } from "react";

export default function TodoInput({ mutate }: any) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Todo content cannot be empty");
      return;
    }

    const todoData = {
      content: text,
    };

    try {
      await createTodo(todoData);
      mutate();
      setText("");
      setError("");
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}
      <form
        className="flex justify-between w-full gap-4"
        onSubmit={handleAddTodo}
      >
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none outline-offset-4 outline-gray-500"
          type="text"
          placeholder="Write a todo"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-blue-500 rounded hover:bg-blue-700 outline-offset-4 outline-gray-500"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}
