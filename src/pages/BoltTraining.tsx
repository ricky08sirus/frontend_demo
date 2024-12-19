import BoltTrainingHeader from '../components/BoltTrainingHeader';
import BoltTrainingDetails from '../components/BoltTrainingDetails';

export default function BoltTraining() {
  return (
    <div className='flex flex-col w-full h-full'>
      <BoltTrainingHeader />
      <BoltTrainingDetails />
    </div>
  )
}
