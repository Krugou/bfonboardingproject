import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React from 'react';

interface QuestionDisplayProps {
  currentStep: number;
  questions: {id: string; question: string; tooltip: string}[];
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  currentStep,
  questions,
}) => {
  const speakTooltip = (tooltip: string) => {
    console.log('speakTooltip called with:', tooltip); // Log the input

    if (!tooltip) {
      console.error('Tooltip is empty or undefined');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(tooltip);

    utterance.onstart = () => {
      console.log('Speech synthesis started');
    };

    utterance.onend = () => {
      console.log('Speech synthesis ended');
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
    };

    speechSynthesis.speak(utterance);
  };
  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'>
      {currentStep <= questions.length ? (
        <div className='flex  justify-center items-center'>
          <h2
            className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl'
            title={questions[currentStep - 1].tooltip}>
            {questions[currentStep - 1].question}
          </h2>
          <button
            title='Listen to the tooltip'
            onClick={() => speakTooltip(questions[currentStep - 1].tooltip)}
            className='ml-2 p-2 text-blue-500 hover:text-blue-700'>
            <VolumeUpIcon fontSize='large' />
          </button>
        </div>
      ) : (
        <h2 className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          You have completed all the questions!
        </h2>
      )}
    </div>
  );
};

export default QuestionDisplay;
