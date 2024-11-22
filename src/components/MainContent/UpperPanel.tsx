import {useUserContext} from '@/context/UserContext';
import React from 'react';
import BFStepper from './UpperPanel/BFStepper';
import HistoryButton from './UpperPanel/HistoryButton';
import ListeningModeToggle from './UpperPanel/ListeningModeToggle';
interface UpperPanelProps {
  handleOpenModal: () => void;
}

const UpperPanel: React.FC<UpperPanelProps> = ({handleOpenModal}) => {
  return (
    <div className='flex  justify-between items-center  '>
      <ListeningModeToggle />
      <BFStepper />
      <HistoryButton
        onClick={handleOpenModal}
        aria-label='Open history modal'
      />
    </div>
  );
};

export default UpperPanel;
