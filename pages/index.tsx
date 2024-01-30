import CompletedList from "@/components/CompletedList";
import TodoList from "@/components/TodoList";
import useCompletedTasks from "@/hooks/useCompletedTasks";
import useTaskList from "@/hooks/useTaskList";


export default function Home() {

  const {data: todoTask} = useTaskList()
  const {data: completedTask} = useCompletedTasks()

  return (
    <>
      <TodoList/>
      <CompletedList/>
    </>
  );
}
