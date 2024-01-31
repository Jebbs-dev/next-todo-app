import React from "react";
import TaskItem from "./component/TaskItem";
import { isEmpty } from "lodash";

interface TaskListProps {
  data: Record<string, any>[];
  heading: string;
}

const TaskList: React.FC<TaskListProps> = ({ data, heading }) => {
  return (
    <>
      <div className="mt-2 mb-10">
        <h1 className="text-4xl font-semibold text-white">{heading}</h1>
      </div>
      {data.map((task) => (
        <TaskItem key={task.id} data={task} />
      ))}
    </>
  );
};

export default TaskList;
