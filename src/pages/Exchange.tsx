import Binance from "../ui/Icon/Binance"
import OKX from "../ui/Icon/OKX"
import Nexo from "../ui/Icon/Nexo"
import Kucoin from "../ui/Icon/Kucoin"
import Keraken from "../ui/Icon/Keraken"

import { useLocalStorage } from "../hooks/useLocalStorage"
import { useExchange } from "../context/exchangeContext"
import { useEffect, useState } from "react"
import Check from "../ui/Icon/Check"


const exchangesz = [
    { name: "Binance", src: Binance, alt: "binance" },
    { name: "Kraken", src: Keraken, alt: "kraken" },
    { name: "Kucoin", src: Kucoin, alt: "kucoin" },
    { name: "OKX", src: OKX, alt: "okx" },
    { name: "Nexo", src: Nexo, alt: "nexo" },

]

export default function Exchange() {
    const [exchangeOne, _setExchangeOne] = useLocalStorage<string>("exchange", "")
    const { changeExchange, exchangess } = useExchange()
    const [exchangees, setExchangees] = useState<string>()

    useEffect(() => {
        if (!exchangess) {
            setExchangees(exchangeOne);
        }
    }, [exchangess]);

    const handleExchange = (exchangeName: string) => {
        changeExchange(exchangeName)
        setExchangees(exchangeName)
    }
    return (
        <div className="mt-[50px]">
            {
                exchangesz.map((item, _index) => (
                    <div key={item.name} onClick={() => handleExchange(item.name)} className="mb-3 cursor-pointer rounded-[16px] font-roboto flex items-center justify-between bg-[#171717] w-full py-5 px-5">
                        <div className="flex items-center gap-4">
                            <item.src />
                            <span className="text-primaryText tracking-[0.02em]">{item.name}</span>
                        </div>
                        {item.name === exchangees && (<span className="item-self-end">

                            <Check width={24} height={24} />
                        </span>)}
                    </div>

                ))
            }

        </div>
    )
}