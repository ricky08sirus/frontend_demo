import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import BoltIcon from '/bolt.svg';
// import BoltDeadIcon from '/bolt_dead.svg';
// import FarmingImage from '/farm.svg';
import InviteReferralIcon from '/invite_referral.svg';
import PassIcon from '/bossFarm.svg';
import GamesIcon from '/games.svg';
import BoltBuyIcon from '../ui/Icon/BoltBuyIcon';
// import HarvestingIcon from '/harvesting.svg';

const BoltIcons: React.FC = () => (
  <div className='flex gap-1'>
    {Array.from({ length: 5 }).map((_, index) => (
      <BoltBuyIcon key={index} />
    ))}
  </div>
);

// interface ButtonProps {
//   onClick?: () => void;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
//   <div
//     className='h-8 rounded-lg px-[22.5px] py-[7px] text-[13px] font-bold font-lexend leading-4 cursor-pointer border border-[#73FFB9] text-center bg-harvestingBtnBg'
//     onClick={onClick}
//   >
//     {children}
//   </div>
// );

const Bolt: React.FC = () => {
  // const navigate = useNavigate();
  const [energy, setEnergy] = useState<number>();

  useEffect(() => {
    setEnergy(Math.floor(Math.random() * 20));
  }, []);
  // setEnergy(Math.floor(Math.random() * 20))

  return (
    <div className='flex flex-col h-full w-full relative'>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-[13px]'>
          <div className='flex flex-row'>
            <BoltIcons />

            <div className='text-boltText text-base leading-5 py-1.5 ml-[9px]'>
              + {energy}
            </div>
          </div>
          <div className='text-[10px] font-lexend font-bold pl-2'>
            Next energy in <span className='text-[#70DAD2]'>8 hours</span>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br from-[rgba(115,255,185,0.10)] via-[rgba(86,162,255,0.10)] to-[rgba(158,116,226,0.10)] h-[38px] mt-4 py-[7px] flex flex-row justify-center rounded-xl ${energy ? 'bg-[#1F232D]' : 'bg-inviteForEnergyBg'
          }`}
      >
        <img
          loading='lazy'
          src={InviteReferralIcon}
          className='w-6 h-6 mr-2.5'
          alt='Invite Referral'
        />
        <div className='text-primaryText py-[7px] text-[10px] leading-[13px] font-lexend font-bold'>
          INVITE FRIENDS TO EARN ENERGY
        </div>
      </div>
      <div className='px-[64px] mt-[13px] mb-5 border-t border-[#323232]' />
      <div className='h-[38px] py-[3px] flex flex-row justify-between rounded-xl bg-superiorityBg'>
        <img loading='lazy' src={BoltIcon} className='w-8 h-8' alt='Bolt' />
        <div className='flex-1 flex justify-center items-center text-center py-[10px] text-xs font-lexend text-[#1BFFFF]'>
          SUPERIORITY PASS
        </div>
        <img loading='lazy' src={PassIcon} className='mr-3 h-5 my-auto' alt='Pass' />
      </div>
      <div className='h-[38px] py-[3px] flex flex-row justify-between rounded-xl bg-trainingModeBg mt-2'>
        <img loading='lazy' src={GamesIcon} className='w-8 h-8 ml-2' alt='Games' />
        <div className='flex-1 text-center py-[10px] text-xs font-lexend text-primaryText'>
          TRAINING MODE
        </div>
        <div className='w-8 h-8'></div>
      </div>
      {/* <div className='absolute bottom-[108px] h-[108px] rounded-lg w-full border-3 border-[#9E74E2] bg-trainingModeBg p-2 flex flex-row gap-2.5'>
        <img
          loading='lazy'
          src={FarmingImage}
          className='rounded-xl object-cover h-full w-full'
          alt='Farming'
        />
        <div className='flex flex-col py-2 gap-4'>
          <Button onClick={() => navigate('/bolt/training')}>More</Button>
          <Button>Play</Button>
        </div>
      </div>
      <div className='absolute bottom-10 w-full'>
        <div className='h-12 flex flex-row items-center py-[11.5px] px-auto rounded-lg bg-trainingModeBg cursor-pointer'>
          <div className='flex-1 flex justify-center items-center'>
            <div className='flex ml-7 justify-center items-center'>
              <img src={HarvestingIcon} className='mr-2.5' alt='Harvesting' />
              <span className='farmingTestShadow flex justify-center items-center font-lexend text-base font-semibold text-[#F2D6BD]'>
                Start Harvesting
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Bolt;
