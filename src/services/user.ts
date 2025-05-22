import { collection, doc, getDoc, getFirestore } from "@react-native-firebase/firestore"
import { IUser } from "../types"

export const fetchUserDetails = async (userId: string): Promise<IUser> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, "users")
        const docRef = doc(colRef, userId)
        const docSnap = await getDoc(docRef)
        const docData = docSnap.data()
        const docId = docSnap.id
        const user: IUser = { id: docId, ...docData } as IUser; 
        return user;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
}