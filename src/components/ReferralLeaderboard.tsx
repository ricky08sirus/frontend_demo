import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
// import { formatNumber } from "../helper/formatNumbers"
import { useReferredUsers } from "../hooks/useReferredUsers"
// import BossCoin from "../../ui/Icon/BossCoin"

export default function ReferralLeaderboard({ data }: any) {
  const { referredUsers } = useReferredUsers(data?.streak?.userId)
  return (
    <div className='mt-5 pt-3 pb-5 px-3 mb-6 flex flex-col gap-3 rounded-xl'>
      <div className='flex flex-row justify-center text-[#37F5EB] text-base font-semibold tracking-[0.32px] uppercase'>Last 7 days Referral</div>
      <div className='rounded-xl flex flex-col py-4 px-3 gap-[20px]'>
        {
          referredUsers?.referredUsers?.slice(0, 7)?.map((refer: { username: string | (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined)[]; recentEarnings: number | undefined; totalEarned: number | undefined }, index: number) => (
            // <div className="flex flex-col justify-center items-center">
            <div key={index} className='flex flex-row text-[13px] tracking-[2%] text-primaryText pb-2 justify-between border-b border-[#5F5F5F33] items-center'>

              <div
                className={`font-normal flex justify-center items-center mr-10`}># {index + 1}</div>
              {/* <div
                className={`w-[50px] h-[50px] bg-[3uiojr]),url("")] border-[3.4px] flex justify-center items-center
                shadow-[8.5px_8.5px_25.5px_rgba(4,6,15,0.8),-8.5px_-8.5px_25.5px_rgba(20,23,41,0.6)]
                rounded-[61.2px] border-[#0A0C1A] mr-3`}
              >{refer?.username[0]}</div> */}
              <div className='flex flex-col flex-1'>
                <div className='font-normal text-[13px] tracking-[2%] py-1'>
                  {refer?.username}
                </div>
                {/* <div className='font-montserrat font-medium text-[13px] text-[#5F5F5F] tracking-[2%] py-0.5'>
                  Recent Earnings: {formatNumber(refer?.recentEarnings)}
                </div> */}

              </div>
              <div className='font-normal py-0.5'>
                {refer?.totalEarned}
              </div>
            </div>

          ))
        }

        {/* <div className='flex flex-row'>
          <div
          className={`w-[50px] h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url("")] border-[3.4px]
          shadow-[8.5px_8.5px_25.5px_rgba(4,6,15,0.8),-8.5px_-8.5px_25.5px_rgba(20,23,41,0.6)]
                          rounded-[61.2px] border-[#0A0C1A] mr-3`}
          />
          <div className='flex flex-col flex-1'>
            <div className='font-montserrat font-medium text-[13px] text-primaryText tracking-[2%] py-1'>
              @Sheena33
            </div>
            <div className='font-montserrat font-medium text-[13px] text-[#5F5F5F] tracking-[2%] py-0.5'>
              16/09/2024
            </div>
          </div>
        </div> */}
        {/* <div className='flex flex-row'>
          <div
            className={`w-[50px] h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url("")] border-[3.4px]
                          shadow-[8.5px_8.5px_25.5px_rgba(4,6,15,0.8),-8.5px_-8.5px_25.5px_rgba(20,23,41,0.6)]
                          rounded-[61.2px] border-[#0A0C1A] mr-3`}
          />
          <div className='flex flex-col flex-1'>
          <div className='font-montserrat font-medium text-[13px] text-primaryText tracking-[2%] py-1'>
          @Dora4
          </div>
          <div className='font-montserrat font-medium text-[13px] text-[#5F5F5F] tracking-[2%] py-0.5'>
          16/09/2024
          </div>
          </div>
          </div> */}
      </div>
    </div>
    // </div>
  )
}
