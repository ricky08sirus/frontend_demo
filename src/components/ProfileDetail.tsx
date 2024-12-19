import { useNavigate, useOutletContext } from 'react-router-dom';
import BossCoin from '../ui/Icon/BossCoin';
import FireIcon from '../ui/Icon/FireIcon';
import AirDropIcon from '../ui/Icon/AirDropIcon';
import LeaderBoardIcon from "../ui/Icon/LeaderBoardIcon";
import ReferIcon from "../ui/Icon/ReferIcon";
import BadgeIcon from "../ui/Icon/BadgeIcon";
import { formatNumber } from '../helper/formatNumbers';
import CopyIcon from '../ui/Icon/CopyIcon';
import { useReferredUsers } from '../hooks/useReferredUsers';
import { SVGProps } from 'react';

interface UserData {
  [key: string]: any;
}

interface StatItemProps {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  // icon: string
  title: string;
  value: string | number;
  backgrounds: string;
  textColor: string;
}
const StatItem: React.FC<StatItemProps> = ({
  Icon,
  title,
  value,
  backgrounds,
  textColor,
}) => (
  <div
    className={`flex flex-row w-1/2 h-full gap-[10px] rounded-2xl items-center py-4 px-5 my-auto md:px-5 ${backgrounds}`}
  >
    {/* <Icon className='pr-2.5 w-8 h-8' aria-label={`${title} Icon`} /> */}
    {/* <img loading="lazy" src={icon} className='pr-2.5 w-8 h-8' alt={`${title} Icon`} /> */}
    <Icon width={32} height={32} />
    <div className='flex flex-col h-8 gap-2.5 justify-center'>
      <div className='text-sm md:text-base leading-[11px] text-primaryText font-semibold'>
        {title}
      </div>
      <div className={`text-[13px] leading-[9px] font-bold ${textColor}`}>
        {value}
      </div>
    </div>
  </div>
);

export default function ProfileDetail({
  handleTooltip,
  data,
  // handleShare,
}: {
  handleTooltip: (arg0: boolean) => void;
  data: UserData;
  handleShare: (arg0: boolean) => void;
}) {
  const navigate = useNavigate();
  const { referredUsers } = useReferredUsers(data?.streak?.userId)
  const { setShowShareModal }: any = useOutletContext();

  return (
    <div className='flex flex-col text-secondaryText'>
      <div className='flex justify-between h-16 mt-2.5 py-4 bg-containerBg rounded-2xl my-10 bg-[#191B1A]'>
        <div className='flex items-center pl-5 h-8'>
          <AirDropIcon className="pr-2.5 cursor-pointer" aria-label="Airdrop Icon" onClick={() => navigate('/some-route')} />
          <div className='text-base py-[10.5px] leading-[11px] font-semibold'>
            Airdrop Points
          </div>
        </div>
        <div className='rounded-lg py-[6px] h-8 px-[20.5px] text-lexend font-semibold text-base leading-5 mr-4 bg-airdropbtnBg'>
          {formatNumber(data.user.airdropPoints || 0)}
        </div>
      </div>

      <div className='text-[11px] leading-[13px] pr-3.5 flex mb-5'>
        <div className=' font-medium tracking-[6%]'>
          STATISTICS
        </div>
        <div className='ml-3.5 border-t-[0.5px] border-[#313131] w-full my-1'></div>
      </div>

      <div className='flex gap-3 h-16 mb-3'>
        <StatItem
          Icon={BossCoin}
          title='Coins'
          value={formatNumber(data?.user?.coinCount || 0) as any}
          backgrounds='bg-bossCoin'
          textColor='text-[#FFCA28]'
        />
        <StatItem
          Icon={FireIcon}
          title='Streak'
          value={`${formatNumber(data.streak.currentStreak || 0)} ${data.streak.CurrentStreak >= 2 ? 'days' : 'day'
            }`}
          backgrounds='bg-streakBg'
          textColor='text-[#EF5350]'
        />
      </div>

      <div className='flex h-16 py-[14.86px] pl-5 pr-4 gap-0 justify-between bg-containerBg rounded-2xl mb-3 bg-[#191B1A]'>
        <div className='flex items-center flex-1'>
          <LeaderBoardIcon stroke="#e5e7eb" className='pr-2' aria-label='Leaderboard Icon' />
          <div className='text-base leading-5 py-[10.5px] font-semibold'>
            Ranks
          </div>
        </div>
        <div className='flex flex-col items-center text-center gap-0.5 ml-10 mr-5'>
          <div className='font-medium text-[11px] leading-[14px]'>
            Game score
          </div>
          <div className=' text-[13px] leading-4 font-semibold'>{`#${formatNumber(
            data?.user?.coinCount || 0
          )}`}</div>
        </div>
        <div className='border-l border-[#5F5F5F80] h-full mx-2'></div>
        <div className='flex flex-col items-center text-center ml-5'>
          <div className='font-medium text-[11px] leading-[14px]'>
            Invite score
          </div>
          <div className=' text-[13px] leading-4 font-semibold'>{`#${formatNumber(
            referredUsers?.totalRecentEarnings || 0
          )}`}</div>
        </div>
      </div>

      <div className='flex h-16 py-[14.86px] pl-5 pr-4 justify-between bg-containerBg rounded-2xl bg-[#191B1A]'>
        <div className='flex items-center'>
          <ReferIcon className='pr-2' aria-label='Refer Icon' />
          <div className='flex flex-col h-8 gap-2.5'>
            <div className='text-base leading-[11px] font-semibold'>
              Referrals
            </div>
            <div className='text-[13px] leading-[9px] font-bold'>
              {formatNumber(referredUsers?.pagination?.totalItems || 0)}
            </div>
          </div>
        </div>
        <div className='flex gap-[7px] items-center'>
          <div onClick={() => handleTooltip(true)} className='py-[6.4px] px-[6.4px] bg-[#3D3D3D] rounded-[9.6px]'>

            <CopyIcon />
          </div>
          <div onClick={() => setShowShareModal(true)} className='py-[6px] px-[12.5px] rounded-[10px] bg-[#3D3D3D]'>
            SHARE
          </div>
          {/* <img
            src={ShareIcon}
            className='cursor-pointer mr-2.5'
            aria-label='Share Icon'
            onClick={() => handleShare(true)} />
          <CopyLinkIcon
            className='cursor-pointer'
            onClick={() => handleTooltip(true)}
            alt='Copy Link Icon'
          /> */}
        </div>
      </div>

      <div className='text-[11px] leading-[13px] pr-3.5 flex my-5'>
        <div className='font-medium tracking-[6%]'>
          ACHIEVEMENTS
        </div>
        <div className='ml-3.5 border-t-[0.5px] border-[#313131] w-full my-1'></div>
      </div>

      <div className='flex h-16 py-[14.86px] pl-5 pr-4 justify-between items-center bg-containerBg my-auto rounded-2xl bg-[#191B1A]'>
        <div
          className='flex items-center flex-1 cursor-pointer'
          onClick={() => navigate('/me/badge')}
        >
          <BadgeIcon className='pr-2' aria-label='Badge Icon' />
          <div className='text-base leading-5 py-[10.5px] font-semibold text-center'>
            My Badges
          </div>
        </div>
        <span className='p-2 text-[13px] text-[#b0b0b0] rounded-[10px] border-2 border-[#4E4E4E]'>Coming soon</span>
      </div>
    </div>
  );
}
