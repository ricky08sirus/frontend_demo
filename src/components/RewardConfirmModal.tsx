import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import AirDropIcon from '../ui/Icon/AirDropIcon';
import Flamming from '../ui/Flamming';

interface RewardConfirmModalProps {
  setVisibility: (isVisible: boolean) => void;
}

interface UserData {
  [key: string]: any;
}

export default function RewardConfirmModal({
  setVisibility,
}: RewardConfirmModalProps) {
  const rewardConfirmModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        rewardConfirmModalRef.current &&
        !rewardConfirmModalRef.current.contains(event.target as Node)
      ) {
        setVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setVisibility]);

  const { data } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: () => Promise.resolve(),
    enabled: false,
  });

  const handleClickAwesome = () => {
    setVisibility(false);
  };

  return (
    <div
      className='w-[90%] absolute flex flex-col z-50 rounded-[32px] max-w-[610px] mx-auto bg-[linear-gradient(91deg,#0A001B_4.52%,#00111D_91.33%)] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-[20px] pb-[30px]'
      ref={rewardConfirmModalRef}
    >
      <h1 className='my-4 text-center mb-5 font-bold tracking-[0.32px] text-[16px] modalClaimText leading-4'>
        COLLECT DAILY BONUS
      </h1>
      <div className='mt-3 mb-2 flex flex-col justify-center'>
        <div className='text-center'>

          <Flamming />
        </div>
        <span className='text-[11px] mb-[56px] font-medium tracking-[0.22px] text-center'>You've Recieved</span>

        <div className='flex gap-[10px] mb-[30px] justify-center items-center'>

          <AirDropIcon />
          <span>{
            data?.streak?.currentStreak === 1 ? 5 :
              data?.streak?.currentStreak === 2 ? 8 :
                data?.streak?.currentStreak === 3 ? 10 :
                  data?.streak?.currentStreak === 4 ? 13 :
                    data?.streak?.currentStreak === 5 ? 15 :
                      data?.streak?.currentStreak === 6 ? 18 :
                        data?.streak?.currentStreak === 7 ? 20 :
                          5
          } Airdrop Points</span>
        </div>
      </div>
      <div
        className='rounded-[14px] bg-[#37F5EB] text-black font-medium py-[10px] flex justify-center cursor-pointer'
        onClick={() => handleClickAwesome()}
      >
        Awesome!!
      </div>
    </div>
  );
}