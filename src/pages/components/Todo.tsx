import axios from "axios";
import useSWR from "swr";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Todo() {
  const { data, error, isLoading, mutate } = useSWR("/api/todo/all", fetcher);

  return (
    <>
      <div className="w-[85%] md:max-w-xl border py-10 bg-white rounded-xl border-gray-300 shadow-md px-2 space-y-5">
        <TodoInput mutate={mutate} />
        <div className="h-[20rem] px-2 py-1 flex flex-col overflow-auto space-y-5">
          {isLoading ? (
            <>Loading</>
          ) : (
            <>
              {data.map((todo: any) => (
                <>
                  <TodoItem text={todo.content} id={todo.id} mutate={mutate} />
                </>
              ))}
            </>
          )}
          {error && <>Error</>}
        </div>
      </div>
    </>
  );
}
