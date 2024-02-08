import { useQuery } from "@tanstack/react-query"
import axios from "axios";


export const useTasksQuery = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get("/api/tasks");
      return response.data;
    },
    // staleTime: 1000 * 60 * 5,
  })
}
