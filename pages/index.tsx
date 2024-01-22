import CompletedList from "@/components/CompletedList";
import TodoList from "@/components/TodoList";


export default function Home() {
  return (
    <>
      <TodoList/>
      <CompletedList/>
    </>
  );
}
