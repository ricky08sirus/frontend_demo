import { useOutletContext, useSearchParams } from 'react-router-dom';
import InviteFlow from './InviteFlow';
import InviteHeader from './InviteHeader';
import ReferalState from './ReferalState';
import { useState } from 'react';
import CopyLinkBlack from '../ui/Icon/CopyLinkBlack';
import ReferralStatistics from './ReferralStatistics';
import ReferralLeaderboard from './ReferralLeaderboard';
import { useQuery } from '@tanstack/react-query';

interface UserData {
  [key: string]: any; // This allows for an object with any number of properties
}

export default function InviteTab() {
  const [searchParams] = useSearchParams()
  const referralKey = searchParams.get('userId');
  const { data } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: () => Promise.resolve(),
    enabled: false,
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const { setShowShareModal }: any = useOutletContext();

  const handleTooltip = (value: boolean) => {
    navigator.clipboard.writeText(`🚀 I've found this awesome Telegram MiniApp! 🤯 FARM NOW, GET FREE COIN! 💸 BossCoin Mine: https://t.me/TheFinalBossBot?startapp=refKey_${referralKey}`);
    setShowTooltip(value);
    if (value) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };

  return (
    <div className='flex flex-col'>
      <InviteHeader />
      <InviteFlow />
      <ReferalState />
      <ReferralStatistics data={data} />
      <ReferralLeaderboard data={data} />
      <div className='mt-4 flex flex-row w-full gap-2.5 bg-black pb-9 sticky bottom-0'>
        <div className='flex-1 h-12 rounded-[14px] bg-[#37F5EB] text-center cursor-pointer'>
          <div
            className='text-base font-lexend text-[#0A0C1A] font-medium leading-5 py-[14px]'
            onClick={() => setShowShareModal(true)}
          >
            Invite Friends
          </div>
        </div>
        <div
          className='rounded-[14px] bg-[#37F5EB] w-12 h-12 py-2 px-2 cursor-pointer'
          onClick={() => handleTooltip(true)}
        >
          <CopyLinkBlack width={32} height={32} color="#0A0C1A" />
        </div>
      </div>
      {showTooltip && (
        <div className='fixed top-2 left-1/2 transform -translate-x-1/2 px-10 py-[15px] rounded-2xl text-[10px] md:text-[13px] font-medium font-montserrat leading-4 bg-[#141926]  w-auto'>
          Link Copied!
        </div>
      )}
    </div>
  );
}
