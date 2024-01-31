import useCompletedTasks from "@/hooks/useCompletedTasks";
import TaskContext, { TaskItemProps } from "./task-context";
import { useCallback, useReducer } from "react";
import axios from "axios";

interface TaskState {
  tasks: TaskItemProps[];
}

type AppAction =
  | { type: "ADD"; task: TaskItemProps }
  | { type: "REMOVE"; id: string | number }
  | { type: "TOGGLE"; task: TaskItemProps };

const defaultTaskState = {
  tasks: [],
};

const taskReducer = (
  state: TaskState = defaultTaskState,
  action: AppAction
) => {
  if (action.type === "ADD") {
    const updatedTasks = state.tasks.map((task: any) => {
      if (task.id === action.task.id) {
        return {
          ...task,
          isCompleted: action.task.isCompleted,
          status: "checked",
        };
      }
      return task;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }

  if (action.type === "TOGGLE") {
    const updatedTasks = state.tasks.map((task: any) => {
      if (task.id === action.task.id) {
        return {
          ...task,
          isCompleted: action.task.isCompleted,
          status: action.task.status,
        };
      }
      return task;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  }

  return state;
};

interface childrenProps {
  children: React.ReactNode;
}

const TaskProvider = ({ children }: childrenProps) => {
  const [state, dispatch] = useReducer(taskReducer, defaultTaskState);
  const { data: completedTasks } = useCompletedTasks();

  const getStatus = (status: string) => {
    if (status === "unchecked") {
      return "checked";
    } else if (status === "checked") {
      return "unchecked";
    } else return status;
  };

  const addTask = (task: TaskItemProps) => dispatch({ type: "ADD", task });

  const removeTask = (taskId: string | number) =>
    dispatch({ type: "REMOVE", id: taskId });

  const toggleChecked = async (status: string, taskId: number) => {
    const response = await axios.patch('/api/checked', {
      isCompleted: status === "checked",
      status: getStatus(status),
    });

    dispatch({
      type: "TOGGLE",
      task: response.data,
    });
  };

  const taskContext = {
    tasks: state.tasks,
    toggleChecked,
    removeTask,
  };

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
