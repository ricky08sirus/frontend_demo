import { useCallback, useEffect, useState } from 'react';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { formatNumber } from '../helper/formatNumbers';
import Spinner from '../ui/Spinner';
import LeaderboardItem from '../components/LeaderboardItems';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useUserDetails } from '../context/userDetailsContext';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import ProfileTab from '../components/ProfileTab';
// import ProfileTab from '../components/ProfileTab';



const tabs = ['Game score', 'Invite'];
const period = ['Weekly', 'Monthly'];

interface LeaderboardData {
  leaderboard: any[];
  currentUserRank: number;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

interface UserData {
  [key: string]: any;
}


export default function Leaderboard() {
  const [currentPeriod, setCurrentPeriod] = useState(period[0]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null)
  const [players, setPlayers] = useState<any>([])
  const [page, setPage] = useState<number | undefined>(1)
  const [hasMore, setHasMore] = useState(true);
  const [TabIndex, setCurrentTabIndex] = useState<number>(0);

  const { data } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: () => Promise.resolve(),
    enabled: false
  });
  const { leaderboard: leader, refetch } = useLeaderboard(data?.user?.id, page)

  useEffect(() => {
    if (leader) {
      setLeaderboard(leader);
      setPlayers((prevPlayers: any[]) => {
        if (page === 1) return leader.leaderboard;
        return [...prevPlayers, ...leader.leaderboard];
      });
      setHasMore((leader.pagination?.currentPage ?? 0) < (leader.pagination?.totalPages ?? 0));
    }
    refetch();
  }, [leader, page, refetch]);


  const handleLoadMore = useCallback(() => {
    if (!leaderboard || !leaderboard.pagination) return;

    const { currentPage, totalPages, totalItems } = leaderboard.pagination;

    if (players.length >= (totalItems ?? 0)) return;

    if ((currentPage ?? 0) < (totalPages ?? 0)) {
      setPage((prevPage) => (prevPage ?? 1) + 1);
      setHasMore(players.length < (totalItems ?? 0));
    }
  }, [leaderboard?.pagination]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col w-full h-full'>
      <div className="h-12 rounded-xl w-full flex flex-row text-center bg-[#1D1D1D] p-1.5 transition-all duration-500 ease-linear">
        {tabs.map((tab: string, index: number) => (
          <div
            key={index}
            className={`h-full flex justify-center items-center flex-1 cursor-pointer text-base font-bold py-2 rounded-lg tracking-tight 
          ${TabIndex === index
                ? "bg-[#37f5ec15] text-[#37F5EB] scale-100"
                : "text-secondaryText scale-100"
              } 
          transition-all duration-500 ease-linear`}
            onClick={() => setCurrentTabIndex(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* //Issues */}
      <div className='mt-[13px] border-[1.5px] rounded-lg py-[10px] px-[42px] border-[#37F5EB] mx-auto flex flex-row gap-[42px]'>
        {period.map((value, index) => (
          <div key={index}
            className={`text-lg font-bold cursor-pointer ${currentPeriod == value ? 'text-[#37F5EB]' : 'text-secondaryText'
              } ${index === period.length - 1 ? 'flex-1' : ''}`}
            onClick={() => setCurrentPeriod(value)}
          >
            {value}
          </div>
        ))}

      </div>

      {/* /////////////////////////////////////////////////////////////////////// */}

      <ProfileTab />


      <div className='mt-[30px] flex flex-row'>
        <div className='font-normal text-[11px] text-[#5F5F5F]'>
          {formatNumber(leaderboard?.pagination?.totalItems)} Players
        </div>
        <div className='ml-3 border-t border-[#2A2A2A] flex-1 mt-2' />
      </div>
      <div className='h-12 flex flex-row text-left text-[13px] py-4 border-b border-[#5F5F5F33] text-[#B0B0B0] mt-5'>
        <div className='min-w-[50px]'>#</div>
        <div className='flex-1'>Players</div>
        <div className='min-w-[90px]'>Scores</div>
      </div>

      {/* Leaderboard Items */}
      {!leaderboard?.leaderboard ? <span className='my-auto'><Spinner /></span> : <div className='flex flex-col w-full h-full'>
        <div
          id="scrollableDiv"
          className='overflow-y-auto hide-scrollbar h-[calc(100vh-400px)] md:h-[calc(100vh-450px)] lg:h-[calc(100vh-500px)]'
        >
          <InfiniteScroll
            dataLength={players?.length}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={leaderboard?.leaderboard && <Spinner />}
            scrollableTarget="scrollableDiv"
          >

            {players?.map((item: { username: string; coinCount: number; }, index: number) => (
              <LeaderboardItem
                key={index}
                rank={index}
                username={item?.username}
                score={item?.coinCount}
              />

            ))

            }
          </InfiniteScroll>
        </div>
      </div>
      }
    </motion.div>
  );
}
