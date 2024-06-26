import React from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface TaskOptionProps {
  deleteTask: (taskId: string) => void;
  id: string;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskOptions: React.FC<TaskOptionProps> = ({deleteTask, id, setIsEditable}) => {
  return (
    <div className="hover:bg-gray-800 rounded-full flex items-center justify-around p-[2px]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <PiDotsThreeBold size={25} color="white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={()=>setIsEditable(true)}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>deleteTask(id)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskOptions;
