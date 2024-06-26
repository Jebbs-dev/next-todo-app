import { TaskProps } from "@/types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";


export const useTaskMutation =()=>{

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async(task: TaskProps) => {
      const response = await axios.post("/api/task", {
        title: task.title,
        isCompleted: task.isCompleted,
        status: task.status,
      });

      return response.data;
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["tasks"]});
    }
  })
}