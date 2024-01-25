import useSWR from "swr"

import fetcher from "@/lib/fetcher"

const useCurrentUser = () => {
  const { data, error, mutate, isLoading } = useSWR("/api/current", fetcher)

  return {
    data,
    error,
    mutate,
    isLoading
  }
}

export default useCurrentUser;