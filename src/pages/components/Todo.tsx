import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function Todo() {
  // Todo: Add react query for data fetching and cache and as well as updating ui for changes
  return (
    <>
      <div className="w-[85%] md:max-w-xl border py-10 bg-white rounded-xl border-gray-300 shadow-md px-2 space-y-5">
        <TodoInput />
        <div className="h-[20rem] px-2 py-1 flex flex-col overflow-auto space-y-5">
          <TodoItem text="Item" id="1" />
        </div>
      </div>
    </>
  );
}
