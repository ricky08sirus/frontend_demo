// import { useNavigate } from 'react-router-dom';
// import BackIcon from '../../ui/Icon/BackIcon';

import { useEffect } from "react";
import { useUserDetails } from "../context/userDetailsContext";
import { useNavigate } from "react-router-dom";

export default function NotificationHeader() {
  const navigate = useNavigate();
  const { backButton, backOnClick, backOffClick, backHide } = useUserDetails()

  useEffect(() => {
    if (backButton) {
      backButton();
      backOnClick(() => navigate("/me"));

      return () => {
        backOffClick();
        backHide();
      };
    }
  }, [backButton, backOnClick, backOffClick, backHide, navigate]);

  return (
    <div className='relative h-8 flex items-center mb-2'>
      {/* <BackIcon className='cursor-pointer' role='button' aria-label='Back' onClick={() => navigate('/me')} /> */}
      <div className='flex-1 text-center py-[11.5px] font-montserrat font-bold text-[20px] leading-[9px] tracking-[0.06em] text-secondaryText'>
        Notifications
      </div>
    </div>
  );
}
