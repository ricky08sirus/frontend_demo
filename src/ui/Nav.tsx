// import Explore from "/Vector(3).svg";
// import HomeIcon from "/HOMEICON.svg";
// import HomeClickedIcon from "/home_clicked.svg";
// import RewardIcon from "/REWARDSICON.svg";
// import RewardClickedIcon from "/reward_clicked.svg";
// import LeaderboardIcon from "/LEADERBOARDICON.svg";
// import LeaderboardClickedIcon from "/rank_clicked.svg";
// import ProfileIcon from "/PROFILEICON.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import ProfileClickedIcon from "/profile_clicked.svg";
// import Icon from "./Icon";
import HomeIcon from "./Icon/HomeIcon";
// import ExploreIcon from "./Icon/TaskIcon";
import RewardIcon from "./Icon/RewardIcon";
import LeaderBoardIcon from "./Icon/LeaderBoardIcon";
import ProfileIcon from "./Icon/ProfileIcon";
import TaskIcon from "./Icon/TaskIcon";

interface UserData {
  [key: string]: any;
}

export default function Nav() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const gameId = `${import.meta.env.VITE_API_GAME_ID}`;
  const gameId = "67094156dea49168c7dd81a2";
  console.log(searchParams)

  const { data } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: () => Promise.resolve(),
    enabled: false,
  });

  useEffect(() => {
    setSearchParams({
      gameId: gameId,
      userId: data?.user?.id,
      referralKey: data?.user?.referralKey,
    });
  }, [gameId, data, setSearchParams]);

  const navigation = [
    { name: "Home", path: "/", icon: HomeIcon, alt: "home icon" },
    { name: "Tasks", path: `/task`, icon: TaskIcon, alt: "task icon" },
    { name: "Reward", path: "/earn", icon: RewardIcon, alt: "earn icon" },
    { name: "Rank", path: "/rank", icon: LeaderBoardIcon, alt: "rank icon" },
    { name: "Profile", path: "/me", icon: ProfileIcon, alt: "me icon" },
  ];

  return (
    <nav className="w-full mb-auto flex justify-around mt-5">
      {navigation.map(({ name, path, icon: Icon }, index) => (

        <Link to={path} key={index}>
          <span
            className={`flex flex-col items-center justify-center gap-[10px] leading-[1] ${location.pathname === path
              ? "text-[#37F5EB]"
              : "text-[#A0A0A0]"
              }`}
          >
            <Icon
              width={26}
              height={26}
              stroke={location.pathname === path ? "#37F5EB" : "#A0A0A0"}
            // src={location.pathname === nav.path ? nav.clickedSrc : nav.src}
            // alt={nav.alt}
            />
            <span className="text-[11px] tracking-[0.02em] font-grotesk font-semibold">{name}</span>
          </span>
        </Link>
      ))
      }
    </nav >
  );
}