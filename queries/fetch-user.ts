import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axios.get("/api/current");
      return response.data;
    },
  });
};
