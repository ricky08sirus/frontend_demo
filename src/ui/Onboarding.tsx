import { useState } from 'react';
import Brain from '/brain_onboarding.svg';
import Game from '/game.svg';
import Arrow from '/color-arrow.svg';
import NFT from '/nft.svg';
import Icon from "./Icon"


const BlockUniversity = () => (
  <div>
    <div className="flex justify-between mt-[30px]">
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#2D2E36] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#2D2E36] h-1 w-[32%] rounded-lg"></span>
    </div>
    <div className="flex justify-center mt-[43px] w-full">
      <span className="text-[23px] font-montserrat font-semibold leading-9 onboardingGradient">
        BLOCK UNIVERSITY
      </span>
    </div>
    <div className='mt-8 flex flex-col justify-center text-center px-6'>
      <Icon width={22} height={22} src={Brain} alt={Brain} />
      <p className='mt-[13.5px] text-[11px] coming-text font-poppins'>coming soon</p>
    </div>
    <div className='flex flex-col px-5 mt-7'>
      <p className='onboardingHeading-text text-[19px] font-bold font-montserrat'>
        Decentralised Learning Hub
      </p>
      <div className='flex flex-col col-span-2 mt-5'>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Adaptive AI education
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Customised learning paths
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Community driven growth
          </p>
        </div>
      </div>
    </div>
  </div>
)
const GamingEcosystem = () => (
  <div>
    <div className="flex justify-between mt-[30px]">
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#2D2E36] h-1 w-[32%] rounded-lg"></span>
    </div>
    <div className="flex justify-center mt-[43px] w-full">
      <span className="text-[23px] font-montserrat font-semibold leading-9 onboardingGradient">
        GAMEING ECOSYSTEM
      </span>
    </div>
    <div className='mt-8 flex flex-col justify-center text-center px-6'>
      <Icon width={22} height={22} src={Game} alt={Brain} />
    </div>
    <div className='flex flex-col px-5 mt-[53px]'>
      <p className='onboardingHeading-text text-[19px] font-bold font-montserrat'>
        Decentralised Gaming Hub
      </p>
      <div className='flex flex-col col-span-2 mt-5'>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Engaging gameplay
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Competitive leagues
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Community driven development
          </p>
        </div>
      </div>
    </div>
  </div>
)
const AirdropAwaits = () => (
  <div>
    <div className="flex justify-between mt-[30px]">
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
      <span className="bg-[#9E74E2] h-1 w-[32%] rounded-lg"></span>
    </div>
    <div className="flex justify-center mt-[43px] w-full">
      <span className="text-[23px] font-montserrat font-semibold leading-9 onboardingGradient">
        Your airdrop awaits
      </span>
    </div>
    <div className='mt-8 flex flex-col justify-center text-center px-6'>
      <Icon width={22} height={22} src={NFT} alt={Brain} />
    </div>
    <div className='flex flex-col px-5 mt-[53px]'>
      <p className='onboardingHeading-text text-[19px] font-bold font-montserrat'>
        Be An Early Adopter
      </p>
      <div className='flex flex-col col-span-2 mt-5'>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Rewards- Coins, XP and more
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Airdrop points for Boss coins
          </p>
        </div>
        <div className='flex'>
          <Icon width={8} height={8} src={Arrow} alt="arrow"></Icon>
          <p className='text-base leading-7 ml-3'>
            Exclusive NFT for early adopters
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function Onboarding({ setOnboarding }: any) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [<BlockUniversity />, <GamingEcosystem />, <AirdropAwaits />];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = (prevPage + 1) % pages.length + 1;
      if (nextPage > 2) {
        setOnboarding(false);
      }
      return nextPage;
    });
  };
  return (
    <div className="max-w-[450px] w-full mx-auto my-0 h-dvh flex flex-col justify-between flex-1">
      <div className="py-[30px] px-5">
        {pages[currentPage]}
        <div className='w-full gradient-border onboardingButton mt-9' onClick={handleNextPage}>
          <div className='w-full py-[17.5px]'>
            <p className='text-[20px] text-center nextButtonText leading-[25px] font-semibold'>Next</p>
          </div>
        </div>
      </div>
    </div>
  )
}