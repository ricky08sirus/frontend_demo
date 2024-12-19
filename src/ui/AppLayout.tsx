import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import ScoreBoard from './ScoreBoard';
import { useEffect, useState } from 'react';
// import HelpModal from '../components/HelpModal';
import JoinModal from '../components/JoinModal';
import { EARN_TASKS } from '../helper/constants';
import { useRegisterUser } from '../hooks/useRegisterUser';
import SpinnerFullPage from '../ui/SpinnerFullPage';
import { useTelegramUser } from '../hooks/useTelegramUser';
import ShareModal from '../components/ShareModal';
import { useLocation } from "react-router-dom";
import Onboarding from './Onboarding';
import { useUserDetails } from '../context/userDetailsContext';


interface SafeAreaInsets {
  top: any;
  bottom: any;
  right: any;
}

export default function AppLayout() {
  const location = useLocation()

  const excludedPaths = ["/play"];
  const bgRoute = excludedPaths.includes(location.pathname);
  const [onboarding, setOnboarding] = useState(false)
  //REgister user and user Authentication
  const { telegramUser, isTelegramReady } = useTelegramUser();
  const { isRegistering, user, registerUser } = useRegisterUser();
  const { refId, safeAreaInset } = useUserDetails();
  console.log(refId, safeAreaInset)

  const safeArea = safeAreaInset as SafeAreaInsets;
  let safeAreaTop = safeArea?.top + 50
  let safeAreaBottom = safeArea?.bottom

  //Modal
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showRewardConfirmModal, setShowRewardConfirmModal] = useState(false);
  const [farmingConfirmModal, setFarmingConfirmModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentTab, setCurrentTab] = useState({
    key: 'BADGE_STREAK',
    label: 'Streak',
  });
  const [currentJoinTab, setCurrentJoinTab] = useState<any>(
    EARN_TASKS.Socials[0]
  );
  // const handleTouchMove = useCallback((event: any) => {
  //   if (event.scale !== 1) {
  //     event.preventDefault();
  //   }
  // }, []); // Add dependencies here if needed

  // useEffect(() => {
  //   // Add the event listener
  //   document.addEventListener('touchmove', handleTouchMove, { passive: false });

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     document.removeEventListener('touchmove', handleTouchMove);
  //   };
  // }, [handleTouchMove]);

  useEffect(() => {
    if (telegramUser && isTelegramReady) {

      const regDetails = refId
        ? {
          telegramId: telegramUser.telegramId,
          username: telegramUser.username,
          refId,
        }
        : {
          telegramId: telegramUser.telegramId,
          username: telegramUser.username,
        };

      registerUser(regDetails);
    }
  }, [telegramUser, isTelegramReady, refId, registerUser]);
  console.log(user)
  if (isRegistering || !user) {
    return <SpinnerFullPage />; // Show one spinner for user registration/loading
  }
  if (user.isNew === true) {
    setOnboarding(true)
  }
  if (onboarding) {
    return <Onboarding setOnboarding={setOnboarding} />
  }
  ///////////////////Check if the User is logged into telegram app if not redirect them. uncomment code when app is completed//////////////////

  // const isTelegramWebAppAvailable = () => {
  //   return Boolean(
  //     window.Telegram &&
  //     window.Telegram.WebApp &&
  //     /Telegram/i.test(navigator.userAgent)
  //   );
  // };

  // const telegramApp = isTelegramWebAppAvailable()

  // if (!telegramApp) {
  //   const appUrl = "https://t.me/BossBlock_Bot"

  //   window.location.replace(appUrl);
  //   return <></>
  // }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div style={{ paddingTop: `${safeAreaTop}px`, paddingBottom: `${safeAreaBottom}px` }} className={`overflow-y-hidden px-[20px] ${bgRoute && "bgColoor"} relative font-grotesk max-w-[850px] w-full mx-auto my-auto h-screen flex flex-col justify-between`
    }>
      {(showRewardConfirmModal || farmingConfirmModal) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}
      <header>
        <ScoreBoard />
      </header>
      <main className='flex-1 hide-scrollbar overflow-y-scroll'>
        <Outlet
          context={{
            showHelpModal,
            setShowHelpModal,
            showShareModal,
            setShowShareModal,
            showRewardConfirmModal,
            setShowRewardConfirmModal,
            showJoinModal,
            setShowJoinModal,
            currentTab,
            setCurrentTab,
            currentJoinTab,
            setCurrentJoinTab,
            // photoUrl,
            setFarmingConfirmModal
          }}
        />
      </main>
      <menu>
        <Nav />
      </menu>
      {/* {
        showHelpModal && (
          <HelpModal currentTab={currentTab} setVisibility={setShowHelpModal} />
        )
      } */}
      {
        showJoinModal && (
          <JoinModal
            currentTab={currentJoinTab}
            setVisibility={setShowJoinModal}
          />
        )
      }
      {showShareModal && <ShareModal setVisibility={setShowShareModal} />}
    </div >
  );
}
