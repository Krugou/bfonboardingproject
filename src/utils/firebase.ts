import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getFunctions, httpsCallable} from 'firebase/functions';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import firebaseConfig from '../../config/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const functions = getFunctions(app);

if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  console.log(
    'Firebase is working: ' + process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  );
}

/**
 * Utility function to upload a file to Firebase Storage.
 * @param {File} file - The file to upload.
 * @param {string} path - The storage path.
 * @returns {Promise<string>} - The download URL of the uploaded file.
 */
const uploadFile = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

/**
 * Utility function to call a Firebase Cloud Function.
 * @param {string} name - The name of the function.
 * @param {any} data - The data to pass to the function.
 * @returns {Promise<any>} - The result of the function call.
 */
const callFunction = async (name: string, data: any): Promise<any> => {
  const functionRef = httpsCallable(functions, name);
  const result = await functionRef(data);
  return result.data;
};

export {app, auth, callFunction, db, functions, storage, uploadFile};
