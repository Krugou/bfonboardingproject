import questions from '@/data/mockdata';
import {db} from '@/utils/firebase';
import {collection, doc, getDoc, setDoc} from 'firebase/firestore';
import React from 'react';
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InsertMockData: React.FC = () => {
  const insertData = async () => {
    const questionsCollectionRef = collection(db, 'questions');
    const questionsDocRef = doc(questionsCollectionRef, 'questions');

    try {
      const docSnap = await getDoc(questionsDocRef);

      if (docSnap.exists()) {
        toast.info('Document already exists in Firestore');
      } else {
        // Create a new document with the ID 'questions'
        await setDoc(questionsDocRef, {questions});
        toast.success(
          'Data successfully inserted into Firestore with ID: questions',
        );
      }
    } catch (error) {
      toast.error('Error inserting data into Firestore');
      console.error('Error inserting data into Firestore:', error);
    }
  };

  return (
    <div className='p-4'>
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
        theme='light'
        transition={Bounce}
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={insertData}>
        Insert Mock Data
      </button>
    </div>
  );
};

export default InsertMockData;
