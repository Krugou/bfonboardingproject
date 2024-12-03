import React, {useState} from 'react';
import BackupModal from './BackupModal';
import QuestionsFlow from './QuestionsFlow';
import QuestionForm from './QuestionForm';
import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import {db} from '@/utils/firebase';
import {toast} from 'react-toastify';
import InsertMockData from '../InsertMockData';
const AdminPanel: React.FC = () => {
  const {questions, setQuestions, language} = useUserContext();
  const [currentQuestion, setCurrentQuestion] = useState<QuestionItem | null>(
    null,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [backups, setBackups] = useState<
    {id: string; timestamp: string; questions: QuestionItem[]}[]
  >([]);

  const handleAdd = () => {
    const newQuestion: QuestionItem = {
      id: '',
      question: {en: '', fi: ''},
      conditions: [],
      tooltip: {en: '', fi: ''},
      syntaxPlaceholder: {en: '', fi: ''},
      answerType: '',
      errorAnswer: {en: '', fi: ''},
      answerOptions: [],
      maxLength: 0,
      validationRegex: {en: '', fi: ''},
      specialCondition: {},
    };
    setCurrentQuestion(newQuestion);
    setIsEditing(true);
  };

  const handleEdit = (question: QuestionItem) => {
    setCurrentQuestion(question);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setCurrentQuestion(null);
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (currentQuestion) {
      let updatedQuestions;
      if (isEditing) {
        updatedQuestions = questions.map((q) =>
          q.id === currentQuestion.id ? currentQuestion : q,
        );
      } else {
        updatedQuestions = [...questions, currentQuestion];
      }
      const docRef = doc(db, 'questions', 'questions');
      const backupRef = collection(db, 'questionsBackup');
      const timestamp = new Date().toISOString();
      try {
        await setDoc(docRef, {questions: updatedQuestions});
        await addDoc(backupRef, {questions: updatedQuestions, timestamp});
        toast.success('Question updated successfully');
      } catch (error) {
        toast.error('Failed to update question');
        console.error('Error updating question: ', error);
      }
      setQuestions(updatedQuestions);
      setCurrentQuestion(null);
      setIsEditing(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    if (currentQuestion) {
      const {name, value} = e.target;
      const [field, subfield] = name.split('.');
      if (subfield) {
        setCurrentQuestion({
          ...currentQuestion,
          [field as string]: {
            ...currentQuestion[field as keyof QuestionItem],
            [subfield]: value,
          },
        });
      } else {
        setCurrentQuestion({
          ...currentQuestion,
          [name]: value,
        });
      }
    }
  };

  const moveQuestion = async (index: number, direction: 'up' | 'down') => {
    let newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= questions.length) return;
    const updatedQuestions = [...questions];
    const [movedQuestion] = updatedQuestions.splice(index, 1);
    updatedQuestions.splice(newIndex, 0, movedQuestion);
    const docRef = doc(db, 'questions', 'questions');
    const backupRef = collection(db, 'questionsBackup');
    const timestamp = new Date().toISOString();
    try {
      await setDoc(docRef, {questions: updatedQuestions});
      await addDoc(backupRef, {questions: updatedQuestions, timestamp});
      toast.success('Question updated successfully');
    } catch (error) {
      toast.error('Failed to update question');
      console.error('Error updating question: ', error);
    }
    setQuestions(updatedQuestions);
  };

  const loadBackups = async () => {
    const backupRef = collection(db, 'questionsBackup');
    const q = query(backupRef, orderBy('timestamp', 'desc'));
    try {
      const querySnapshot = await getDocs(q);
      const backupData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp,
      }));
      // @ts-expect-error
      setBackups(backupData);
    } catch (error) {
      toast.error('Failed to load backups');
      console.error('Error loading backups:', error);
    }
  };

  const handleRestore = async (backup: {
    questions: QuestionItem[];
    timestamp: string;
  }) => {
    try {
      const docRef = doc(db, 'questions', 'questions');
      await setDoc(docRef, {questions: backup.questions});
      setQuestions(backup.questions);
      toast.success('Questions restored from backup');
    } catch (error) {
      toast.error('Failed to restore questions from backup');
      console.error('Error restoring questions from backup:', error);
    }
  };

  const handleRestoreClick = () => {
    loadBackups();
    setIsBackupModalOpen(true);
  };

  const handleCleanOldBackups = (
    cleanedBackups: {
      id: string;
      timestamp: string;
      questions: QuestionItem[];
    }[],
  ) => {
    setBackups(cleanedBackups);
  };

  return (
    <div className='m-4 bg-gradient-to-br rounded-xl from-slate-700 to-bf-brand-primary/50 p-4'>
      {!currentQuestion && (
        <>
          <div className='flex justify-center gap-4 p-4 items-center w-full'>
            <div className='flex justify-start w-full'>
              <h1 className='text-2xl font-bold text-white mb-4'>
                Admin Panel
              </h1>
            </div>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-xl'
              onClick={handleAdd}>
              {language === 'en' ? 'Add Question' : 'Lisää kysymys'}
            </button>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold p-4 rounded-xl'
              onClick={handleRestoreClick}>
              {language === 'en' ? 'Restore Backup' : 'Palauta varmuuskopio'}
            </button>
            {/* <InsertMockData /> */}
          </div>
          <QuestionsFlow
            questions={questions}
            language={language}
            handleEdit={handleEdit}
            moveQuestion={moveQuestion}
          />
        </>
      )}
      {currentQuestion && (
        <QuestionForm
          question={currentQuestion}
          handleChange={handleChange}
          handleCancel={handleCancel}
          handleSave={handleSave}
          isEditing={isEditing}
        />
      )}
      <BackupModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        backups={backups}
        onRestore={handleRestore}
        onCleanOldBackups={handleCleanOldBackups}
        language={language}
      />
    </div>
  );
};

export default AdminPanel;
