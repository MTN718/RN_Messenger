import React, { useEffect, useContext, useState } from 'react';
import {KeyboardAvoidingView,View,Text,TouchableOpacity, TextInput} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../../styles/Style';
import { serviceVerifyToken } from '../../services/auth/Auth';


import AppContext from '../../contexts/AppContext';

export default function WelcomeScreen(props) {

    const appContext = useContext(AppContext);

    useEffect(() => {        
        
    }, []);

    const onClickSignIn = () => {
        appContext.setSignIn(true);
    }

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={{flex: 1}}/>
            <Text style={[styles.welcomeTitle]}>Welcome</Text>
            <Text style={styles.welcomeText}>Log in with the unlock code provided to you by the support team</Text>
            <TextInput 
                multiline={true}
                style={[styles.unlockInput]}
                placeholder="Paste here your unlock code"/>
            <View style={{marginTop:20, marginBottom: 100, alignItems: 'center'}}>
                <TouchableOpacity onPress={() =>  onClickSignIn()}>
                    <View style={[styles.primaryBtn, { width: 200}]}>
                        <Text style={[styles.btnText]}>Sign In</Text>
                    </View>
                </TouchableOpacity>             
            </View>
        </View>        
      </KeyboardAvoidingView>
    );
}
