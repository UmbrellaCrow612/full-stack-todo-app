export default function TodoItem({ text, id }: { text: string; id: string }) {
  return (
    <div className="relative w-full px-2 py-4 bg-blue-400 rounded-md shadow-md text-start">
      <p>{text}</p>
      <div className="absolute flex items-center gap-4 right-1 top-2">
        <button className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-green-500 rounded hover:bg-green-700">
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
        </button>
        <button className="px-4 py-2 font-bold text-white transition-all ease-in-out bg-red-500 rounded hover:bg-red-700">
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
        </button>
      </div>
    </div>
  );
}
