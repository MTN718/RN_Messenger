import React, { useState, useEffect, useContext }from 'react';
import AuthStack from './auth/AuthNav';
import HomeStack from './home/HomeNav';
import AppContext from '../contexts/AppContext';

export default function AppNavigator(props) {
    const appContext = useContext(AppContext);
    
    useEffect(() => {
      
    }, []);
  
    if (appContext.authState) {
      return <HomeStack />;
    } else {
      return <AuthStack />;
    }
}