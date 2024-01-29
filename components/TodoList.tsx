import React, { useCallback, useState } from "react";

import { isEmpty } from "lodash";
import Input from "./Input";
import TaskItem from "./component/TaskItem";
import Button from "./Button";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useTaskList from "@/hooks/useTaskList";


const TodoList: React.FC = () => {
  const loginModal = useLoginModal();
  const { data: fetchedUser, mutate } = useCurrentUser();

  const { data: fetchedTask = [] } = useTaskList();
  const { mutate: mutateTasks} = useTaskList();

  const [title, setTitle] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const onClick = useCallback(async () => {
    if (!fetchedUser) {
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
  }, [fetchedUser, loginModal, title]);

  const getStatus = (status: string) => {
    if (status === "unchecked") {
      return "checked";
    } else if (status === "checked") {
      return "unchecked";
    } else return status;
  };

  const toggleComplete = (taskId: number, status: string) => {
    let response;

      fetchedTask.map((task: any) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: getStatus(status),
            animate: true,
          };
        }
        return task;
      });
  };

  return (
    <div className="w-1/2 p-3">
      <div className="mt-2 mb-10">
        <h1 className="text-4xl font-semibold text-white">To do List</h1>
      </div>
      {fetchedTask.map((task: Record<string, any>) => (
        <TaskItem key={task.id} allData={task} toggleComplete={toggleComplete} />
      ))}
      <Input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <Button label="Add task" onClick={onClick} disabled={false} />
    </div>
  );
};

export default TodoList;
