import Close from '../ui/Icon/Close';
import Details from '../ui/Icon/Details';

export default function ExploreHeader() {
  return (
    <div className='flex flex-row h-[54px] gap-[26.8px]'>
      <Close className='cursor-pointer' width={20} height={20} />
      <div className='flex-1 py-[13.5px] text-lg font-roboto font-semibold'>
        BossBlock
      </div>
      <Details className='cursor-pointer' width={20} height={20} color="#E0E0E0" />
    </div>
  );
}
