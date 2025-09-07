import {
  collection,
  query,
  onSnapshot,
  QueryConstraint,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";

const useFetchData = <T>(
  collectionName: string,
  constraints: QueryConstraint[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!collectionName) return;

    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...constraints);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(fetchedData);
      },
      (err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    );

    return () => unsubscribe();
  }, []);
  //   }, [collectionName, constraints]);

  return { data, error };
};

export default useFetchData;
