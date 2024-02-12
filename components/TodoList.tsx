import React, { useState } from "react";

import Input from "./Input";
import TaskItem from "./component/TaskItem";
import Button from "./Button";

import useLoginModal from "@/hooks/useLoginModal";
import { useTaskMutation } from "@/mutations/add-task";
import { useTasksQuery } from "@/queries/fetch-task";
import { useUserQuery } from "@/queries/fetch-user";
import { Task } from "@prisma/client";
import { useUpdateTaskStatus } from "@/mutations/update-task";
import { useDeleteTasks } from "@/mutations/delete-task";

const TodoList = () => {
  const { data: todoTask, isLoading } = useTasksQuery();
  const { data: fetchedUser } = useUserQuery();

  const { mutateAsync: addTaskMutation } = useTaskMutation();

  const { mutateAsync: addToggleCheck } = useUpdateTaskStatus();

  const {mutateAsync: addDeleteTask} = useDeleteTasks();

  const loginModal = useLoginModal();

  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("unchecked");
  const [isEditable, setIsEditable] = useState(false)
  const [updateTitle, setUpdateTitle] = useState("")


  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addTask = async () => {
    if (!fetchedUser) {
      loginModal.onOpen();
    }
    try {
      if (title.length > 0) {
        await addTaskMutation({ title, isCompleted, status });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
    }
  };

  const toggleCheckbox = async (taskId: string) => {
    await addToggleCheck(taskId);
  };

  const deleteTask = async (taskId: string) => {
    await addDeleteTask(taskId)
  }

  return (
    <div className="w-1/2 px-3 flex flex-col justify-around relative">
      <div className="h-4/5 overflow-auto">
        <div className="mt-2 mb-5 top-0 sticky z-20">
          <h1 className="text-4xl font-semibold text-white">To do Tasks</h1>
        </div>
        {fetchedUser &&
          todoTask.map((task: Task) => (
            <TaskItem
              key={task.id}
              data={task}
              toggleCheckbox={toggleCheckbox}
              isEditable={isEditable}
              // setUpdateTitle={setUpdateTitle}
              deleteTask={deleteTask}
            />
          ))}
      </div>
      <div className="pb-3 mb-4 h-1/5">
        <Input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <Button label="Add task" onClick={addTask} disabled={false} />
      </div>
    </div>
  );
};

export default TodoList;
