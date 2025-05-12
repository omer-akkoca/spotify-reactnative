import { Timestamp } from "@react-native-firebase/firestore";

export interface ISong{
    id: string,
    title: string,
    artist: string,
    duration: number,
    releaseDate: Timestamp,
    song: string,
    cover: string,
}