/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRoutes from './src/routes/AppRoutes';

AppRegistry.registerComponent(appName, () => AppRoutes);
