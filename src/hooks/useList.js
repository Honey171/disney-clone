import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useList(uid) {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!uid) return;

    return onSnapshot(
      collection(db, 'customers', uid, 'myList'),
      (snapshot) => {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        );
      },
    );
  }, [db, uid]);

  return list;
}

export default useList;
