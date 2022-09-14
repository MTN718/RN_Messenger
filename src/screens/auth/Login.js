import React, { useEffect, useContext, useState } from 'react';
import {KeyboardAvoidingView,View,Text,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../../styles/Style';
import { serviceVerifyToken } from '../../services/auth/Auth';
import { signInWithBrowser,getAccessToken, EventEmitter, createConfig} from '@okta/okta-react-native';


import AppContext from '../../contexts/AppContext';

export default function LoginScreen(props) {

    const appContext = useContext(AppContext);

    useEffect(() => {        
        
    }, []);
    
    verifyToken = () => {
        serviceVerifyToken((res) => {
            if (res.isFirstLogin) {
                props.navigation.navigate('Register');
            }
            else {
                appContext.setSignIn(true);
            }
        })        
    }

    actionLogin = () => {    
        signInWithBrowser()
        .then(res => {
            console.log(res);
            verifyToken();
        });
    }

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={[styles.flexView, styles.marginNormal]}>
                
            </View>
            <TouchableOpacity style={{marginTop:20}} onPress={() => actionLogin()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Login</Text>
                </View>
            </TouchableOpacity>             
        </View>        
      </KeyboardAvoidingView>
    );
}
