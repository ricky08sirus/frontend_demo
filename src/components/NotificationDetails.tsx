import Ellipse from '../ui/Icon/Ellipse';

const NotificationItem = ({
  text,
  time,
  showEllipse,
}: {
  text: string;
  time: string;
  showEllipse?: boolean;
}) => (
  <div className='rounded-2xl h-[93px] bg-gray-700 py-5 pl-[22px] pr-12 relative'>
    <div className='font-poppins font-medium text-[13px] leading-[19.5px] tracking-[4%] h-[29px]'>
      {text}
    </div>
    <div className='pt-4 font-poppins font-normal text-[11px] leading-[16.5px] tracking-[4%]'>
      {time}
    </div>
    {showEllipse && (
      <Ellipse className='absolute right-[14px] top-5' />
    )}
  </div>
);

export default function NotificationDetails() {
  const notifications = [
    {
      date: 'Today',
      items: [
        {
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: '2:00 AM',
          showEllipse: true,
        },
      ],
    },
    {
      date: 'Yesterday',
      items: [
        {
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: '2:00 AM',
        },
      ],
    },
    {
      date: '19/09/24',
      items: [
        {
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: '2:00 AM',
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col'>
      {notifications.map(({ date, items }) => (
        <div key={date}>
          <div className='font-monserrat text-[11px] leading-[13.4px] tracking-[2%] font-semibold pt-[30px]'>
            {date}
          </div>
          <div className='flex flex-col gap-2.5 pt-3'>
            {items.map((item: any, index) => (
              <NotificationItem
                key={index}
                text={item.text}
                time={item.time}
                showEllipse={item.showEllipse}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
