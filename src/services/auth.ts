import { getAuth, createUserWithEmailAndPassword, FirebaseAuthTypes, signInWithEmailAndPassword, signOut as firebaseSignOut } from '@react-native-firebase/auth';
import { ISignInReq, ISignUpReq, IUser } from '../types';
import { collection, doc, getFirestore, setDoc, Timestamp } from '@react-native-firebase/firestore';

const defaultUserAvatarURL = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";

export const signUp = async (signUpReq: ISignUpReq): Promise<FirebaseAuthTypes.User | null> => {
    try {
        const db = getFirestore()
        const { fullName, email, password } = signUpReq
        const userCredential = await createUserWithEmailAndPassword(
            getAuth(),
            email,
            password,
        )
        const collectionRef = collection(db, "users")
        const docRef = doc(collectionRef, userCredential.user.uid)
        const user: IUser = {
            id: userCredential.user.uid,
            name: fullName,
            email: email,
            photoURL: defaultUserAvatarURL,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
        }
        await setDoc(docRef, user);
        return userCredential.user;
    } catch (error: any) {
        switch (error.code) {
            case "auth/email-already-in-use":
                console.log('That email address is already in use!');
                break;
            case "auth/invalid-email":
                console.log('That email address is invalid!');
            default:
                console.error(error);
                break;
        }
        return null;
    }
}

export const signIn = async (signInReq: ISignInReq): Promise<FirebaseAuthTypes.User | null> => {
    try {
        const { email, password } = signInReq
        const userCredential = await signInWithEmailAndPassword(
            getAuth(),
            email,
            password,
        );
        return userCredential.user;
    } catch (error: any) {
        switch (error.code) {
            case "auth/user-not-found":
                console.log('There is no user corresponding to the given email!');
                break;
            case "auth/wrong-password":
                console.log('The password is invalid or the user does not have a password!');
            default:
                console.error(error);
                break;
        }
        return null;
    }
}

export const signOut = async () => {
    await firebaseSignOut(getAuth())
}