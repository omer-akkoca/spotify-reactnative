import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  splash: undefined,
  get_started: undefined,
  choose_mode: undefined,
  sign_up_or_sign_in: undefined,
  sign_up: undefined,
  sign_in: undefined,
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
