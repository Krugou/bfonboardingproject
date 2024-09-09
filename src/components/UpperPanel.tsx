import React from 'react';
import HistoryButton from './HistoryButton';
import ListeningModeToggle from './ListeningModeToggle';
import Stepper from './Stepper';
interface Question {
  id: string;
  question: string;
  condition: string;
  tooltip: string;
  syntaxPlaceholder: string;
  answerType: string;
  answerOptions: string;
  targetAudience: string;
  errorAnswer: string;
}
interface UpperPanelProps {
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setListeningMode: (mode: boolean) => void;
  currentStep: number;
  handleOpenModal: () => void;
  questions: Question[];
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
      />
      <Stepper steps={questions} currentStep={currentStep} />
      <HistoryButton currentStep={currentStep} onClick={handleOpenModal} />
    </div>
  );
};

export default UpperPanel;
