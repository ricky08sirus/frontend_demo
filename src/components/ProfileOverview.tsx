// import XPIcon from '../../ui/Icon/XPIcon';
// import XPOrangeIcon from '../../ui/Icon/XPOrangeIcon';
// import InfoIcon from '../ui/Icon/InfoIcon';

import { LEVEL_DISTRIBUTION } from '../helper/constants';
import XPForProfile from '../ui/Icon/XPForProfile';
import { useUserDetails } from '../context/userDetailsContext';
import { useEffect, useState } from 'react';
// import XPOrange from '../../ui/Icon/XPOrange';

interface UserData {
  [key: string]: any;
}


export default function ProfileOverview({
  data,
  isBoosted,
}: {
  data: UserData;
  isBoosted: boolean;
}) {

  // const { photoUrl } = useOutletContext<Modal>();
  const [url, setUrl] = useState<string | undefined>()
  const { photoUrl } = useUserDetails();
  const username = data.user.username || '';
  const level = data.user.level || 1;
  const xp = data.user.xp || 0;
  const currentLevelXP = LEVEL_DISTRIBUTION[level]?.XP;
  // const previousLevelXP = LEVEL_DISTRIBUTION[level - 1]?.XP || 0; // Handle potential undefined
  // const xpToNextLevel = currentLevelXP - xp;
  const progressPercentage = Math.random() * 84 + 1;
  // const progressPercentage = (
  //   ((xp - previousLevelXP) / (currentLevelXP - previousLevelXP)) *
  //   100
  // ).toFixed(1);
  console.log(progressPercentage)
  useEffect(function () {
    if (photoUrl) {
      setUrl(photoUrl)
    }
  }, [photoUrl])

  return (
    <div className='py-3.5 px-2 bg-[#191B1A] rounded-[20px] text-secondaryText'>
      {/* <div className='py-3.5 px-2 bg-containerBg rounded-[20px]'> */}
      <div className='px-1.5 h-[50px] flex justify-between'>
        <div className='h-full flex justify-center items-center'>
          {/* <div
            className={`w-[50px] h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${url})]
            shadow-[2.5px_2.5px_12.5px_rgba(4,6,15,0.8),-2.5px_-2.5px_12.5px_rgba(20,23,41,0.6)]
            rounded-[61.2px] border-[#0A0C1A] mr-3
            bg-center bg-no-repeat bg-cover`} /> */}
          <img
            loading='lazy'
            src={url}
            alt=""
            style={{
              width: '50px',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '61.2px',
              border: '1px solid #0A0C1A',
              marginRight: '12px',
              boxShadow: '2.5px 2.5px 12.5px rgba(4,6,15,0.8), -2.5px -2.5px 12.5px rgba(20,23,41,0.6)'
            }}
          />

          <div className='font-medium text-base leading-[11px] tracking-[2%] py-[19.5px]'>
            {username.length > 12 ? username.slice(0, 9) + '...' : username}
          </div>
        </div>
        <div className='flex items-center box-border flex-row justify-center my-2.5 p-4 gap-2.5 w-18 h-8 bg-gradient-to-r from-[#73FFB9]/10 via-[#56A2FF]/10 to-[#9E74E2]/10 rounded-lg'>
          <div className='w-11.5 font-lexend text-[13px] leading-4 bg-gradient-to-r from-[#9E74E2] to-[#56A2FF] bg-clip-text text-transparent'>
            {isBoosted ? 'Boost level' : 'BOOST'}
          </div>
        </div>
      </div>

      <div className='px-0.5 pt-4 pb-2 flex flex-col'>
        <div className='text-center text-[11px] font-medium leading-[13.41px] tracking-[2%] text-secondaryText mb-1.5'>
          {`${currentLevelXP} XP`}{' '}
          {/* {`${formatNumber(Math.floor(currentLevelXP))} XP`}{' '} */}
          {/* {`${formatNumber(Math.floor(xpToNextLevel))} XP`}{' '} */}
          <span className='text-[#5F5F5F]'>{` TO LEVEL ${level + 1}`}</span>
        </div>
        <div className='relative h-5 bg-[#37f5ec15] rounded-[34px] z-1 justify-between flex flex-row'>
          {/* <div className='relative h-5 bg-highlightBg rounded-[34px] z-1 justify-between flex flex-row'> */}
          <div
            className={`absolute h-5 z-10 ${isBoosted ? 'bg-boostedBg' : 'bg-airdropbtnBg'
              } rounded-[34px]`}
            style={{ width: `${progressPercentage}%` }}
          // style={{ width: `${77.937}%` }}
          />
          <div className='ml-[10px] z-20 w-[4.65px] text-[13px] font-monserrat font-semibold tracking-[2%]'>
            {level}
          </div>
          <div className={`${level + 1 >= 10 ? "mr-[20px]" : "mr-[10px]"} z-20 w-[4.65px] text-[13px] font-semibold tracking-[2%]`}>
            {level + 1}
          </div>
        </div>
      </div>

      <div className='flex justify-between h-8'>
        <div className='flex justify-center items-center h-full'>
          <XPForProfile width={32} height={32} />
          {/* <img
            src={isBoosted ? XPOrangeIcon : XPIcon }
            className='pr-2'
            alt='XP Icon'
          /> */}
          <div className='py-[7px] text-[13px] font-semibold tracking-[2%]'>
            {`${xp.toFixed(0)} XP`}
          </div>
        </div>
        <div className='flex h-full items-center'>
          <div className='py-[6.5px] pr-2 text-[11px] font-semibold tracking-[2%]'>
            Level {level}
          </div>
          {/* <InfoIcon className='pl-2' aria-label='Info Icon' /> */}
        </div>
      </div>
    </div>
  );
}
