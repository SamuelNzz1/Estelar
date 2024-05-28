import { query, collection, orderBy, limit, onSnapshot, QuerySnapshot, DocumentData, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
 // ajuste o caminho conforme necessário

interface User {
  id: string;
  name: string;
  nivelJ: number;
  stars: number;
  profileImage: string;
}

const useUserRanking = () => {
  const [ranking, setRanking] = useState<User[]>([]);
  const firestore = getFirestore();

  useEffect(() => {
    const q = query(
      collection(firestore, 'users'),
      orderBy('stars', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const rankingArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as User[];
      setRanking(rankingArray);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return ranking;
};

export default useUserRanking;
