import { useState } from "react";

export default function TodoInput() {
  const [text, setText] = useState("");
  // Todo: Add react query for sending post request and showing loading states
  return (
    <>
      <form className="flex justify-between w-full gap-4">
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none outline-offset-4 outline-gray-500"
          type="text"
          placeholder="Write a todo"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-blue-500 rounded hover:bg-blue-700 outline-offset-4 outline-gray-500">
          Add
        </button>
      </form>
    </>
  );
}
