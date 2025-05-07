import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const abh = 50; // app bar height

const W = (x: number) => width * x / 100;
const H = (x: number) => height * x / 100

export { width, height, W, H, abh, }