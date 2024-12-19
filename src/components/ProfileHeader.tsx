import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WalletIcon from '../ui/Icon/WalletIcon';
import NotificationIcon from '../ui/Icon/NotificationIcon';

export default function ProfileHeader() {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTooltipToggle = () => {
    setShowTooltip((prev) => !prev);
    if (!showTooltip) {
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  return (
    <div className='relative h-8 flex mb-2'>
      <WalletIcon
        className='cursor-pointer'
        onClick={handleTooltipToggle}
        aria-label='Wallet Icon'
      />
      {showTooltip && (
        <div
          className='absolute top-6 left-5 px-16 py-[15px] rounded-2xl text-[13px] font-medium font-montserrat leading-4 bg-[#141926]'
          ref={tooltipRef}
        >
          Coming soon!
        </div>
      )}
      <div className='flex-1 text-center py-[11.5px] font-montserrat font-semibold text-[13px] leading-[9px] tracking-[0.06em] text-secondaryText'>
        {/* MY PROFILE */}
      </div>
      <NotificationIcon
        className='cursor-pointer'
        onClick={() => navigate('/me/notification')}
        aria-label='Notification Icon'
      />
    </div>
  );
}
