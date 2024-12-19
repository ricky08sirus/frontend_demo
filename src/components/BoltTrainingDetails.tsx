import React, { useState } from 'react';
// import PakuPakuImage from '/paku_paku.svg';
// import FlipOImage from '/flip_o.svg';
// import ChargeBeamImage from '/charge_beam.svg';
import { useNavigate } from 'react-router-dom';
import BossTailImage from '/boss_tail.svg'; // TODO

// interface GameCardProps {
//   image: string;
//   title: string;
//   isDisabled?: boolean;
// }

const tabNames = ['Mini Games', 'Tournaments'];

// const GameCard: React.FC<GameCardProps> = ({
//   image,
//   title,
//   isDisabled = false,
// }) => (
//   <div
//     className={`w-1/2 flex flex-col gap-5 rounded-[20px] bg-[#141926] p-1.5 pb-[30px] ${
//       isDisabled ? 'opacity-50' : ''
//     }`}
//   >
//     <img src={image} className='rounded-[14px]' alt={title} />
//     <div className='text-center text-secondaryText text-[13px] font-semibold font-monserrat'>
//       {title}
//     </div>
//   </div>
// );

// const TimerDisplay: React.FC = () => (
//   <div className='absolute bottom-[80px] left-1/2 transform -translate-x-1/2 h-10 px-5 py-1 rounded-full bg-[#11141B] text-secondaryText text-[13px] font-monserrat font-medium flex flex-row'>
//     <div className='py-2 h-full mr-2'>Come back in </div>
//     <div className='text-[23px]'>07:59 hr</div>
//   </div>
// );

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <div
        className='h-8 rounded-lg px-[22.5px] py-[7px] text-[13px] font-bold font-lexend leading-4 cursor-pointer border border-[#9E74E2] text-center bg-boltCardBtnBg'
        onClick={onClick}
    >
        {children}
    </div>
);

const BoltTrainingDetails: React.FC = () => {
    // const games = [
    //   { image: PakuPakuImage, title: 'Paku Paku' },
    //   { image: FlipOImage, title: 'Flip O', isDisabled: true },
    //   { image: ChargeBeamImage, title: 'Charge Beam' },
    // ];

    const [currentTab, setCurrentTab] = useState(0);
    const navigate = useNavigate();

    return (
        <div className='flex flex-col h-full'>
            <div className='h-12 rounded-xl w-full flex flex-row text-center bg-[#141926] p-1.5 mb-6'>
                {tabNames.map((tab: string, index: number) => (
                    <div
                        className={`h-full flex-1 cursor-pointer text-base font-bold font-montserrat py-2 rounded-lg tracking-tight ${currentTab === index
                                ? 'bg-[#1F232D] text-[#57a3ff]'
                                : 'text-secondaryText'
                            }`}
                        onClick={() => setCurrentTab(index)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div className='flex flex-1 flex-col gap-2.5 relative'>
                {/* <div className='flex flex-row gap-2.5'>
          {games.slice(0, 2).map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
        <div className='flex flex-row gap-2.5'>
          <GameCard {...games[2]} />
          <div className='w-1/2' />
        </div>
        <TimerDisplay /> */}
                {currentTab === 0 && (
                    <div className='absolute h-[108px] rounded-lg w-full border-3 border-[#9E74E2] bg-boltCardBg p-2 flex flex-row gap-2.5'>
                        <img
                            loading='lazy'
                            src={BossTailImage}
                            className='rounded-xl object-cover h-full w-full'
                            alt='Farming'
                        />
                        <div className='flex flex-col py-2 gap-4'>
                            <Button onClick={() => navigate('/bolt/training')}>TRAIN</Button>
                            <Button>Play</Button>
                        </div>
                    </div>
                )}
                {currentTab === 1 && (
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='h-[38px] text-[13px] font-bold font-lexend py-[11px] rounded-lg text-center w-[180px] bg-boltCardBtnBg'>
                            COMING SOON..
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BoltTrainingDetails;
