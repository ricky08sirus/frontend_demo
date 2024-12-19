import CalendarIcon from '../ui/Icon/CalendarIcon';
import StreakReward from '../features/steak/StreakReward';
import { useOutletContext, useParams } from 'react-router-dom';
import Flamming from '../ui/Flamming';
import { useQuery } from '@tanstack/react-query';
import RewardConfirmModal from '../components/RewardConfirmModal';
import { motion } from "framer-motion"

interface Modal {
  setShowHelpModal: any;
  setCurrentTab: any;
  showRewardConfirmModal: any
  setShowRewardConfirmModal: any
}

interface UserData {
  [key: string]: any; // This allows for an object with any number of properties
}

const tabs = [
  { key: 'DAILY_STREAK', label: '' },
  { key: 'STREAK_PROGRESS', label: '' },
];

export default function Streak() {
  const { userId } = useParams<{ userId: string }>(); // Capture the ID from the URL
  const { data } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: () => Promise.resolve(),
    enabled: false,
  });
  const streak = data?.streak?.currentStreak;
  const totalDays = data?.streak?.totalDays;
  // const today = new Date();
  // const todayDay = today.getDate();
  const progress = Math.floor((streak / 7) * 100);
  const { setShowHelpModal, setCurrentTab, showRewardConfirmModal,
    setShowRewardConfirmModal } = useOutletContext<Modal>();

  const handleHelpModal = (tabKey: object) => {
    setCurrentTab(tabKey);
    setShowHelpModal(true);
  };
  // const calendarIcons = [CalenderTwo, Calender, CalenderOne];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='w-full flex flex-col space-y-5'>
      {/* <div className='customGradient mt-5 rounded-[24px] px-4 pb-5'> */}
      <div className='border-[2px] border-[#212121]  mt-5 rounded-[8px] px-4 pb-5'>
        <div className='flex justify-between items-center border-b-[0.5px] border-[#323232]'>
          <span>
            <span className='text-6xl md:text-8xl font-semibold'>{streak}</span>
            <span className='self-end text-sm sm:text-xl font-semibold leading-normal'>
              {' '}
              {streak >= 2 ? 'Days' : 'Day'} Streak!
            </span>
          </span>
          <span>
            <Flamming />
          </span>
        </div>
        <div className='text-secondaryText text-[13px] tracking-[0.06em] leading-[15.85px] flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <h5 className='font-bold text-sm leading-normal text-primaryText'>
              Streak progess
            </h5>
            <span
              onClick={() =>
                handleHelpModal({ key: 'BADGE_STREAK', label: 'Streak' })
              }
            >
              {/* <Icon src={Infor} alt='infor' width={32} height={32} /> */}
            </span>
          </div>
          <div className='relative'>
            <div className='absolute z-20 bottom-[-7px] justify-between right-0'>

              {/* {calendarIcons.map((icon, index) => (
                <div key={index}> */}
              <CalendarIcon />
              {/* <Icon src={CalenderTwo} alt='calendar icon' width={32} height={32} /> */}
              {/* </div> */}
              {/* ))} */}
            </div>
            <div className='relative w-full h-3 bg-[#37f5ec0e] rounded-full'>
              {/* <div className='relative w-full h-3 gradientBackgroundProgress rounded-full'> */}
              <div
                className='absolute top-0 left-0 h-full bg-[#37F5EB]  rounded-full'
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="items-center text-center font-medium tracking-[0.78px] text-[13px] leading-normal mb-1">
            Unlock Starter badge on
            <span className="text-[#37F5EB] font-semibold"> Day 07.</span>
          </div>
        </div>
      </div>
      <StreakReward
        totalDays={totalDays}
        userId={userId || ""}
        streak={streak}
        tabs={tabs}
        onHandleTab={handleHelpModal}
      />
      {
        showRewardConfirmModal && (
          <RewardConfirmModal setVisibility={setShowRewardConfirmModal} />
        )
      }
    </motion.section>
  );
}
