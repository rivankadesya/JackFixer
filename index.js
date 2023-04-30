/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routing from './src/Routing'
import App from './App';

AppRegistry.registerComponent(appName, () => Routing);
