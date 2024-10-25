import {UserProvider} from '@/context/UserContext';
import {db} from '@/utils/firebase';
import {doc, onSnapshot, setDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Bounce, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Question {
  id: string;
  question: {
    en: string;
    fi: string;
  };
  answerType: string;
  options?: string[];
  condition?: string;
  errorAnswer?: {
    en: string;
    fi: string;
  };
  syntaxPlaceholder?: {
    en: string;
    fi: string;
  };
  targetAudience?: string;
  tooltip?: {
    en: string;
    fi: string;
  };
}

const AdminPanel: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fi'>('en');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const docRef = doc(db, 'questions', 'questions');

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const questionsData: Question[] = data.questions.map(
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

  const handleEdit = (question: Question) => {
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
            ...editingQuestion[field as keyof Question],
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
          Toggle Language
        </button>
        {!editingQuestion && (
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
              <thead>
                <tr>
                  <th className='py-2'>Index</th>
                  <th className='py-2'>ID</th>
                  <th className='py-2'>Question</th>
                  <th className='py-2'>Options</th>
                  <th className='py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question, index) => (
                  <tr key={question.id}>
                    <td className='border px-4 py-2'>{index + 1}</td>
                    <td className='border px-4 py-2'>{question.id}</td>
                    <td className='border px-4 py-2'>
                      {question.question[language]}
                    </td>
                    <td className='border px-4 py-2'>
                      {question.options ? question.options.join(', ') : 'N/A'}
                    </td>
                    <td className='border px-4 py-2'>
                      <button
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
                        onClick={() => handleEdit(question)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {editingQuestion && (
          <div className='mt-4'>
            <h2 className='text-xl font-bold mb-2'>Edit Question</h2>
            <div className='mb-2'>
              <label className='block text-gray-700'>Question (EN)</label>
              <textarea
                name='question.en'
                value={editingQuestion.question.en}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Question (FI)</label>
              <textarea
                name='question.fi'
                value={editingQuestion.question.fi}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Answer Type</label>
              <input
                name='answerType'
                value={editingQuestion.answerType}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Options</label>
              <input
                name='options'
                value={
                  editingQuestion.options
                    ? editingQuestion.options.join(', ')
                    : ''
                }
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Condition</label>
              <input
                name='condition'
                value={editingQuestion.condition || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Error Answer (EN)</label>
              <input
                name='errorAnswer.en'
                value={editingQuestion.errorAnswer?.en || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Error Answer (FI)</label>
              <input
                name='errorAnswer.fi'
                value={editingQuestion.errorAnswer?.fi || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>
                Syntax Placeholder (EN)
              </label>
              <input
                name='syntaxPlaceholder.en'
                value={editingQuestion.syntaxPlaceholder?.en || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>
                Syntax Placeholder (FI)
              </label>
              <input
                name='syntaxPlaceholder.fi'
                value={editingQuestion.syntaxPlaceholder?.fi || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Target Audience</label>
              <input
                name='targetAudience'
                value={editingQuestion.targetAudience || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Tooltip (EN)</label>
              <input
                name='tooltip.en'
                value={editingQuestion.tooltip?.en || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block text-gray-700'>Tooltip (FI)</label>
              <input
                name='tooltip.fi'
                value={editingQuestion.tooltip?.fi || ''}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleSave}>
              Save
            </button>
          </div>
        )}
      </div>
    </UserProvider>
  );
};

export default AdminPanel;
