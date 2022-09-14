import React, { useState, useEffect, useContext }from 'react';
import AuthStack from './auth/AuthNav';
import HomeStack from './home/HomeNav';
import AppContext from '../contexts/AppContext';
import { refreshTokens, createConfig, isAuthenticated} from '@okta/okta-react-native';
import { OktaConfig } from '../constants/OktaConfig';

export default function AppNavigator(props) {
    const appContext = useContext(AppContext);
    
    useEffect(() => {
      checkAndRefreshToken();
    }, []);

    const checkAndRefreshToken = async() => {
      await createConfig(OktaConfig);
      const result = await isAuthenticated();
      if (!result.authenticated) return;
      let newRefreshToken = await refreshTokens().catch(e => {console.log(e);});
      console.log(newRefreshToken);
      if (newRefreshToken) {
        appContext.setSignIn(true);
      }
    }
  
    if (appContext.authState) {
      return <HomeStack />;
    } else {
      return <AuthStack />;
    }
}