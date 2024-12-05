import questions from '@/data/questions';
import {db} from '@/utils/firebase';
import {collection, doc, setDoc} from 'firebase/firestore';
import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * InsertMockData component that inserts mock data into Firestore.
 *
 * @returns {JSX.Element} The rendered InsertMockData component.
 */
const InsertMockData: React.FC = () => {
  /**
   * Inserts mock data into Firestore after user confirmation.
   */
  const insertData = async () => {
    if (
      !window.confirm(
        'Are you sure you want to overwrite the questions data? This will overwrite existing data.',
      )
    ) {
      return;
    }

    const questionsCollectionRef = collection(db, 'questions');
    const questionsDocRef = doc(questionsCollectionRef, 'questions');

    try {
      // Overwrite the existing document with the new questions data
      await setDoc(questionsDocRef, {questions});
      toast.success(
        'Data successfully inserted into Firestore with ID: questions',
      );
    } catch (error) {
      toast.error('Error inserting data into Firestore');
      console.error('Error inserting data into Firestore:', error);
    }
  };

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700  text-white font-bold p-4 rounded-xl'
      onClick={insertData}>
      Insert questions Data
    </button>
  );
};

export default InsertMockData;
