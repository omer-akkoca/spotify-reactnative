import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  splash: undefined,
  get_started: undefined,
  choose_mode: undefined,
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
