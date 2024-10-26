import {QuestionItem} from '@/app/types';
import {UserProvider} from '@/context/UserContext';
import {db} from '@/utils/firebase';
import {doc, onSnapshot, setDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Bounce, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditQuestionForm from './AdminPanel/EditQuestionForm';
import QuestionsTable from './AdminPanel/QuestionsTable';

const AdminPanel: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [language, setLanguage] = useState<'en' | 'fi'>('en');
  const [editingQuestion, setEditingQuestion] = useState<QuestionItem | null>(
    null,
  );

  useEffect(() => {
    const docRef = doc(db, 'questions', 'questions');

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const questionsData: QuestionItem[] = data.questions.map(
            (q: any, index: number) => ({
              id: index.toString(),
              ...q,
            }),
          );
          setQuestions(questionsData);
        } else {
          toast.error('No such document!');
        }
      },
      (error) => {
        toast.error('Failed to fetch questions');
        console.error('Error fetching questions: ', error);
      },
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fi' : 'en'));
  };

  const handleEdit = (question: QuestionItem) => {
    setEditingQuestion(question);
  };

  const handleSave = async () => {
    if (editingQuestion) {
      const updatedQuestions = questions.map((q) =>
        q.id === editingQuestion.id ? editingQuestion : q,
      );
      const docRef = doc(db, 'questions', 'questions');
      try {
        await setDoc(docRef, {questions: updatedQuestions});
        toast.success('Question updated successfully');
        setEditingQuestion(null);
      } catch (error) {
        toast.error('Failed to update question');
        console.error('Error updating question: ', error);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (editingQuestion) {
      const {name, value} = e.target;
      const [field, subfield] = name.split('.');
      if (subfield) {
        setEditingQuestion({
          ...editingQuestion,
          [field]: {
            //@ts-ignore
            ...editingQuestion[field as keyof QuestionItem],
            [subfield]: value,
          },
        });
      } else {
        setEditingQuestion({
          ...editingQuestion,
          [name]: value,
        });
      }
    }
  };
  let isDarkmode = false;

  return (
    <UserProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkmode ? 'dark' : 'light'}
        transition={Bounce}
      />
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
          onClick={toggleLanguage}>
          {language === 'en' ? 'Switch to Finnish' : 'Switch to English'}
        </button>
        {!editingQuestion && (
          <QuestionsTable
            questions={questions}
            language={language}
            handleEdit={handleEdit}
          />
        )}
        {editingQuestion && (
          <EditQuestionForm
            editingQuestion={editingQuestion}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
      </div>
    </UserProvider>
  );
};

export default AdminPanel;
