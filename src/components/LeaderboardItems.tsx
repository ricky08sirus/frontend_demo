
import FirstPriceIcon from '../ui/Icon/FirstPriceIcon';
import SecondPriceIcon from '../ui/Icon/SecondPriceIcon';
import ThirdPriceIcon from '../ui/Icon/ThirdPriceIcon';

interface Leader {
  rank: number;
  username: string;
  score: number;
}
const LeaderboardItem = ({ rank, username, score }: Leader) => (
  <div className='h-12 flex flex-row text-left text-[13px] py-4 border-b border-[#5F5F5F33] text-primaryText font-semibold'>
    <div className='min-w-[50px]'>
      {rank + 1 <= 3 ? (

        <div>
          {(() => {
            switch (rank) {
              case 0:
                return <FirstPriceIcon />;
              case 1:
                return <SecondPriceIcon />;
              case 2:
                return <ThirdPriceIcon />;
              default:
                return `${rank + 1}`;
            }
          })()}
        </div>
      ) : (
        rank + 1
      )}
    </div>
    <div className='flex-1'>{username ? username.replace('@', '') : "Anonymous"}</div>
    <div className='min-w-[90px] '>
      {score || 0}
    </div>
  </div>
);

export default LeaderboardItem;
