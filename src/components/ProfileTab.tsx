// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUserDetails } from "../context/userDetailsContext";
import { useLeaderboard } from "../hooks/useLeaderboard";


interface UserData {
    [key: string]: any;
}

export default function ProfileTab() {
    //   const [url, setUrl] = useState<string | undefined>()
    const { photoUrl } = useUserDetails();
    // const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null)

    const { data } = useQuery<UserData>({
        queryKey: ["userData"],
        queryFn: () => Promise.resolve(),
        enabled: false
    });
    const { leaderboard } = useLeaderboard(data?.user?.id)
    const currentUserRank = Math.max(0, (leaderboard?.currentUserRank ?? 1));
    const username = data?.user?.username.replace("@", "")

    // Photo url 
    //   useEffect(function () {
    //     if (photoUrl) {
    //       setUrl(photoUrl)
    //     }
    //   }, [photoUrl])



    return (
        <div className='mt-4 h-[64px] bg-[#191B1A] p-[10px] rounded-2xl items-center flex flex-row translate-z-0'>

            <img
                loading='lazy'
                src={photoUrl}
                alt=""
                style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '61.2px',
                    border: '1px solid #0A0C1A',
                    marginRight: '12px',
                    boxShadow: '2.5px 2.5px 12.5px rgba(4,6,15,0.8), -2.5px -2.5px 12.5px rgba(20,23,41,0.6)'
                }}
            />

            <div className='flex-1 flex flex-col py-3 text-primaryText'>
                <div className='text-base'>{username?.length > 12 ? username?.replace("@", "").slice(0, 9) + '...' : username?.replace("@", "")}</div>
                <div className='text-[11px]'>
                    <span className='text-[#5F5F5F]'>Total game score:</span> {data?.user?.coinCount || 0.00}
                </div>
            </div>
            <div className='py-[22px] text-base font-medium text-secondaryText'>
                #{currentUserRank > 999999 ? currentUserRank?.toString().slice(0, 5) + '...' : currentUserRank}
            </div>
        </div>

    )
}
