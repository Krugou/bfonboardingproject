import React from 'react';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  questions: { id: string; question: string; }[];
  currentStep: number;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({ open, onClose, questions, currentStep }) => {
  if (!open) return null;

  const answeredQuestions = questions.slice(0, currentStep - 1);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-xl font-bold mb-4">Answered Questions</h2>
        <div className="mb-4">
          {answeredQuestions.length > 0 ? (
            <ul className="list-disc list-inside">
              {answeredQuestions.map((q) => (
                <li key={q.id}>{q.question}</li>
              ))}
            </ul>
          ) : (
            <p>No questions answered yet.</p>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AnsweredQuestionsModal;
