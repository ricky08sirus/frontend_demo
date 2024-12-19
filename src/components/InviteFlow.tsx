// import EarnIcon from '/earn.svg'; // TODO
// import { useOutletContext } from 'react-router-dom';
// import { HELP_TABS } from '../helper/constants';
import SendReferral from '../ui/Icon/SendReferral';
import FriendsJoin from '../ui/Icon/FriendsJoin';
import EarnDivide from '../ui/Icon/EarnDivide';
import EarnIcon from '../ui/Icon/EarnIcon';
// import Info from '../ui/Icon/Info';

export default function InviteFlow() {
  // const { setShowHelpModal, setCurrentTab }: any = useOutletContext();

  // const handleShowModal = () => {
  //   setCurrentTab(HELP_TABS[4]);
  //   setShowHelpModal(true);
  // };

  return (
    <div className='flex flex-col mt-6'>
      <div className='flex justify-between mb-[18px]'>
        <div className='text-[11px] leading-[13.41px] tracking-[4%] font-monserrat font-bold pt-[11px]'>
          HOW IT WORKS
        </div>
        {/* <Info
          className='cursor-pointer'
          width={32}
          height={32}
          color="#FFCA28"
          onClick={() => handleShowModal()}
        /> */}
      </div>
      <div className='pr-8 flex flex-col gap-4'>
        <div className='h-12 flex flex-row'>
          <SendReferral className='mr-4' width={48} height={48} />
          <div className='text-[13px] py-[15px] font-semibold tracking-[0.52px] leading-[18px] font-dmsans'>
            Share your unique referral link
          </div>
        </div>
        <div className='flex w-12 justify-center'>
          <EarnDivide width={6} height={46} />
        </div>
        <div className='h-12 flex flex-row'>
          <FriendsJoin className='mr-4' width={48} height={48} />
          <div className='text-[13px] py-[15px] font-semibold tracking-[0.52px] leading-[18px] font-dmsans'>
            Friends Join using your link
          </div>
        </div>
        <div className='flex w-12 justify-center'>
          <EarnDivide width={6} height={46} />
        </div>
        <div className='h-12 flex flex-row'>
          {/* <img src={EarnIcon} className='h-12 w-12 mr-4' /> */}
          <EarnIcon className='mr-4' width={48} height={48} />
          <div className='text-[13px] py-[15px] font-semibold tracking-[0.52px] leading-[18px] font-dmsans'>
            Both receive instant rewards
          </div>
        </div>
      </div>
    </div>
  );
}
