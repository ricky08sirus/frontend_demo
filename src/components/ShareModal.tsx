import { useRef, useEffect, useState } from 'react'; // React hooks

import HomeIcon from '../ui/Icon/HomeIcon';

import {
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  EmailShareButton,
  RedditShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

import {
  XIcon,
  LinkedinIcon,
  TelegramIcon,
  EmailIcon,
  RedditIcon,
  FacebookIcon,
} from 'react-share';

import { useSearchParams } from 'react-router-dom';

interface ShareModalProps {
  setVisibility: (isVisible: boolean) => void;
}

export default function ShareModal({ setVisibility }: ShareModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [modalContentHeight, setModalContentHeight] = useState<number>(0);
  const [searchParams] = useSearchParams()
  const referralKey = searchParams.get('userId');
  // const shareUrl = window.location.href; // For test
  const shareUrl = `Join the Boss Block revolution! 🚀 Play, Earn & Socialize! 💸🎮 Join Now https://t.me/TheFinalBossBot?startapp=refKey_${referralKey}`
  const title = document.title;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setVisibility(false);
      }
    };

    const calculateHeight = () => {
      const newHeight = window.innerHeight - 370;
      console.log(window.innerHeight, newHeight);
      setModalContentHeight(newHeight);
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', calculateHeight);
    calculateHeight();

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', calculateHeight);
    };
  }, [setVisibility]);

  return (
    <div
      className='w-full absolute flex flex-col z-50 top-[300px] max-w-[810px] mx-auto left-1/2 -translate-x-1/2 share-modal bg-[#0A0C1A]'
      ref={modalRef}
    >
      <div
        className='rounded-[20px] text-secondaryText bg-[#191B1A] mb-2 flex flex-col py-4 px-5'
        style={{ height: modalContentHeight }}
      >
        <div className='flex flex-row mb-4'>
          <HomeIcon className='w-8 py-2' width={32} height={48} />

          <div className='flex flex-1 flex-col items-center justify-center'>
            <div className='text-lg font-bold'>Share with</div>
            <div className='text-sm text-[#A4A4A4]'>Select chats</div>
          </div>
          <div className='w-8' />
        </div>
        <div className='grid grid-cols-4 gap-4 mb-4 text-secondaryText text-sm font-medium overflow-auto scroll-container'>
          {/* {[0, 1, 2].map(() => ( */}
          <>
            <button className='flex flex-col items-center'>
              <TelegramShareButton url={shareUrl} title={title}>
                <TelegramIcon size={64} round />
              </TelegramShareButton>
              <span className='text-xs mt-2'>Telegram</span>
            </button>
            <button className='flex flex-col items-center'>
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={64} round />
              </LinkedinShareButton>
              <span className='text-xs mt-2'>Linkedin</span>
            </button>
            <button className='flex flex-col items-center'>
              <TwitterShareButton url={shareUrl} title={title}>
                <XIcon size={64} round />
              </TwitterShareButton>
              <span className='text-xs mt-2'>Twitter</span>
            </button>
            <button className='flex flex-col items-center'>
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={64} round />
              </WhatsappShareButton>
              <span className='text-xs mt-2'>Twitter</span>
            </button>
            <button className='flex flex-col items-center'>
              <EmailShareButton url={shareUrl} title={title}>
                <EmailIcon size={64} round />
              </EmailShareButton>
              <span className='text-xs mt-2'>Email</span>
            </button>
            <button className='flex flex-col items-center'>
              <RedditShareButton url={shareUrl} title={title}>
                <RedditIcon size={64} round />
              </RedditShareButton>
              <span className='text-xs mt-2'>Reddit</span>
            </button>
            <button className='flex flex-col items-center'>
              <FacebookShareButton url={shareUrl} title={title}>
                <FacebookIcon size={64} round />
              </FacebookShareButton>
              <span className='text-xs mt-2'>Facebook</span>
            </button>
          </>
          {/* ))} */}
        </div>
      </div>
      <div
        className='rounded-[20px] bg-[#191B1A] mb-2 h-[54px] py-[15px] text-lg text-center font-bold text-[#37F5EB] cursor-pointer'
        onClick={() => setVisibility(false)}
      >
        Cancel
      </div>
    </div>
  );
}
