import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";

export const useUpdateTaskStatus =()=>{

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async(taskId: string) => {
      const response = await axios.patch(`/api/completed`, {
        taskId, 
      });
      
      return response.data;
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["tasks"]});
    }
  })
}