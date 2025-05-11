import { getFirestore, collection, getDocs, FirebaseFirestoreTypes, addDoc } from '@react-native-firebase/firestore';

export const addDocument = async (data: any) => {
    try {
        const db = getFirestore()
        const collectionRef = collection(db, "users")
        await addDoc(collectionRef, data);
    } catch (error) {
        console.error('Error adding document:', error);
        throw error;
    }
}

export const fetchCollection = async <T>(collectionName: string): Promise<T[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, collectionName)
        const snapshot = await getDocs(colRef)
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as T
        })
        return data;
    } catch (error) {
        console.error('Error fetching collection:', error);
        throw error;
    }
}