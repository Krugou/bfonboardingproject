import { useUserContext } from '@/context/UserContext';
import React from 'react';
import BFStepper from './UpperPanel/BFStepper';
import HistoryButton from './UpperPanel/HistoryButton';
import ListeningModeToggle from './UpperPanel/ListeningModeToggle';
interface UpperPanelProps {


  handleOpenModal: () => void;
}

const UpperPanel: React.FC<UpperPanelProps> = ({


  handleOpenModal,
}) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 dark:bg-gray-800 dark:text-white'>
      <ListeningModeToggle


      />
      <BFStepper  />
      <HistoryButton
        onClick={handleOpenModal}
        aria-label='Open history modal'
      />
    </div>
  );
};

export default UpperPanel;
