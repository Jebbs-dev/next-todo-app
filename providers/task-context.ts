import { MouseEventHandler, createContext } from "react";

export interface TaskItemProps {
  id: string | number;
  isCompleted: boolean;
  title: string;
  status: string;
}

export interface TaskItemProps {
  addTask?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface TaskContextProps {
  tasks: TaskItemProps[];
  toggleChecked: (status: string, taskId: number)=>void;
  removeTask: (taskId: string | number)=>void;
}


const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  toggleChecked: (status, taskId) => { },
  removeTask: (taskId) => { },
})

export default TaskContext;