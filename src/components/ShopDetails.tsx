import React from 'react';
import BossCoinIcon from '/boss_coin.svg';
import BoltBuyIcon from '/bolt_buy.svg';
import AirDropBuyIcon from '/airdrop_buy.svg';
import StarIcon from '/star.svg';
import { useQuery } from '@tanstack/react-query';
import { formatNumber } from '../helper/formatNumbers';

interface BalanceProps {
  icon: string;
  title: string;
  value: string;
  buttonText: any;
  borderColor: string;
  textColor: string;
  bgColor: string;
  borderTwoColor: string
  bgTwoColor: string
}

interface UserData {
  [key: string]: any;
}

const Balance: React.FC<BalanceProps> = ({
  icon,
  title,
  value,
  buttonText,
  // borderColor,
  textColor,
  bgColor,
  // borderTwoColor,
  bgTwoColor
}) => (
  <div
    className={`flex flex-row rounded-2xl ${bgColor} h-16 py-3 pl-5 pr-2`}
  >
    <img loading='lazy' src={icon} className='w-[38px] h-[38px] mr-[14px]' alt={title} />
    <div
      className={`flex-1 flex justify-center flex-col -mt-1 text-base font-semibold text-[${textColor}]`}
    >
      <div>{title}</div>
      <div>{value}</div>
    </div>
    <div
      className={`h-8 my-[3px] flex justify-center ${bgTwoColor} items-center rounded-lg font-bold w-20 text-center text-[${textColor}] text-base py-[6px]`}
    >
      {buttonText}
    </div>
  </div>
);

interface PurchaseOptionProps {
  title: string;
  icon: string;
  values: number[];
  unit: string;
  multiplier: number;
}

const PurchaseOption: React.FC<PurchaseOptionProps> = ({
  title,
  icon,
  values,
  unit,
  multiplier,
}) => (
  <div className='flex flex-col opacity-50'>
    <div className='text-[13px] text-[#57A3FF] font-poppins font-medium mb-3.5'>
      {title}
    </div>
    <div className='flex flex-row gap-2 scroll-container overflow-auto'>
      {values.map((value) => (
        <div
          key={`${title}-${value}`}
          className={`flex flex-col rounded-[14px] bg-[#1F232D] pt-5 pb-1.5 px-1.5 h-auto ${title === 'game chances' ? 'w-[108px]' : 'min-w-[108px]'
            }`}
        >
          <div className='text-center font-monserrat font-semibold text-[13px]'>
            {value} {unit}
          </div>
          <div className='flex flex-row flex-1 justify-center w-full flex-wrap min-h-[64px] my-5'>
            {unit === 'Chance' ? (
              [...Array(value)].map((_, index) => (
                <img
                  loading='lazy'
                  key={`bolt-${index}`}
                  src={BoltBuyIcon}
                  className='w-8 h-8'
                  alt='Bolt'
                />
              ))
            ) : (
              <img loading='lazy' src={icon} className='w-16 h-16' alt={title} />
            )}
          </div>
          <div className='bg-[#11141B] rounded-[10px] h-8 w-full flex flex-row justify-center'>
            <img loading='lazy' src={StarIcon} className='w-8 h-8' alt='Star' />
            <div className='text-[13px] font-medium py-[7px]'>
              {multiplier * value}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShopDetails: React.FC = () => {
  const { data } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: () => Promise.resolve(),
    enabled: false
  });
  return (
    <div className='flex flex-col'>
      <Balance
        icon={BossCoinIcon}
        title='Coin'
        value=''
        buttonText={formatNumber(data?.user?.coinCount)}
        borderColor='border-[#FFC00033]'
        textColor='#FFCA28'
        bgColor="bg-[#FFCA281A]"
        borderTwoColor="border-[#FFCA2880]"
        bgTwoColor='bg-[#F8DD791A]'
      />
      {/* <Balance
        icon={StarIcon}
        title='Star Balance'
        value='300'
        buttonText='Buy'
        borderColor='border-[#57A3FF4D]'
        textColor='#57A3FF'
        bgColor="bg-[#57A3FF1A]"
        borderTwoColor="border-[#57A3FF80]"
        bgTwoColor="bg-[#007AFF1A]"
      /> */}
      {/* <div className='px-[64px] mt-6 mb-[30px] border-t border-[#323232]' /> */}
      <div className='flex flex-col mt-[61px] gap-[30px]'>
        <PurchaseOption
          title='MORE ENERGY'
          icon={BoltBuyIcon}
          values={[1, 3, 5]}
          unit='Chance'
          multiplier={50}
        />
        <PurchaseOption
          title='AIRDROP POINTS'
          icon={AirDropBuyIcon}
          values={[10, 100, 1000, 5000]}
          unit='Points'
          multiplier={5}
        />
      </div>
    </div>
  );
};

export default ShopDetails;