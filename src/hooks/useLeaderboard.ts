import { useQuery } from "@tanstack/react-query";
import { getLeaderboard } from "../services/apiLeaderboard";

export function useLeaderboard(userId: string, nextPage?: number) {
  const {
    isPending,
    error,
    data: leaderboard,
    refetch,
  } = useQuery({
    queryKey: ["leaderBoard", userId, nextPage],
    queryFn: () => getLeaderboard(userId, nextPage),
  });

  return { isPending, error, leaderboard, refetch };
}
