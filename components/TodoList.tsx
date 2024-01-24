import React, { useCallback, useState } from "react";
import Input from "./Input";
import TaskItem from "./component/TaskItem";
import Button from "./Button";
import useLoginModal from "@/hooks/useLoginModal";

const TodoList = () => {
  const loginModal = useLoginModal();
  const [tasks, setTasks] = useState("");

  const handleChange = useCallback(() => {}, []);

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div className="w-1/2 p-3">
      <div className="mt-2 mb-10">
        <h1 className="text-4xl font-semibold text-white">To do List</h1>
      </div>
      <TaskItem />
      <Input type="text" onChange={handleChange} />
      <Button
        label="Add task"
        onClick={onClick}
        disabled={false}
        authWidth={false}
        authEffect={false}
      />
    </div>
  );
};

export default TodoList;
