import {QuestionItem} from '@/app/types';
import React from 'react';
import BFStepper from './UpperPanel/BFStepper';
import HistoryButton from './UpperPanel/HistoryButton';
import ListeningModeToggle from './UpperPanel/ListeningModeToggle';

interface UpperPanelProps {
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setListeningMode: (mode: boolean) => void;
  currentStep: number;
  handleOpenModal: () => void;
  questions: QuestionItem[];
}

const UpperPanel: React.FC<UpperPanelProps> = ({
  listeningMode,
  setListeningMode,
  currentStep,
  handleOpenModal,
  questions,
}) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
      <ListeningModeToggle
        listeningMode={listeningMode}
        setListeningMode={setListeningMode}
        aria-label='Toggle listening mode'
        role='switch'
        aria-checked={listeningMode}
      />
      <BFStepper questions={questions} />
      <HistoryButton
        currentStep={currentStep}
        onClick={handleOpenModal}
        aria-label='Open history modal'
        role='button'
      />
    </div>
  );
};

export default UpperPanel;
