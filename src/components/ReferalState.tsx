import useWindowDimensions from "../hooks/useWindowDimensions";

export default function ReferalState() {
  const {width} = useWindowDimensions();

  return (
    <div className={`flex mt-4 py-4 bg-containerBg rounded-2xl h-[110px] justify-center ${width > 390 ? 'h-[110px]' : 'h-[140px]'}`}>
      <div className='flex flex-col bg-gradient-to-r from-[#73FFB9CC] gap-4 px-4 via-[#56A2FFCC] to-[#9E74E2CC] bg-clip-text text-transparent text-lexend font-bold text-[13px] w-full'>
        <div className='flex items-center'>
          <div className='flex flex-1 justify-center'>PER REFER</div>
          <div className='flex flex-1 justify-center rounded-lg p-[8px] leading-5 w-[170px] bg-referalStateBG'>
            PREMIUM 50% BONUS
          </div>
        </div>
        <div className='flex justify-between gap-2 pr-2 font-dmsans'>
          <div>10 Airdrop Points</div>
          <div className='text-white'>•</div>
          <div>200 Boss Coins</div>
          <div className='text-white'>•</div>
          <div>500 XP</div>
        </div>
      </div>
    </div>
  );
}
