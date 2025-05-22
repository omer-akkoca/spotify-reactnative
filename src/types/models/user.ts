import { Timestamp } from "@react-native-firebase/firestore";

export interface IUser{
    id: string,
    email: string,
    name: string,
    photoURL: string,
    createdAt: Timestamp,
    updatedAt: Timestamp,
}