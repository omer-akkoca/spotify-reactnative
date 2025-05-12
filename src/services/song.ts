import { collection, getDocs, getFirestore, orderBy, query, limit } from "@react-native-firebase/firestore"
import { ISong } from "../types"

export const fetchNewsSongs = async (): Promise<ISong[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "songs")
        const orderRef = orderBy("releaseDate", "desc")
        const songLimit = limit(3)
        const songsQuery = query(colRef, orderRef, songLimit);
        const snapshot = await getDocs(songsQuery)
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as ISong
        })
        return data;
    } catch (error) {
        console.error('Error fetching news songs:', error);
        throw error;
    }
}

export const fetchPlayList = async (): Promise<ISong[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "songs")
        const orderRef = orderBy("releaseDate", "asc")
        const songsQuery = query(colRef, orderRef);
        const snapshot = await getDocs(songsQuery)
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as ISong
        })
        return data;
    } catch (error) {
        console.error('Error fetching play list:', error);
        throw error;
    }
}