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

import { ClipLoader } from "react-spinners";

import toast from "react-hot-toast";
import { MutateTaskData, useUpdateTaskTitle } from "@/mutations/update-task-title";

const TodoList = () => {
  const { data: todoTask, isLoading } = useTasksQuery();
  const { data: fetchedUser } = useUserQuery();

  const { mutateAsync: addTaskMutation } = useTaskMutation();

  const { mutateAsync: addTaskUpdate } = useUpdateTaskStatus();

  const { mutateAsync: addTitleUpdate } = useUpdateTaskTitle();

  const { mutateAsync: addDeleteTask } = useDeleteTasks();

  const loginModal = useLoginModal();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("unchecked")
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);

  if (isLoading) {
    let loadingMessage;
    return (loadingMessage = (
      <span className="text-white">
        <span>
          <ClipLoader color="white" size={20} />
        </span>
        Loading Page...
      </span>
    ));
  }

  const addTask = async () => {
    if (!fetchedUser) {
      loginModal.onOpen();
    }

    try {
      if (title.length > 0) {
        await addTaskMutation({
          title,
          status,
          isCompleted,
        });

        toast.success("Task added successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setTitle("");
    }
  };

  const toggleCheckbox = async (taskId: string) => {
    await addTaskUpdate(taskId);
  };

  const handleUpdateTitle = async (taskId: string) => {
    await addTitleUpdate({
      title,
      taskId
    })
    setTitle("")
  };

  const deleteTask = async (taskId: string) => {
    await addDeleteTask(taskId);

    toast.success("Task deleted successfully!");
  };

  return (
    <div className="w-1/2 px-3 py-2 flex flex-col justify-around relative">
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
              handleUpdateTitle={handleUpdateTitle}
              setTitle={setTitle}
              deleteTask={deleteTask}
              setIsEditable={setIsEditable}
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
