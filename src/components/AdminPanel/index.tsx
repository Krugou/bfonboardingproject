import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import {db} from '@/utils/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import React, {useState} from 'react';
import {Bounce, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InsertMockData from '@/components/InsertMockData';
import QuestionForm from './QuestionForm';
import QuestionsFlow from './QuestionsFlow';
const AdminPanel: React.FC = () => {
  const {questions, setQuestions, userInfo, language} = useUserContext();
  const [currentQuestion, setCurrentQuestion] = useState<QuestionItem | null>(
    null,
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = () => {
    const newQuestion: QuestionItem = {
      id: '',
      question: {en: '', fi: ''},
      conditions: [],
      tooltip: {en: '', fi: ''},
      syntaxPlaceholder: {en: '', fi: ''},
      answerType: '',
      errorAnswer: {en: '', fi: ''},
      answerOptions: [], // Optional, can be omitted if not needed
      maxLength: 0, // Optional, can be omitted if not needed
      validationRegex: {en: '', fi: ''}, // Optional, can be omitted if not needed
      specialCondition: {}, // Optional, can be omitted if not needed
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
          [field]: {
            // @ts-ignore
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
  const handleRestore = async () => {
    if (
      !window.confirm(
        'Are you sure you want to restore the questions from the latest backup?',
      )
    ) {
      return;
    }
    const backupRef = collection(db, 'questionsBackup');
    const q = query(backupRef, orderBy('timestamp', 'desc'));
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const latestBackup = querySnapshot.docs[0].data();
        setQuestions(latestBackup.questions);
        const docRef = doc(db, 'questions', 'questions');
        await setDoc(docRef, {questions: latestBackup.questions});
        toast.success('Questions restored from backup');
      } else {
        toast.error('No backup found');
      }
    } catch (error) {
      toast.error('Failed to restore questions from backup');
      console.error('Error restoring questions from backup: ', error);
    }
  };
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text center mb-4'>Admin Panel</h1>
      {!currentQuestion && (
        <>
          <QuestionsFlow
            questions={questions}
            language={language}
            handleEdit={handleEdit}
            moveQuestion={moveQuestion}
          />
          <div className='flex justify-center gap-4 m-2 items-center'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded '
              onClick={handleAdd}>
              {language === 'en' ? 'Add Question' : 'Lisää kysymys'}
            </button>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold p-4 rounded '
              onClick={handleRestore}>
              {language === 'en' ? 'Restore Backup' : 'Palauta varmuuskopio'}
            </button>
            {userInfo &&
              process.env.NODE_ENV === 'development' &&
              userInfo.email === 'krugou@gmail.com' && <InsertMockData />}
          </div>
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
    </div>
  );
};

export default AdminPanel;
