import { useEffect, useRef } from 'react';
import BossCoinDark from '../ui/Icon/BossCoinDark';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import BossBlockBlue from '../../ui/Icon/BossBlockBlue';

interface FarmingConfirmModalProps {
  setVisibility: (isVisible: boolean) => void;
  handleClickCollect: () => void;
}

interface Modal {
  setFarmingConfirmModal: any
}

export default function FarmingConfirmModal({
  setVisibility,
  handleClickCollect,
}: FarmingConfirmModalProps) {
  const rewardConfirmModalRef = useRef<HTMLDivElement | null>(null);
  const { setFarmingConfirmModal } = useOutletContext<Modal>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        rewardConfirmModalRef.current &&
        !rewardConfirmModalRef.current.contains(event.target as Node)
      ) {
        setVisibility(false);
        setFarmingConfirmModal(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setVisibility]);

  return (
    <AnimatePresence>
      {/* <motion.div className="z-50" */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{ width: 'calc(100% - 32px)', zIndex: "999999" }}
          ref={rewardConfirmModalRef}
          className='modal-content absolute z-50 bg-[#171717] rounded-[20px] flex flex-col items-center justify-center h-[300px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-5'
        >
          {/* <div
        className='absolute z-50 rounded-[20px] flex flex-col items-center justify-center h-[300px] bg-opacity-100 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-farmingConfirmBg py-5'
        style={{ width: 'calc(100% - 32px)' }}
        ref={rewardConfirmModalRef}
      > */}
          <div className='flex flex-row h-7 bg-farmingConfirmBg text-xs gap-2 px-12 rounded-[10px] mb-[68px] text-[#037ED4]'>
            <div className='py-1.5 whitespace-nowrap font-normal tracking-[0.24px] text-xs font-doppio text-secondaryText'>Farming Complete!</div>
            {/* <BossBlockBlue className='py-1.5' width={15} height={15} /> */}
          </div>
          <div className='flex flex-row h-[62px] bg-[#FFBE504D] rounded-2xl px-5  mb-12 border-[1.5px] border-[#FFBE501A]'>
            <BossCoinDark className='my-3' width={38} height={38} />
            <div className='font-poppins my-auto text-xs sm:text-base font-bold text-[#FFBE50] tracking-[2%] mx-3 py-[19px]'>
              80 Boss Coins
            </div>
          </div>
          <button
            className='flex justify-center items-center p-2.5 absolute w-[80%] h-[48px] left-1/2 transform -translate-x-1/2 bottom-5 bg-[#37f5eca7] rounded-lg cursor-pointer'
            onClick={handleClickCollect}
          >
            <span className='h-[20px] font-bold text-lg leading-5 bg-clip-text text-black'>
              COLLECT
            </span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
