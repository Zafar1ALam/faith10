/**
 * @format
 */

import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';
import configureStore from './redux/store/configureStore';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


const store = configureStore()

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
