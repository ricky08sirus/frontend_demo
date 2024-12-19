import { useState } from 'react';
import EarnHeader from '../components/EarnHeader';
import InviteTab from '../components/InviteTab';
import TasksTab from '../components/TasksTab';
import { motion } from 'framer-motion';

export default function Earn() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <div className='flex flex-col w-full h-full relative'>
      <EarnHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {/* {currentTab === 0 ? <InviteTab /> : <TasksTab />} */}
      <motion.div
        key={currentTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentTab === 0 ? <InviteTab /> : <TasksTab />}
      </motion.div>
    </div>
  );
}
