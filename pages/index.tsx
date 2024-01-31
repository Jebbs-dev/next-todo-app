import Button from "@/components/Button";
import Input from "@/components/Input";
import TaskList from "@/components/TaskList";
import useCompletedTasks from "@/hooks/useCompletedTasks";
import useLoginModal from "@/hooks/useLoginModal";
import useTaskList from "@/hooks/useTaskList";
import { useCallback, useState } from "react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const { data: todoTask = [] } = useTaskList();
  const { data: completedTask = [] } = useCompletedTasks();
  const { data: fetchedUser } = useCurrentUser();


  const loginModal = useLoginModal();


  const [title, setTitle] = useState("");

  const addTask = useCallback(async () => { if (!fetchedUser) {
    loginModal.onOpen();
  }
  try {
    if (title.length > 0) {
      await axios.post("/api/task", {
        title,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTitle("");
  }
}, [fetchedUser, loginModal, title]);;

  return (
    <>
      <div className="w-1/2 p-3">
        <TaskList data={todoTask} heading="To do List" />
        <Input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <Button label="Add task" onClick={addTask} disabled={false} />
      </div>

      <div className="w-1/2 p-3">
        <TaskList data={completedTask} heading="Completed Tasks" />
      </div>
    </>
  );
}
