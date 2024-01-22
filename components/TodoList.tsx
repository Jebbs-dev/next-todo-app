import React, { useCallback } from "react";
import Input from "./Input";
import TaskItem from "./TaskItem";
import Button from "./Button";

const TodoList = () => {
  const handleChange = useCallback(() => {}, []);

  const onClick = ()=> {

  }

  return (
    <div className="w-1/2 p-3">
      <div className="mt-2 mb-10">
        <h1 className="text-4xl font-semibold text-white">To do List</h1>
      </div>
      <TaskItem/>
      <Input type="text" onChange={handleChange} />
      <Button label="Add task" onClick={onClick} disabled={false}/>
    </div>
  );
};

export default TodoList;
