import {AppRegistry} from 'react-native';
import App from './app.tsx';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import trackPlayerService from "./track-player-service.js"

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => trackPlayerService);