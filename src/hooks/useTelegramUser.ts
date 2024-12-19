import { useState, useEffect } from "react";
import { useUserDetails } from "../context/userDetailsContext";

interface TelegramUser {
  telegramId: string;
  username: string;
  referralKey?: string;
}

interface UseTelegramUserReturn {
  telegramUser: TelegramUser | null;
  isTelegramReady: boolean;
}

export const useTelegramUser = (): UseTelegramUserReturn => {
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [isTelegramReady, setIsTelegramReady] = useState(false);
  const { getBackButtonPhotoUrl } = useUserDetails();

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.setHeaderColor("#000000");

      // Remove requestFullscreen call as it is unsupported
      // if (typeof tg.requestFullscreen === 'function') {
      //   try {
      //     tg.requestFullscreen();
      //   } catch (error) {
      //     console.warn('Failed to request fullscreen:', error);
      //   }
      // } else {
      //   console.warn('requestFullscreen is not supported in this environment.');
      // }

      tg.expand();
      console.log(tg);
      const initData = tg.initDataUnsafe;

      console.log(initData.start_param);

      if (initData && initData.user) {
        setTelegramUser({
          telegramId: initData.user.id.toString(),
          username: initData.user.username,
        });

        getBackButtonPhotoUrl(
          initData.user.photo_url,
          tg.BackButton.show,
          initData.start_param
            ? initData.start_param.split("refKey_")[1]
            : null,
          tg.BackButton.onClick,
          tg.BackButton.offClick,
          tg.BackButton.hide,
          tg.safeAreaInset
        );
      }

      setIsTelegramReady(true);
    }
  }, []);

  return {
    telegramUser,
    isTelegramReady,
  };
};
