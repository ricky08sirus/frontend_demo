import Icon from '../../ui/Icon';
import Airdrop from '/AIRDROP LOGO.svg';
// import checked from '/Group.svg';
import { useEffect, useRef, useState } from 'react';
import { useDailyReward } from '../../hooks/useDailyReward';
import { useOutletContext } from 'react-router-dom';
import CheckedIcon from '../../ui/Icon/CheckedIcon';
// import CalendarIcon from '../../ui/Icon/CalendarIcon';
import streakLocked from "/streakLocked.svg"
import AirDropIcon from '../../ui/Icon/AirDropIcon';

interface StreakRewardProps {
  tabs: any[];
  onHandleTab: (tab: object) => void;
  streak: number;
  userId: string;
  totalDays: number;
}

const reward = [
  [
    { icon: Airdrop, value: 5 },
  ],
  [
    { icon: Airdrop, value: 8 },
  ],
  [
    { icon: Airdrop, value: 10 },
  ],
  [
    { icon: Airdrop, value: 13 },
  ],
  [
    { icon: Airdrop, value: 15 },
  ],
  [
    { icon: Airdrop, value: 18 },
  ],
  [
    { icon: Airdrop, value: 20 },
  ],
];

const buttonWidth = 86;
const spacing = 10;
export default function StreakReward({
  tabs,
  onHandleTab,
  streak,
  userId,
  // totalDays,
}: StreakRewardProps) {
  // const today = new Date();
  const { claimReward } = useDailyReward();
  const { setShowRewardConfirmModal }: any = useOutletContext();
  const [error, setError] = useState("")
  // const getLastDayOfMonth = lastDayOfMonth(today);
  // const daysInMonth = getLastDayOfMonth.getDate();
  const scrollPosition = (streak - 1) * (buttonWidth + spacing);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleClaimReward = () => {
    claimReward(userId, {
      onSuccess: () => {
        setShowRewardConfirmModal(true);
        console.log('Claim successful');
      },
      onError: (error) => {
        console.error('Claim failed:', error.message);
        setError(error.message)
      },
    });
  };

  return (
    <div className='border-[2px] border-[#212121] rounded-lg px-4 py-5 flex flex-col gap-5'>
      {/* <div className='bg-[#0A0C1A] gradientBorder rounded-lg px-4 py-5 flex flex-col gap-5'> */}
      <div className='flex justify-between items-center'>
        <h5 className='font-semibold text-sm leading-normal font-monserrat'>
          Daily streak
        </h5>
        <span onClick={() => onHandleTab(tabs[0])}>
          {/* <Icon src={IconInfo} alt='infor' width={32} height={32} /> */}
        </span>
      </div>
      {error && <span className='text-[9px] leading-normal textGradientReward'>The next reward <strong>for Day {streak + 1}</strong> will be available tomorrow </span>}

      <div
        ref={scrollRef}
        className='hide-scrollbar overflow-x-scroll flex space-x-[10px] '
        style={{ scrollLeft: scrollPosition } as React.CSSProperties}
      >
        {Array.from({ length: 7 }, (_, index) => (
          <button
            onClick={handleClaimReward}
            key={index}
            className={` ${index + 1 === streak + 1
              ? 'radiusGradient'
              : ''
              } ${index + 1 > streak + 1
                ? 'cursor-not-allowed opacity-50 border-dashed border-gray-500'
                : ''
              } ${index + 1 < streak + 1 && 'cursor-not-allowed'
              } ${index + 1 === streak && `border-[1px] border-[#37f5ec] border-opacity-40`} cardGradient flex flex-col gap-4 px-[18px] rounded-2xl`}
          >
            <span className='dayGradient rounded-[22px] mt-2 pt-[1px] pb-[4px] px-[10px]'>
              <span className='text-[11px] text-clip textGradientReward traking-[0.22px] font-medium leading-normal whitespace-nowrap'>
                Day {index + 1}
              </span>
            </span>
            <div>
              <div className='flex flex-col justify-center space-y-[8px] pb-[16px] border-b-[0.5px] border-[#323232]'>
                {reward[index].map((item, idx) => (
                  <div
                    key={idx}
                    className='flex flex-col justify-center items-center gap-[10px]'
                  >
                    {/* <Icon
                      src={item.icon}
                      alt='reward icon'
                      width={32}
                      height={32}
                    /> */}
                    <AirDropIcon />
                    <span className='textGradientReward tracking-wide font-semibold text-[13px]'>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='pb-[18px] mt-[-5px] mx-auto'>
              {streak >= index + 1 ? (
                <span className='text-center flex flex-col items-center justify-center '>
                  {/* <Icon src={checked} alt='checked' width={24} height={24} /> */}
                  <CheckedIcon />
                  <p className='gradientText text-[11px] font-medium leading-normal tracking-[0.22px]'>
                    Claimed
                  </p>
                </span>
              ) : (
                streak + 1 === index + 1 ? <span className='text-[#FFAA00] mt-1 flex flex-col justify-center items-center'>
                  {/* <FaGift style={{ fontSize: '20px', color: '#FFAA00' }} /> */}
                  <button className='text-[11px] p-2 font-medium text-black leading-normal tracking-[0.22px] mt-1 rounded-full bg-[#37f5ec]'>Claim</button>
                </span> : <span className='flex flex-col justify-center items-center gradientText text-[11px] font-medium leading-normal tracking-[0.22px]'>
                  <Icon
                    src={streakLocked}
                    alt='reward icon'
                    width={21}
                    height={21}
                  />
                  Locked
                </span>
              )}
            </div>

          </button>
        ))}
      </div>
      <span className='font-poppins gradientText font-normal text-[11px] tracking-[0.02em] leading-[16.5px]'>
        *Come back tomorrow to claim{' '}
        <strong>day {streak + 1}’s rewards.</strong>
        <p>
          <span className='noteGradient'>Note: {" "}</span>
          Skipping a day will reset your streak.
        </p>
      </span>
    </div>
  );
}
