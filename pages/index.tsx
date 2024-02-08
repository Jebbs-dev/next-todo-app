import { useTasksQuery } from "@/queries/fetch-task";
import { useUserQuery } from "@/queries/fetch-user";
import CompletedList from "@/components/CompletedList";
import { Task } from "@prisma/client";
import TodoList from "@/components/TodoList";

export default function Home() {
  const { data: todoTask, isLoading, isError, error } = useTasksQuery();

  return (
    <>
      <TodoList />
      <CompletedList tasks={todoTask as Task[]} isLoading={isLoading} />
    </>
  );
}
