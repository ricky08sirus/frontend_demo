import MeetupIcon from '/meetup.svg'; // TODO
import Journal from '../ui/Icon/Journal';
import Article from '../ui/Icon/Article';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function ExploreDetails() {
  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-col gap-5'>
      <div className='text-center rounded-xl h-12 py-[10.5px] font-epilogue text-lg text-secondaryText font-bold bg-exploreBtnBg cursor-pointer'>
        Explore
      </div>
      <div className='flex flex-row gap-5 h-[62px]'>
        <div className='flex flex-1 flex-row gap-2 h-full rounded-xl bg-exploreCardBg text-secondaryText px-4 cursor-pointer'>
          <Journal width={22} height={22} className='my-5' />
          <div className={`font-epilogue font-extrabold text-base ${width >= 360 ? 'my-5' : 'my-2.5'}`}>To-Do List</div>
        </div>
        <div className='flex flex-1 flex-row gap-2 h-full rounded-xl bg-exploreCardBg text-secondaryText px-4 cursor-pointer'>
          <Article width={26} height={24} className='my-5' />
          <div className={`font-epilogue font-extrabold text-base ${width > 360 ? 'my-5' : 'my-2.5'}`}>Remind Me</div>
        </div>
      </div>
      <div className='flex flex-row gap-2 rounded-xl bg-exploreCardBg px-5'>
        <div className='flex flex-col flex-1 pt-5 pb-3'>
          <div className='mb-2 font-extrabold text-[22px] font-epilogue text-secondaryText'>
            Learn Scroll
          </div>
          <div className='mb-3 text-xs font-normal font-rubik text-white'>
            Scroll new and latest news and updates and things you like
          </div>
          <div className='flex flex-row'>
            <div className='text-secondaryText font-bold font-epilogue text-base mr-1.5'>
              Scroll Now
            </div>
          </div>
        </div>
        <img src={MeetupIcon} className='py-8' />
      </div>
      <div className='flex flex-row w-full gap-5'>
        <div className='flex flex-col flex-1 bg-exploreCardBg rounded-xl pl-4 pr-2 pt-5 pb-3.5'>
          <div className='mb-1.5 font-extrabold text-base font-epilogue text-secondaryText'>
            Education Hub
          </div>
          <div className='mb-2.5 font-normal text-[10px] font-rubik text-white'>
            Learn skills that you need and find best learning paths
          </div>
          <div className='flex flex-row'>
            <div className='text-ms font-epilogue font-bold text-secondaryText mr-1.5'>
              Learn Now
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 bg-exploreCardBg rounded-xl pl-4 pr-2 pt-5 pb-3.5'>
          <div className='mb-1.5 font-extrabold text-base font-epilogue text-secondaryText'>
            Wellness Hub
          </div>
          <div className='mb-2.5 font-normal text-[10px] font-rubik text-white'>
            Keep track of health and learn how to stay well
          </div>
          <div className='flex flex-row'>
            <div className='text-ms font-epilogue font-bold text-secondaryText mr-1.5'>
              Start Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
