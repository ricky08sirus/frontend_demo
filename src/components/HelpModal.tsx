// import { useRef, useEffect, useState } from 'react';
// import ModalHeader from './ModalHeader';
// import ModalContent from './ModalContent';

// interface HelpModalProps {
//   currentTab: {
//     key: string;
//     label: string;
//   };
//   setVisibility: (isVisible: boolean) => void;
// }

// export default function HelpModal({
//   currentTab,
//   setVisibility,
// }: HelpModalProps) {
//   const modalRef = useRef<HTMLDivElement | null>(null);
//   const [modalContentHeight, setModalContentHeight] = useState<number>(0);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node)
//       ) {
//         setVisibility(false);
//       }
//     };

//     const calculateHeight = () => {
//       const headerBottom =
//         modalRef.current
//           ?.querySelector('.modal-header')
//           ?.getBoundingClientRect().bottom || 0;
//       const newHeight = window.innerHeight - headerBottom - 50;
//       setModalContentHeight(newHeight);
//     };

//     window.addEventListener('mousedown', handleClickOutside);
//     window.addEventListener('resize', calculateHeight);
//     calculateHeight();

//     return () => {
//       window.removeEventListener('mousedown', handleClickOutside);
//       window.removeEventListener('resize', calculateHeight);
//     };
//   }, [setVisibility]);

//   return (
//     <div
//       className={`w-full absolute flex flex-col z-50 top-[264px] rounded-t-[56px] modalBackground max-w-[810px] mx-auto left-1/2 -translate-x-1/2 ${
//         currentTab.key !== 'PROFILE_LEVEL' ? 'mr-5' : ''
//       }`}
//       ref={modalRef}
//       style={{ width: currentTab.key === 'PROFILE_LEVEL' ? `` : '' }}
//     >
//       <div className='modal-header'>
//         <ModalHeader tabName={currentTab} />
//       </div>
//       <ModalContent contentHeight={modalContentHeight} tabName={currentTab as any} />
//     </div>
//   );
// }
