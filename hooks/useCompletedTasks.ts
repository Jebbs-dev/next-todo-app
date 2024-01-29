import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useCompletedTasks = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/checked-tasks",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading, mutate };
};

export default useCompletedTasks;
