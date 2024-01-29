import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useTaskList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/tasks", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export default useTaskList;
