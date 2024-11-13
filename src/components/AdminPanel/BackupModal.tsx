
import React from 'react';
import { QuestionItem } from '@/app/types';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  backups: { id: string; timestamp: string; questions: QuestionItem[] }[];
  onRestore: (backup: { questions: QuestionItem[]; timestamp: string }) => void;
  language: string;
}

const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  backups,
  onRestore,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {language === 'en' ? 'Select Backup Version' : 'Valitse varmuuskopio'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2">
          {backups.map((backup) => (
            <div
              key={backup.id}
              className="flex justify-between items-center p-4 border rounded hover:bg-gray-50"
            >
              <span className="font-medium">
                {new Date(backup.timestamp).toLocaleString()}
              </span>
              <button
                onClick={() => {
                  onRestore(backup);
                  onClose();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {language === 'en' ? 'Restore' : 'Palauta'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackupModal;
