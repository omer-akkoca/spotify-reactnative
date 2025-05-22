import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ISong } from "./models/song";

export type RootStackParamList = {
  splash: undefined,
  get_started: undefined,
  choose_mode: undefined,
  sign_up_or_sign_in: undefined,
  sign_up: undefined,
  sign_in: undefined,
  root: undefined,
  home: undefined,
  song_player: { song: ISong },
  profile: undefined
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
