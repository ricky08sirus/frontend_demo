import { formatNumber } from "../helper/formatNumbers";
import { useReferredUsers } from "../hooks/useReferredUsers";
// import AirDropGradient from "../ui/Icon/AirDropGradient";
// import BossCoin from "../ui/Icon/BossCoin";
// import XPForProfile from "../ui/Icon/XPForProfile";

export default function ReferralStatistics({ data }: any) {
  const { referredUsers } = useReferredUsers(data?.streak?.userId)
  return (
    <div className='mt-5 pt-3 pb-5 px-5 bg-[#000000] flex flex-col gap-3 rounded-xl'>
      <div className='flex flex-row justify-center text-[#37F5EB] text-base font-semibold tracking-[0.32px] uppercase'>Referral Statistics</div>
      <div className='bg-[#1F232D80] rounded-xl flex flex-col py-4 gap-4'>
        <div className='uppercase text-secondaryText text-[11px] text-center font-normal'>Total Referrals</div>
        <div className='text-center text-[#37F5EB] text-[23px] font-normal tracking-[0.46px]'>{formatNumber(referredUsers?.pagination?.totalItems || 0)}</div>
      </div>
      <div className='bg-[#1F232D80] rounded-xl flex flex-col py-4 gap-4'>
        <div className='uppercase text-secondaryText text-[11px] text-center font-normal'>Total Rewards Earned</div>
        <div className='px-[30px] text-base text-primaryText font-bold flex flex-col gap-2.5'>
          <div className='flex justify-center items-center flex-row gap-2'>
            {/* <BossCoin width={32} height={32} /> */}
            <div className="flex-1">Boss Coins</div>
            <div className='py-[5.5px]'>{formatNumber(data?.user?.coinCount || 0)}</div>
          </div>
          <div className='flex items-center flex-row '>
            {/* <AirDropGradient width={32} height={32} /> */}
            <div className="flex-1">Airdrop Points</div>
            <div className='py-[5.5px]'>{formatNumber(data?.user?.airdropPoints || 0)}</div>
          </div>
          <div className='flex justify-center items-center flex-row gap-2'>
            {/* <XPForProfile width={32} height={32} /> */}
            <div className="flex-1">XP</div>
            <div className='py-[5.5px]'>{formatNumber(data?.user?.xp || 0)}</div>
            {/* <div className='w-20 py-[5.5px]'>{formatNumber(data?.user?.xp || 0)}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
