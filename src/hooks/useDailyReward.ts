import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dailyReward } from "../services/apiDailyReward";
import { useEffect } from "react";
import { useRegisterUser } from "./useRegisterUser";
import { useTelegramUser } from "./useTelegramUser";

export const useDailyReward = () => {
  const { telegramUser } = useTelegramUser();
  const { registerUser } = useRegisterUser();

  const telegramId = telegramUser?.telegramId;
  const username = telegramUser?.username;
  const userDetails = {
    telegramId,
    username,
  };
  const queryClient = useQueryClient();
  const {
    isPending: isLoading,
    data: claims,
    error: rewardError,
    isSuccess: isClaimed,
    reset,
    mutate: claimReward,
  } = useMutation({
    mutationFn: (userId: string) => dailyReward(userId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["userData"],
        refetchType: "active",
      });
    },
  });
  useEffect(() => {
    if (telegramUser) {
      registerUser(userDetails); // Now you can call registerUser here
    }
  }, [claims, registerUser]);
  return {
    claimReward,
    isLoading,
    claims,
    rewardError,
    isClaimed,
    reset,
  };
};
