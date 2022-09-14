
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../styles/Style';
import {getOktaIDToken, clearOktaToken} from '../helpers/OktaHelper'
import AppContext from '../contexts/AppContext';
import {signOut,EventEmitter} from '@okta/okta-react-native';

export default function HomeScreen(props) {    
    const appContext = useContext(AppContext);

    useEffect(() => {
        initOktaListeners();        
    },[]);

    removeOktaListeners = () => {
        EventEmitter.removeAllListeners('signOutSuccess');
    }

    initOktaListeners = () => {
        EventEmitter.addListener('signOutSuccess', function (res) {
            appContext.setSignIn(false);
        });
    }

    actionLogout = async() => {        
        await signOut();        
    }

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={[styles.flexView, styles.marginNormal]}>
                <Text style={{textAlign:'center', fontSize: 25}}>HomeScreen</Text>
            </View>
            <TouchableOpacity style={{marginTop:20}} onPress={() => actionLogout()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Logout</Text>
                </View>
            </TouchableOpacity>             
        </View>        
      </KeyboardAvoidingView>
    );
}
