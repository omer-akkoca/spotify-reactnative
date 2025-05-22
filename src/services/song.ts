import { collection, getDocs, getFirestore, orderBy, query, limit, Timestamp, addDoc, where, getDoc, doc, } from "@react-native-firebase/firestore"
import { IFavoriteSong, ISong } from "../types"

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

export const fetchFavoriteSongs = async ({ userId }: { userId: string }): Promise<IFavoriteSong[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "users", userId, "favorites")
        const snapshot = await getDocs(colRef)
        const data = snapshot.docs.map((doc) => {
            return { ...doc.data() } as IFavoriteSong
        })
        return data;
    } catch (error) {
        console.error('Error fetching favorite songs:', error);
        throw error;
    }
}

export const addFavoriteSong = async (userId: string, songId: string): Promise<IFavoriteSong> => {
    try {

        const db = getFirestore()
        const colRef = collection(db, "users", userId, "favorites")
        const data: IFavoriteSong = { songId: songId, addedDate: Timestamp.now() }
        await addDoc(colRef, data)
        return data;
    } catch (error) {
        console.error('Error fetching in add favorite song:', error);
        throw error;
    }
}

export const removeFavoriteSong = async (userId: string, songId: string) => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "users", userId, "favorites")
        const whereRef = where("songId", "==", songId)
        const queryRef = query(colRef, whereRef)
        const docRef = (await queryRef.get()).docs[0].ref
        await docRef.delete()
    } catch (error) {
        console.error('Error fetching in add favorite song:', error);
        throw error;
    }
}

export const fetchFavoriteSongWithDetails = async (favoriteSongs: IFavoriteSong[]): Promise<ISong[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "songs")
        const promises = favoriteSongs.map(e => getDoc(doc(colRef, e.songId)));
        const docSnapshots = await Promise.all(promises);
        const data = docSnapshots
            .filter(docSnap => docSnap.exists())
            .map(docSnap => ({ id: docSnap.id, ...docSnap.data() }) as ISong);

        return data;
    } catch (error) {
        console.error('Error fetching play list:', error);
        throw error;
    }
}