import axios, { AxiosResponse } from "axios";

export interface Todo {
  content: string;
}

export async function createTodo(todoData: Todo): Promise<AxiosResponse<Todo>> {
  try {
    const response = await axios.post<Todo>("/api/todo/create", todoData);
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create todo");
  }
}
