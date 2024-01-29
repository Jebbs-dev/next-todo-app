import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useTask = (id?: string) => {
  const { data, error, isLoading } = useSWR(`/api/tasks/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
}