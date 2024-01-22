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

const TaskOptions = () => {
  return (
    <div className="hover:bg-gray-800 rounded-full flex items-center justify-around p-[2px]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <PiDotsThreeBold size={25} color="white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskOptions;
