import { Link, useLocation } from "react-router-dom"
import { formatNumber } from "../helper/formatNumbers"
import { useQuery } from "@tanstack/react-query"
import { LuInfinity } from "react-icons/lu";
import { useLocalStorage } from "../hooks/useLocalStorage"
//update exchange
import Binance from "./Icon/Binance"
import OKX from "./Icon/OKX"
import Nexo from "./Icon/Nexo"
import Kucoin from "./Icon/Kucoin"
import Keraken from "./Icon/Keraken"
import { useEffect, useState } from "react"
import { useExchange } from "../context/exchangeContext"
import BossCoin from "./Icon/BossCoin"
import BoltBuyIcon from "./Icon/BoltBuyIcon"
import FireIcon from "./Icon/FireIcon"

interface UserData {
    [key: string]: any; // This allows for an object with any number of properties
}


export default function ScoreBoard() {
    const [exchangees, setExchangees] = useState<string>()
    const { data } = useQuery<UserData>({
        queryKey: ["userData"],
        queryFn: () => Promise.resolve(),
        enabled: false
    })

    const location = useLocation()
    const excludedPaths = ["/game", "/me", "/earn", "/rank", "/bolt/training", "/me/notification", "/me/badge", "/leaderboard", "/explore"];

    const showScoreBoard = !excludedPaths.includes(location.pathname);

    const [exchangeOne] = useLocalStorage("exchange", "")
    const { exchangess } = useExchange()
    useEffect(() => {
        if (!exchangees) {
            setExchangees(exchangeOne);
        } else {
            setExchangees(exchangess);
        }
    }, [exchangeOne, exchangess]);
    return (
        <>
            {showScoreBoard && (
                <div className="w-full flex justify-between pb-6 mt-auto">

                    <div className="w-full  items-center  flex gap-[6px]  ">
                        <Link className={`max-w-[40px] h-[40px] rounded-full`} to="/exchange">
                            <div className={`${location.pathname === "/exchange" ? "border-[#ffcc00aa] border-[0.5px]" : ""} w-[40px] bg-[#FFCC001A] flex items-center border-[2px] border-[#FFCC000D] h-[40px] justify-center gap-[6px] rounded-full `}>
                                {
                                    exchangees === "Binance" ? <Binance /> :
                                        exchangees === "OKX" ? <OKX /> :
                                            exchangees === "Nexo" ? <Nexo /> :
                                                exchangees === "Kucoin" ? <Kucoin /> :
                                                    exchangees === "Kraken" ? <Keraken /> :
                                                        <Binance />
                                }
                            </div>
                        </Link>
                        <Link className={`max-w-[79px] w-full`} to={`/streak/${data?.user?.id}`}>
                            <div className={`${location.pathname === `/streak/${data?.user?.id}` ? "border-[#D97D00] border-[0.5px]" : ""} bg-[#FFAA001A] flex items-center min-h-[40px]  gap-[4px] rounded-[100px] border-[2px] border-[#D97D000D] text-[13px] leading-none overflow-auto`}>
                                <span className="ml-[3px] w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-[#D97D000D]">
                                    {/* <Icon width={32} height={32} src={streak} alt="exchange icon" /> */}
                                    <FireIcon />
                                </span>
                                <span className="text-[#D97D00] font-bold tracking-[0.28px]">{formatNumber(data?.streak?.currentStreak || 0)}</span>
                            </div>
                        </Link>
                        <Link className={`max-w-[79px] w-full`} to="/bolt">
                            <div className={`${location.pathname === "/bolt" ? "border-[#00C7BE] border-[0.5px]" : ""} bg-[#00C7BE33] flex items-center min-h-[40px] pl-[1px] gap-[4px] rounded-[100px] border-[2px] border-[#00C7BE0D] text-[13px] leading-none overflow-auto`}>
                                <span className="ml-[3px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#00C7BE0D]">
                                    {/* <Icon width={32} height={32} src={gameChance} alt="exchange icon" /> */}
                                    <BoltBuyIcon />
                                </span>
                                <span><LuInfinity style={{ fontSize: "20px", color: "#00C7BE" }} /></span>
                            </div>
                        </Link>
                    </div>

                    <Link className={`w-full max-w-[98px]`} to="/bosscoin">
                        <div className={`${location.pathname === "/bosscoin" ? "border-[#FFBE50] border-[0.5px]" : ""} bg-[#FFBE504D] flex items-center min-h-[40px] pl-[1px] gap-[4px] rounded-[20px] border-[2px] border-[#FFBE501A] text-[13px] leading-none overflow-auto`}>
                            <span className="ml-[3px] w-[30px] h-[30px] rounded-full bg-[#F5AE1ACC]">
                                {/* <Icon width={32} height={32} src={bosscoin} alt="exchange icon" /> */}
                                <BossCoin width={30} height={29} />
                            </span>
                            <span className="font-bold tracking-[0.28px] text-[#FFBE50]">{formatNumber(data?.user?.coinCount || 0)}</span>
                        </div>
                    </Link>

                </div>
            )}
        </>

    )
}
