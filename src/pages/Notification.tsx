import NotificationHeader from '../components/NotificationHeader';
import NotificationDetails from '../components/NotificationDetails';

export default function Notification() {
  return (
    <div className='flex flex-col w-full'>
      <NotificationHeader />
      <NotificationDetails />
    </div>
  )
}
