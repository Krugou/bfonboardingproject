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
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const UpperPanel: React.FC<UpperPanelProps> = ({
  listeningMode,
  setListeningMode,
  currentStep,
  handleOpenModal,
  questions,
  setCurrentStep,
}) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
      <ListeningModeToggle
        listeningMode={listeningMode}
        setListeningMode={setListeningMode}
      />
      <BFStepper
        questions={questions}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <HistoryButton currentStep={currentStep} onClick={handleOpenModal} />
    </div>
  );
};

export default UpperPanel;
