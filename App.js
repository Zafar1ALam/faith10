
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator, StyleSheet, Text, View, useColorScheme } from "react-native";
import Vedio from './src/screen/Vedio';
import VedioTitleHere from './src/screen/VedioTitleHere';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import COLORS from './src/utilities/colors/Color';
import Wishlist from './src/screen/Wishlist';
import SelectBook from './src/screen/SelectBook';
import SelectChapter from './src/screen/SelectChapter';
import SelectChapterDescription from './src/screen/SelectChapterDescription';
import Live from './src/screen/Live';
import Notes from './src/screen/Notes';
import TabNavigation1 from './src/route/TabNavigation1';

const Stack = createNativeStackNavigator();
const App = props => {
  const CustomDarkTheme = {

    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: COLORS.black000000,
      text: COLORS.whiteFFFFFF,
      //border: COLORS.black000000_20,
      boder: '#707070',// COLORS.grey707070,
      surface: COLORS.black000000,
      placeholder: COLORS.whiteFFFFFF,
      // onSurface: COLORS.black000000,
      backdrop: COLORS.black000000
    },
  };
  return (
    <PaperProvider theme={CustomDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'TabNavigation1'}
        >
          {/* <Stack.Screen name="SelectBook" component={SelectBook} options={{
            headerShown: false,
          }} /> */}
          <Stack.Screen name="TabNavigation1" component={TabNavigation1} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SelectChapter" component={SelectChapter} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SelectChapterDescription" component={SelectChapterDescription} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="VedioTitleHere" component={VedioTitleHere} options={{
            headerShown: false,
          }} />
          {/* <Stack.Screen name="Notes" component={Notes} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Live" component={Live} options={{
            headerShown: false,
          }} />
          
        
          <Stack.Screen name="Vedio" component={Vedio} options={{
            headerShown: false,
          }} />
         
          <Stack.Screen name="Wishlist" component={Wishlist} options={{
            headerShown: false,
          }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

App.propTypes = {

};

export default App;