import {
  useMutation,
  useQueryClient,
  // UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import {
  collectFarmingReward,
  getFarmingReward,
  startFarming,
} from "../services/apiFarming";
import { useEffect } from "react";
import { useRegisterUser } from "./useRegisterUser";
import { useTelegramUser } from "./useTelegramUser";

//fetch farming details
export function useGetFaming(userId: string) {
  const {
    isPending,
    error,
    data: farmming,
  } = useQuery({
    queryKey: ["farmData", userId],
    queryFn: () => getFarmingReward(userId),
  });

  return { isPending, error, farmming };
}

export const useStartFarming = () => {
  const { telegramUser } = useTelegramUser();
  const { registerUser } = useRegisterUser();

  // useEffect(() => {
  //   const tg = (window as any).Telegram?.WebApp;
  //   if (tg) {
  //     tg.ready();

  //     const initData = tg.initDataUnsafe;
  //     if (initData && initData.user) {
  //       setTelegramUser({
  //         telegramId: initData.user.id.toString(),
  //         username: initData.user.username,
  //       });
  //     }
  //   }
  // }, []);

  const telegramId = telegramUser?.telegramId;
  const username = telegramUser?.username;
  const userDetails = {
    telegramId,
    username,
  };
  const queryClient = useQueryClient();
  const { mutate: startfarming, data: farming } = useMutation({
    mutationFn: (userId: string) => startFarming(userId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["userData", "farmData"],
        refetchType: "active",
      });
    },
  });
  useEffect(() => {
    if (telegramUser) {
      registerUser(userDetails);
    }
  }, [farming, registerUser]);
  return {
    startfarming,
  };
};

//collect reward
export const useCollectFarmingReward = () => {
  const { telegramUser } = useTelegramUser();
  const { registerUser } = useRegisterUser();

  // useEffect(() => {
  //   const tg = (window as any).Telegram?.WebApp;
  //   if (tg) {
  //     tg.ready();

  //     const initData = tg.initDataUnsafe;
  //     if (initData && initData.user) {
  //       setTelegramUser({
  //         telegramId: initData.user.id.toString(),
  //         username: initData.user.username,
  //       });
  //     }
  //   }
  // }, []);

  const telegramId = telegramUser?.telegramId;
  const username = telegramUser?.username;
  const userDetails = {
    telegramId,
    username,
  };
  const queryClient = useQueryClient();
  const { mutate: collectReward, data: reward } = useMutation({
    mutationFn: (userId: string) => collectFarmingReward(userId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["userData", "farmData"],
        refetchType: "active",
      });
    },
  });
  useEffect(() => {
    if (telegramUser) {
      registerUser(userDetails);
    }
  }, [reward, registerUser]);
  return {
    collectReward,
    reward,
  };
};
