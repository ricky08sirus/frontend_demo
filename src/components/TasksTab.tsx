import { useState } from 'react';
import { EARN_TASKS } from '../helper/constants';

import ArrowIcon from '../ui/Icon/ArrowIcon';
// import BossCoinIcon from '../ui/Icon/BossCoinIcon';
// import XPIcon from '../ui/Icon/XPIcon';
// import AirDropIcon from '../ui/Icon/AirDropIcon';
import CheckIcon from '../ui/Icon/CheckIcon';

import { useOutletContext } from 'react-router-dom';

const tabNames = ['Socials', 'Daily', 'Partners', 'Limited'];
type SVGComponentType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type tabTypes = keyof typeof EARN_TASKS;
interface Task {
  INTRO: string,
  TITLE: string,
  COIN_COUNT: number,
  XP_COUNT: number,
  AIRDROP_COUNT: number,
  ICON: SVGComponentType,
}

export default function TasksTab() {
  const [tab, setTab] = useState<tabTypes>(tabNames[0] as any);
  const { setShowJoinModal, setCurrentJoinTab }: any = useOutletContext();

  const handleClick = (task: Task) => {
    setCurrentJoinTab(task);
    setShowJoinModal(true);
  }

  return (
    <div className='flex flex-col gap-10 mt-[30px]'>
      <div className='text-base font-monserrat font-semibold leading-5'>
        Complete tasks, collect rewards, and conquer the game!
      </div>
      <div>
        <div className='flex flex-row gap-5 font-lexend text-base mb-[30px]'>
          {tabNames.map((tabName: any) => (
            <div
              key={`earn-taskname-${tabName}`}
              className={`${tabName === tab ? 'text-[#37F5EB]' : 'text-[#5F5F5F]'
                } cursor-pointer`}
              onClick={() => setTab(tabName)}
            >
              {tabName}
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-2.5'>
          {EARN_TASKS[tab]?.map((task: any) => (

            <div
              key={`earn-task-${task.TITLE}`}
              className='rounded-2xl bg-[#1D1D1D] h-fit w-full px-[10px] py-4 flex flex-row cursor-pointer'
              onClick={() => handleClick(task)}
            >
              <task.ICON className='h-12 w-12 mr-2.5' />
              {/* <img loading='lazy' src={task.ICON} className='h-12 w-12 mr-2.5' /> */}
              <div className='flex flex-col flex-1 gap-1'>
                <div className='text-[13px] font-medium'>
                  {task.TITLE}
                </div>
                <div className='flex flex-row gap-3 '>
                  <div className='flex flex-row'>
                    {/* <BossCoinIcon className='mr-1 w-6 h-6' /> */}
                    <div className='text-[11px] leading-[17px] font-bold py-[3.5px]'>
                      {task.XP_COUNT} XP
                    </div>
                  </div>
                  <div className='py-[10.5px]'>
                    <svg
                      width='3'
                      height='3'
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='1.5' cy='1.5' r='1.5' fill='#E0E0E0' />
                    </svg>
                  </div>
                  <div className='flex flex-row'>
                    {/* <XPIcon className='mr-1 w-6 h-6' /> */}
                    <div className='text-[11px] leading-[17px] font-bold py-[3.5px]'>
                      {task.COIN_COUNT} COINS
                    </div>
                  </div>
                  <div className='py-[10.5px]'>
                    <svg
                      width='3'
                      height='3'
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='1.5' cy='1.5' r='1.5' fill='#E0E0E0' />
                    </svg>
                  </div>
                  <div className='flex flex-row'>
                    {/* <AirDropIcon className='mr-1 w-6 h-6' /> */}
                    <div className='text-[11px] leading-[17px] font-bold py-[3.5px]'>
                      {task.AIRDROP_COUNT} POINTS
                    </div>
                  </div>
                </div>
              </div>
              {/*
                  This is only for test
                */}
              {Math.random() > 0.5 ? (
                <ArrowIcon className='w-8 h-8 m-auto' />
              ) : (
                <CheckIcon className='w-6 h-6 m-auto mx-1' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
