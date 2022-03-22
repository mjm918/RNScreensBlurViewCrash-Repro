/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppCrash from "./AppCrash";

AppRegistry.registerComponent(appName, () => AppCrash);
