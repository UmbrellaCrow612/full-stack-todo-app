import axios from "axios";
import { useState } from "react";

export default function TodoItem({
  text,
  id,
  mutate,
}: {
  text: string;
  id: string;
  mutate: any;
}) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(text);

   const deleteTodo = async () => {
     try {
       await axios.delete(`/api/todo/delete/${id}`);
       mutate(); // Refresh the todo list after deletion
     } catch (error) {
       console.log(error);
     }
   };


  return (
    <>
      {editMode ? (
        <form className="relative">
          <input
            placeholder="Edit the todo"
            type="text"
            className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-md"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            required
          />
          <div className="absolute flex items-center gap-3 right-1 top-2">
            <button className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-green-500 rounded hover:bg-green-700">
              <AddSvg />
            </button>
            <button
              className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-red-500 rounded hover:bg-red-700"
              type="button"
              onClick={() => {
                setEditMode(!editMode);
                setEditText(text);
              }}
            >
              <XSvg />
            </button>
          </div>
        </form>
      ) : (
        <div className="relative w-full px-2 py-4 bg-blue-400 rounded-md shadow-md text-start">
          <p>{text}</p>
          <div className="absolute flex items-center gap-4 right-1 top-2">
            <button
              className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-green-500 rounded hover:bg-green-700"
              onClick={() => setEditMode(!editMode)}
            >
              <EditSvg />
            </button>
            <button
              className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-red-500 rounded hover:bg-red-700"
              onClick={deleteTodo}
            >
              <DeleteSvg />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const EditSvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </>
  );
};

const DeleteSvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
        <path d="M18 9l-6 6" />
        <path d="M12 9l6 6" />
      </svg>
    </>
  );
};

const AddSvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </>
  );
};

const XSvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    </>
  );
};
