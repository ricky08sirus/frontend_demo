import { useEffect, useRef, useState } from 'react';
import AirDropIcon from '/airdrop.svg'; // TODO
import BossCoin from '../ui/Icon/BossCoin';
import XPOrange from '../ui/Icon/XPOrange';

type SVGComponentType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

interface Task {
  INTRO: string;
  TITLE: string;
  COIN_COUNT: number;
  XP_COUNT: number;
  AIRDROP_COUNT: number;
  ICON: SVGComponentType;
}

interface JoinModalProps {
  currentTab: Task;
  setVisibility: (isVisible: boolean) => void;
}

export default function JoinModal({
  currentTab,
  setVisibility,
}: JoinModalProps) {
  const joinModalRef = useRef<HTMLDivElement | null>(null);
  const [modalContentHeight, setModalContentHeight] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        joinModalRef.current &&
        !joinModalRef.current.contains(event.target as Node)
      ) {
        setVisibility(false);
      }
    };

    const calculateHeight = () => {
      setModalContentHeight(window.outerHeight / 2 + 130);
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', calculateHeight);
    calculateHeight();

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', calculateHeight);
    };
  }, [setVisibility]);

  console.log(currentTab);

  return (
    <div
      className={`w-full absolute flex flex-col z-50 overflow-auto scroll-container bottom-0 rounded-t-[56px] modalBackground max-w-[810px] mx-auto left-1/2 -translate-x-1/2 join-modal`}
      ref={joinModalRef}
      style={{ height: modalContentHeight }}
    >
      <div className='p-5 flex flex-col gap-10'>
        <div className='p-[25px] flex flex-col'>
          <div className='flex justify-center'>
            <img loading='lazy' src={currentTab.ICON as any} className='h-16 w-16' />
          </div>
          <div className='text-center text-[23px] font-bold font-monserrat leading-[30px]'>
            {currentTab.TITLE}
          </div>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-col min-w-[200px] gap-2'>
            <div className='flex flex-row h-8'>
              <BossCoin width={32} height={32} className='mr-3' />
              <div className='text-[13px] font-medium font-poppins py-[5.5px]'>
                Earn {currentTab.COIN_COUNT} Boss coins
              </div>
            </div>
            <div className='flex flex-row h-8'>
              <XPOrange width={32} height={32} className='mr-3' />
              <div className='text-[13px] font-medium font-poppins py-[5.5px]'>
                Earn {currentTab.XP_COUNT} XP
              </div>
            </div>
            <div className='flex flex-row h-8'>
              <img loading='lazy' src={AirDropIcon} className='mr-3 w-8 h-8' />
              <div className='text-[13px] font-medium font-poppins py-[5.5px]'>
                Earn {currentTab.AIRDROP_COUNT} Airdrop points
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <div className='rounded-[14px] h-12 py-[14px] text-center bg-[#57A3FF] text-base font-lexend font-medium leading-5 text-[#0A0C1A]'>
            Join
          </div>
          <div className='rounded-[14px] h-12 py-[14px] text-center border border-[#E0E0E0] text-base font-lexend font-medium leading-5 text-primaryText'>
            Check
          </div>
        </div>
      </div>
    </div>
  );
}
