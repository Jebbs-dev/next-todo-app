import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { config, title } from "process";

export const useDeleteTasks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId?: string) => {
      const response = await axios.delete("/api/delete/", { data: { taskId } });
      console.log(response.data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
