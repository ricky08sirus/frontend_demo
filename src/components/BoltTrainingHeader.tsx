import { useNavigate } from 'react-router-dom';
import BoltIcon from '/bolt.svg'; // TODO
import BackArrow from '../ui/Icon/BackArrow';

export default function BoltTrainingHeader() {
    const navigate = useNavigate();

    return (
        <div className="relative h-8 flex items-center mb-2">
            <BackArrow className='cursor-pointer' color="#5F5F5F" width={32} height={32} onClick={() => navigate('/bolt')} />
            <div className="flex-1 text-center py-[11.5px] font-semibold text-[13px] leading-[9px] tracking-[0.06em] text-secondaryText">
                TRAINING MODE
            </div>
            <div className='flex flex-row h-full'>
                <img loading='lazy' src={BoltIcon} aria-label='bolt icon' />
                <div className='text-base py-1.5 font-bold text-[#70DAD2]'>50</div>
            </div>
        </div>
    );
}
