import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  splash: undefined,
  get_started: undefined,
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
