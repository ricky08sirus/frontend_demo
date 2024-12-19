// import { useState } from 'react';

// import { SVGProps } from "react";

// import FireIcon from '/fire.svg';

// import IllustrateIcon from '/illustration.svg';

// import AirDropIcon from '../ui/Icon/AirDropIcon';
// import BossCoinIcon from '../ui/Icon/BossCoinIcon';
// import ArrowDownIcon from '../ui/Icon/ArrowDownIcon';

// import CupIcon from '/cup.svg';

// import LeaderboardIcon from '/leaderboard_badge.svg';

// import { formatNumber } from '../helper/formatNumbers';
// import { LEVEL_DISTRIBUTION, MODAL_CONTENTS } from '../helper/constants';

// import XPOrange from '../ui/Icon/XPOrange';


// type ModelKey = keyof typeof MODAL_CONTENTS;

// interface ModalContentProps {
//   contentHeight: number;
//   tabName: {
//     key: ModelKey;
//     label: any;
//   };
// }

// interface Steps {
//   TITLE: string;
//   INTRO: string;
//   REQUIREMENTS: string[];
// }

// interface Value {
//   BADGE_NAME: string;
//   START_LEVEL: number;
//   END_LEVEL: number;
// }

// interface Level {
//   Level: number;
//   XP: number;
//   BossCoin: number;
//   AirDrop: number;
// }

// const LevelReward = ({ Icon, text }: { Icon: React.FC<SVGProps<SVGSVGElement>>; text: string }) => (
//   <div className='flex flex-row'>
//     <Icon className='w-8 h-8 mr-2.5' aria-hidden="true" />
//     <div className='text-[13px] leading-5 tracking-[2%] font-poppins font-normal py-[6px]'>
//       {text}
//     </div>
//   </div>
// );

// export default function ModalContent({
//   contentHeight,
//   tabName,
// }: ModalContentProps) {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const toggleExpand = (index: number) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const content = MODAL_CONTENTS[tabName.key] as any;
//   if (!content) return null;

//   const getIcon = () => {
//     switch (tabName.key as any) {
//       case 'STREAK':
//         return FireIcon;
//       case 'GAME_SCORE':
//         return LeaderboardIcon;
//       default:
//         return IllustrateIcon;
//     }
//   };

//   return (
//     <div
//       className={`mx-5 mb-8 flex flex-col overflow-auto scroll-container`}
//       style={{ height: `${contentHeight}px` }}
//     >
//       {tabName.key === 'PROFILE_LEVEL' &&
//         MODAL_CONTENTS.PROFILE_LEVEL.map((value: Value, index: number) => (
//           <div
//             key={`PROFILE-LEVEL-${index}`}
//             className='cursor-pointer'
//             onClick={() => toggleExpand(index)}
//           >
//             <div className='badge-container flex flex-row h-[60px]'>
//               {/* <CupIcon role='button' aria-label='Badge Icon' /> */}
//               <img loading='lazy' src={CupIcon} alt='Badge Icon' />
//               <span className='flex-1 py-5 text-base leading-5 tracking-[2%] font-medium font-montserrat'>
//                 {value.BADGE_NAME}
//               </span>
//               {index < MODAL_CONTENTS.PROFILE_LEVEL.length - 1 && (
//                 <ArrowDownIcon className='h-8 w-8 my-3' aria-label='Arrow Down Icon' />
//               )}
//             </div>
//             {expandedIndex === index && (
//               <div className='content ml-9 border-l-[0.5px] border-[#333333]'>
//                 <div className='pl-16 flex flex-col gap-10'>
//                   {LEVEL_DISTRIBUTION.slice(
//                     value.START_LEVEL - 1,
//                     value.END_LEVEL
//                   ).map((val: Level) => (
//                     <div
//                       key={`LEVEL-${val.Level}`}
//                       className='flex flex-col gap-2'
//                     >
//                       <div className='mb-2 text-[13px] leading-4 font-montserrat font-semibold tracking-[2%]'>
//                         {`REACH LEVEL ${val.Level}-`}
//                         <span className='text-[#57A3FF]'>{` ${formatNumber(
//                           val.XP || 0
//                         )} XP`}</span>
//                       </div>
//                       <LevelReward
//                         Icon={BossCoinIcon}
//                         text={`Receive 100 Boss Coins`}
//                       />
//                       <LevelReward
//                         Icon={AirDropIcon}
//                         text={`Receive 10 Airdrop Points`}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       {tabName.key === 'REWARD_STRUCTURE' && MODAL_CONTENTS.REWARD_STRUCTURE.map((reward) => (
//         <div className='flex flex-col mx-3'>
//           <div className='font-dmsans text-base font-bold tracking-[0.32px] textColor-[#E0E0E0] mb-6'>{reward.TITLE}</div>
//           {reward.STEPS.map((step, idx) => (
//             <div key={idx} className='flex flex-col text-[16px] tracking-[0.32px] ml-3'>
//               <div className='font-semibold font-dmsans'>{idx + 1}. {step.TITLE}</div>
//               <div className='ml-3 font-dmsans mb-6'>
//                 {step.HIGHLIGHTS?.map((highlight) => (
//                   <span className='text-[14px]'>• {highlight}<br /></span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))
//       }
//       {tabName.key !== 'PROFILE_LEVEL' &&
//         tabName.key !== 'REWARD_STRUCTURE' &&
//         content.STEPS.map((step: Steps, index: number) => (
//           <div key={index} className='mb-8'>
//             <div className='flex items-center mb-4'>
//               <img loading='lazy' src={getIcon()} className='mr-2.5 w-8 h-8' />
//               <h2 className='text-lg font-medium text-gray-400'>
//                 {content.TITLE.split('$$')[0]}
//                 <span className='text-blue-400'>{step.TITLE}</span>
//                 {content.TITLE.split('$$')[1]}
//               </h2>
//             </div>
//             <div className='ml-4 pl-3 border-l-[0.5px] border-[#333333]'>
//               <div className='flex items-center mb-2'>
//                 <img loading='lazy' src={CupIcon} alt='Badge Icon' />
//                 <p className='text-sm text-gray-400'>{step.INTRO}</p>
//               </div>
//               <div className='rounded-lg pl-[80px]'>
//                 {step.REQUIREMENTS.map((req, reqIndex) => (
//                   <div
//                     key={reqIndex}
//                     className='flex items-center mb-2 h-8 last:mb-0'
//                   >
//                     {req.includes('Boss Coins') && (
//                       <BossCoinIcon className='h-8 w-8' />
//                     )}
//                     {req.includes('Airdrop Points') && (
//                       <AirDropIcon className='h-8 w-8' />
//                     )}
//                     {req.includes('XP') && (
//                       <XPOrange width={32} height={32} />
//                     )}
//                     <span className='text-sm text-gray-400 ml-2.5'>{req}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }
