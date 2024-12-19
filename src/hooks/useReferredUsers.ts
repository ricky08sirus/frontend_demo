import { useQuery } from "@tanstack/react-query";
import { getReferredUsers } from "../services/apiReferredUser";

export function useReferredUsers(userId: string) {
  const {
    isPending,
    error,
    data: referredUsers,
  } = useQuery({
    queryKey: ["referredData", userId],
    queryFn: () => getReferredUsers(userId),
  });

  return { isPending, error, referredUsers };
}
