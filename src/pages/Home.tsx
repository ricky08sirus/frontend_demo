import Game from '/gamePicResized.jpg';
// import Game from '/1d0a71926b6154778bfa492006eb1a65.jpg';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCollectFarmingReward, useGetFaming, useStartFarming } from "../hooks/useFarming";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import FarmingConfirmModal from "../components/FarmingConfirmModal";
import BossBlockFarmLogo from "../ui/Icon/BossBlockFarmLogo";
import { motion } from 'framer-motion';
import Stars from "/512.gif"


interface UserData {
    [key: string]: any;
}
interface Modal {
    setFarmingConfirmModal: any
}

export default function Home() {
    // const [currentMode, setCurrentMode] = useState<string>('Train');
    const [searchParams] = useSearchParams();
    const [leftTime, setLeftTime] = useState<string>('0h0m0s');
    const [formattedTime, setFormattedTime] = useState<string>('00h 00m');
    const [coin, setCoin] = useState<any>(0.00)
    // let formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 });
    //Hnadle startfarming and collect farming
    const { startfarming } = useStartFarming()
    const { collectReward, reward } = useCollectFarmingReward()
    const [farmingConfirmModalVisibility, setFarmingConfirmModalVisibility] = useState(false);
    const { setFarmingConfirmModal } = useOutletContext<Modal>();
    //get user
    const { data } = useQuery<UserData>({
        queryKey: ["userData"],
        queryFn: () => Promise.resolve(),
        enabled: false
    });
    //get farmming 
    const { farmming }: any = useGetFaming(data?.streak?.userId)
    // console.log(farmming)

    useEffect(() => {
        if (data?.farming?.active) {
            setLeftTime(data?.farming?.timeLeft);
        }
    }, [data]);
    // console.log(leftTime)
    useEffect(() => {
        const interval = setInterval(() => {
            if (leftTime) {
                const [hours, minutes, seconds] = parseTime(leftTime);
                // console.log(hours, minutes, seconds);
                let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;

                if (totalSeconds < 0) {
                    clearInterval(interval);
                    setFormattedTime('00:00:00');
                    return;
                }

                const newHours = Math.floor(totalSeconds / 3600);
                const newMinutes = Math.floor((totalSeconds % 3600) / 60);
                const newSeconds = totalSeconds % 60;
                setFormattedTime(`${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`);

                // setLeftTime(`${newHours}h${newMinutes}m`);
                setLeftTime(`${newHours}h${newMinutes}m${totalSeconds % 60}s`);

                const calCoin = (80 / (8 * 3600)) * (Math.abs(totalSeconds !== 28800 ? 28800 - totalSeconds : 28800));
                setCoin(calCoin);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [leftTime, data]);

    const parseTime = (time: string) => {
        // const regex = /(\d+)h(\d+)m(\d+)(?:\.\d+)?s/;
        // const match = time.match(regex);

        // if (match) {
        //     const hours = String(match[1]).padStart(2, '0');
        //     const minutes = String(match[2]).padStart(2, '0');
        //     const seconds = String(match[3]).padStart(2, '0');
        //     return [parseInt(hours), parseInt(minutes), parseInt(seconds)];
        // }
        const regex = /(\d+)h(\d+)m(\d+)(?:\.\d+)?s|(\d+)m(\d+)(?:\.\d+)?s/;
        const match = time.match(regex);

        if (match) {
            const hours = match[1] ? parseInt(match[1]) : 0;
            const minutes = match[2] ? parseInt(match[2]) : match[4] ? parseInt(match[4]) : 0;
            const seconds = match[3] ? parseInt(match[3]) : match[5] ? parseInt(match[5]) : 0;

            return [hours, minutes, seconds];
        }

        return [0, 0, 0];
    };

    const handleStartFarming = () => {
        if (data?.farming?.active && !data?.farming?.claimable) {
            return;
        }
        if (!data?.farming?.active && !data?.farming?.claimable) {

            startfarming(data?.streak?.userId)
        }
        if (data?.farming?.active && data?.farming?.claimable) {
            setFarmingConfirmModalVisibility(true);
            setFarmingConfirmModal(true)
        }
        // useQuery()
    }


    const handleClaim = () => {
        collectReward(data?.streak?.userId)
        setFarmingConfirmModalVisibility(false);
        setFarmingConfirmModal(false)
        console.log(reward)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='relative w-full h-full'>
            <div className='absolute bottom-10 w-full'>
                {/* <div className={`h-12 flex flex-row items-center py-[11.5px] px-auto rounded-lg bg-[#0a0c1a9c] ${data?.farming?.active && !data?.farming?.claimable ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleStartFarming()}> */}
                <div className={`h-[55px] flex flex-row items-center py-[11.5px] px-auto rounded-lg bg-[#191B1A] ${data?.farming?.active && !data?.farming?.claimable ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleStartFarming()}>
                    <div className="flex-1 flex justify-center items-center">
                        <div className={`flex ${data?.farming?.active && "ml-12"} justify-center my-auto items-center gap-[10px] py-[2px]}`}>
                            {/* {<img src={!data?.farming?.claimable ? BossBlockFarmingIcon : BossCoinIcon} className='mr-2.5 w-6 h-6' />} */}

                            {
                                <BossBlockFarmLogo width={20} height={20} />
                                // <BossBlockFarmLogo color={`${data?.farming?.active && !data?.farming?.claimable ? "rgba(158,116,226,0.3)" : "#B0B0B0"}`} width={20} height={20} />
                            }
                            {/* the switch */}

                            <span className="farmingTestShadow flex justify-center items-center font-grotesk text-base font-extrabold text-secondaryText">
                                {(() => {
                                    switch (true) {
                                        case farmming?.message === "Farming session completed" && data?.farming?.claimable:
                                            return (
                                                <>

                                                    <span className="flex justify-center items-center">Collect {`${farmming?.coinsEarned}`} Points</span>
                                                </>
                                            );
                                        case data?.farming?.active:
                                            return <span>Farming <span>{coin.toFixed(3)}</span></span>;
                                        default:
                                            return <span>Start Farming</span>;
                                    }
                                })()}
                            </span>
                            {/* the switch */}


                        </div>
                    </div>
                    {data?.farming?.active && <span className="text-[#615F5F4D] text-[12px] font-bold leading-normal font-poppins mr-3">{formattedTime}</span>}
                </div>
            </div>

            <img src={Stars} alt='gif star' className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-32 h-32" />

            <div className='absolute items-center justify-center bottom-[108px] h-[108px] rounded-xl border-3 border-[#9E74E2] w-full flex flex-row gap-6'>
                {/* <div className='rounded-xl items-center justify-center absolute bottom-[108px] h-[108px] bg-[#0a0c1a88] border-3 border-[#9E74E2] p-2 w-full flex flex-row gap-2.5'> */}
                <img loading='lazy' src={Game} className='rounded-xl gamePicBorder object-center w-full h-full' />
                <div className='flex flex-col py-2 gap-[16px]'>
                    <Link to="/explore"> <button className="flex items-center text-white font-medium border justify-center border-[#37F5EB] py-2 min-w-[90px] w-full shadow-[0_4px_0_#008B8B] rounded-xl cursor-pointer active:shadow-none active:translate-y-1 border-b- border-b-[#008B8B]">
                        More
                    </button>
                    </Link>
                    <Link to={`/play/?${searchParams.toString()}`}>
                        <button className="justify-center flex items-center text-black bg-[#37F5EB] font-medium border-none py-2 min-w-[90px] w-full shadow-[0_4px_0_#008B8B] rounded-xl cursor-pointer active:shadow-none active:translate-y-1">

                            Play
                        </button>
                    </Link>
                </div>
            </div>

            {
                farmingConfirmModalVisibility && (
                    <FarmingConfirmModal
                        setVisibility={setFarmingConfirmModalVisibility}
                        handleClickCollect={handleClaim}
                    />
                )
            }

            {/* {
                currentMode === 'Play' &&
                <div className='absolute bottom-1/3 rounded-xl h-auto p-2 w-full flex flex-col gap-[30px]'>
                    <img src={FarmingImage} className='flex-1' style={{ height: '200px', objectFit: 'cover' }}></img>
                    <div className='flex flex-row gap-2.5 justify-center h-8'>
                        <img src={SettingsIcon} />
                        <Link to={`/play/?${searchParams.toString()}`}> <div className='h-8 rounded-lg w-[100px] py-[9px] text-[13px] font-bold font-lexend leading-4 cursor-pointer text-center bg-homePlayBtnBg'
                        >
                            Play
                        </div></Link>
                        <Link to="/play"> <div className='h-8 rounded-lg w-[100px] py-[9px] text-[13px] font-bold font-lexend leading-4 cursor-pointer text-center border border-[#B0B0B0]'
                            onClick={() => setCurrentMode('Train')}
                        >
                            Practice
                        </div></Link>
                    </div>
                </div>
            } */}
        </motion.div >
    )
}