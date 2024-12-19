// import BackIcon from '/back.svg';n
// import InfoIcon from '/info.svg';
import StarterBadgeIcon from '/starter.svg';
import { BADGE_CONSTANTS, HELP_TABS } from '../helper/constants';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserDetails } from '../context/userDetailsContext';


type BadgeKey = keyof typeof BADGE_CONSTANTS;

interface Tab {
  key: BadgeKey; // Type the key as BadgeKey to match BADGE_CONSTANTS
  label: string;
}

interface BadgeContext {
  showHelpModal: boolean;
  setShowHelpModal: (show: boolean) => void;
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export default function Badge() {
  const navigate = useNavigate();
  const { backButton, backOnClick, backOffClick, backHide } = useUserDetails()

  useEffect(() => {
    if (backButton) {
      backButton();
      backOnClick(() => {
        console.log("back click")
        navigate("/me")
      });

      return () => {
        backOffClick();
        backHide();
      };
    }
  }, [backButton, backOnClick, backOffClick, backHide, navigate]);

  const {
    showHelpModal,
    // setShowHelpModal,
    currentTab,
    setCurrentTab,
  } = useOutletContext<BadgeContext>(); // Properly type the outlet context

  const renderBadges = () => {
    return BADGE_CONSTANTS[currentTab?.key]?.map(
      (badgeName: string, index: number) => (
        <div
          key={index}
          className='bg-[#141926] h-16 rounded-2xl pl-5 py-4 flex items-center'
        >
          <img
            loading='lazy'
            src={StarterBadgeIcon}
            className='w-8 h-8 mr-2.5'
            alt='Starter Badge'
          />
          <div className='text-base font-medium leading-5'>{badgeName}</div>
        </div>
      )
    );
  };

  return (
    <div className='flex flex-col w-full' id='badgeTab'>
      {/* <div className='relative h-8 flex flex-row'>
        <img
          loading='lazy'
          src={BackIcon}
          className='cursor-pointer'
          onClick={() => navigate('/me')}
        />
      </div> */}
      <div className='flex flex-col relative'>
        <div className='my-10'>
          My Badges{' '}
          <span className='font-bold text-[#57A3FF] text-[13px] leading-4'>
            11/100
          </span>
        </div>
        <div className='flex overflow-x-auto max-w-[850px] w-full mb-4 whitespace-nowrap scroll-container'>
          {HELP_TABS.slice(0, -1).map((tab: any) => (
            <div
              key={tab.key}
              className={`pr-5 flex leading-5 font-semibold text-base cursor-pointer ${currentTab.key === tab.key ? 'text-[#57A3FF]' : ''
                }`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className='flex flex-col mt-7 w-full'>
          <div className='h-8 flex justify-between items-center'>
            <div className='text-[13px] font-medium leading-4'>
              {!showHelpModal ? 'LOCKED' : ''}
            </div>
            {/* <img
              loading='lazy'
              src={InfoIcon}
              id='info-badge-icon'
              alt='Info Icon'
              className='cursor-pointer'
              onClick={() => setShowHelpModal(true)}
            /> */}
          </div>
          {!showHelpModal && (
            <div className='flex flex-col gap-2.5 w-full pr-1 mt-2.5'>
              {renderBadges()}
            </div>
          )}
        </div>

        {!showHelpModal && (
          <>
            <div className='border-t mt-7 border-[#161616]'></div>

            <div className='flex flex-col mt-7'>
              <div className='h-8 flex justify-between items-center'>
                <div className='text-[13px] font-medium leading-4'>
                  UNLOCKED
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
