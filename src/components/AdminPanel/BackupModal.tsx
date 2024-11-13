import React, {useCallback} from 'react';
import {QuestionItem} from '@/app/types';
import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '@/utils/firebase';
interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  backups: {id: string; timestamp: string; questions: QuestionItem[]}[];
  onRestore: (backup: {questions: QuestionItem[]; timestamp: string}) => void;
  onCleanOldBackups: (
    cleanedBackups: {
      id: string;
      timestamp: string;
      questions: QuestionItem[];
    }[],
  ) => void;
  language: string;
}

const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  backups,
  onRestore,
  onCleanOldBackups,
  language,
}) => {
  if (!isOpen) return null;

  const handleCleanOldBackups = useCallback(async () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const cleanedBackups = backups.filter(
      (backup) => new Date(backup.timestamp) >= thirtyDaysAgo,
    );

    const oldBackups = backups.filter(
      (backup) => new Date(backup.timestamp) < thirtyDaysAgo,
    );

    try {
      await Promise.all(
        oldBackups.map((backup) =>
          deleteDoc(doc(db, 'questionsBackup', backup.id)),
        ),
      );
      onCleanOldBackups(cleanedBackups);
    } catch (error) {
      console.error('Error deleting old backups:', error);
    }
  }, [backups, onCleanOldBackups]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-3/4 max-h-[80vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>
            {language === 'en'
              ? 'Select Backup Version'
              : 'Valitse varmuuskopio'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'>
            ✕
          </button>
        </div>
        <div className='space-y-2'>
          {backups.map((backup) => (
            <div
              key={backup.id}
              className='flex justify-between items-center p-4 border rounded hover:bg-gray-50'>
              <span className='font-medium'>
                {new Date(backup.timestamp).toLocaleString()}
              </span>
              <button
                onClick={() => {
                  onRestore(backup);
                  onClose();
                }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                {language === 'en' ? 'Restore' : 'Palauta'}
              </button>
            </div>
          ))}
        </div>
        <div className='flex justify-end mt-4'>
          <button
            onClick={handleCleanOldBackups}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            {language === 'en'
              ? 'Clean Old Backups'
              : 'Puhdista vanhat varmuuskopiot'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackupModal;
