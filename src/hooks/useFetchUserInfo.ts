import {useUserContext} from '@/context/UserContext';
import {auth, db} from '@/utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {useEffect} from 'react';

const useFetchUserInfo = () => {
  const {setUserInfo} = useUserContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, fetch user info from Firestore
        const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
        if (accountDoc.exists()) {
          const accountData = accountDoc.data();
          setUserInfo({
            email: accountData.email ?? 'default@example.com',
            questionAnswers: accountData.questionAnswers,
            lastLogin: accountData.lastLogin?.toDate(),
            createdAt: accountData.createdAt.toDate(),
          });
        }
      } else {
        // User is signed out, clear user info
        setUserInfo(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [setUserInfo]);
};

export default useFetchUserInfo;
