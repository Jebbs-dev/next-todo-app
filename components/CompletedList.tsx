import { Task } from "@prisma/client";
import React, { useMemo } from "react";
import toast from "react-hot-toast"

interface CompletedListProps {
  tasks: Task[]
  isLoading: boolean
}

const CompletedList: React.FC<CompletedListProps> = ({ tasks, isLoading }) => {

  const completedTasks = useMemo(() => {
    
    return tasks?.filter((task) => task.isCompleted) || null;
  }, [tasks])

  if(isLoading){
    // const toastMessage = toast.success("Setting task as completed!")
    // return toastMessage;
    return <div>Loading...</div>
  }

  return (
    <div className="w-1/2 px-3">
      <div className="mt-2 mb-5 top-0 sticky z-20">
          <h1 className="text-4xl font-semibold text-white">Completed Tasks</h1>
        </div>
      {completedTasks?.map((task: Record<string, any>)=>(
        <p key={task.id} className="text-white ml-5 text-lg text-left p-2">
          {task?.title}
      </p>
      ))}
    </div>
  );
};

export default CompletedList;
