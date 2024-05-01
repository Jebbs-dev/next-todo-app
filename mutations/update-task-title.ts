import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";

const updateUser = async (taskId: string, title: string) => {
  const response = await axios.patch(`/api/tasks/${taskId}`, {
    title, 
  });

  console.log(response.data);
  return response.data;
};

export type MutateTaskData = {
  taskId: string;
  title: string;
}

export const useUpdateTaskTitle = ()=>{

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async(data: MutateTaskData) => {
      const response = await axios.patch(`/api/tasks/${data.taskId}`, {
        title: data.title, 
      });

      console.log(response.data);
      return response.data;
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["tasks"]});
    }
  })
}