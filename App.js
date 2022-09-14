import React, {Component, useState} from 'react';
import AppNavigator from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './src/contexts/AppContext';
import AppContextProvider from './src/providers/AppContextProvider';

const App = () => {

  const [isSignIn, setSignIn] = useState(false);
  const appContextProvider = AppContextProvider(isSignIn, setSignIn);

  return (
    <AppContext.Provider value={appContextProvider}>
      <NavigationContainer>
        <AppNavigator/>      
      </NavigationContainer>
    </AppContext.Provider>
  );
};
export default App;