import { getAuth, createUserWithEmailAndPassword, FirebaseAuthTypes, signInWithEmailAndPassword, signOut as firebaseSignOut } from '@react-native-firebase/auth';
import { ISignInReq, ISignUpReq } from '../types';
import { collection, doc, getFirestore, setDoc } from '@react-native-firebase/firestore';

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
        await setDoc(docRef, { name: fullName, email: email });
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