import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import React, {useEffect, useRef} from 'react';
import AnswersTable from './AnswersTables';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({
  open,
  onClose,
}) => {
  const {userInfo, language} = useUserContext();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const {questions} = useUserContext();
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        logEvent('modal_close', {modal: 'AnsweredQuestionsModal'});
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!userInfo) {
    return null;
  }

  if (!open) return null;

  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div
      className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'
      role='dialog'
      aria-modal='true'
      aria-labelledby='answered-questions-modal-title'
      ref={modalRef}
      tabIndex={-1}>
      {/* actual content of the modal is below */}
      <div className='bg-white rounded-lg p-6 w-full xl:w-2/3'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold' id='answered-questions-modal-title'>
            {language === 'fi' ? 'Vastatut kysymykset' : 'Answered Questions'}
          </h2>
          <button
            ref={closeButtonRef}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              onClose();
              logEvent('modal_close', {modal: 'AnsweredQuestionsModal'});
            }}
            aria-label='Close answered questions modal'>
            {language === 'fi' ? 'Sulje' : 'Close'}
          </button>
        </div>

        <div className=' p-2'>
          {answeredQuestions.length > 0 ? (
            <AnswersTable />
          ) : (
            <p className='text-center'>
              {language === 'fi'
                ? 'Ei vastattuja kysymyksiä'
                : 'No answered questions'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestionsModal;
