import ProfileHeader from '../components/ProfileHeader';
import ProfileOverview from '../components/ProfileOverview';
import ProfileDetail from '../components/ProfileDetail';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import { motion } from 'framer-motion';

interface UserData {
  [key: string]: any;
}

export default function Profile() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [searchParams] = useSearchParams()
  const referralKey = searchParams.get('userId');

  const handleTooltip = (value: boolean) => {
    navigator.clipboard.writeText(`I've found this Telegram MiniApp. FARM NOW, GET FREE COIN! BossCoin Mine: https://t.me/TheFinalBossBot?startapp=refKey_${referralKey}`);
    setShowTooltip(value);
    if (value) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };

  const handleShare = (value: boolean) => {
    navigator.clipboard.writeText(`I've found this Telegram MiniApp. FARM NOW, GET FREE COIN! BossCoin Mine: https://t.me/TheFinalBossBot?startapp=refKey_${referralKey}`);
    setIsBoosted(value);
  };

  const { data } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: () => Promise.resolve(),
    enabled: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='relative w-full'>
      <ProfileHeader />
      <ProfileOverview data={data as any} isBoosted={isBoosted} />
      <ProfileDetail
        handleTooltip={handleTooltip}
        data={data as any}
        handleShare={handleShare}
      />
      {showTooltip && (
        <div className='absolute top-2 left-1/2 transform -translate-x-1/2 px-10 py-[15px] rounded-2xl text-[10px] md:text-[13px] font-medium font-montserrat leading-4 bg-[#141926]  w-auto'>
          Link Copied!
        </div>
      )}
    </motion.div>
  );
}
