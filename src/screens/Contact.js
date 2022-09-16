
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../styles/Style';
import AppContext from '../contexts/AppContext';

export default function ContactScreen(props) {    
    const appContext = useContext(AppContext);

    useEffect(() => {
        
    },[]);

    actionLogout = async() => {        
        
    }

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={[styles.flexView, styles.marginNormal]}>
                <Text style={{textAlign:'center', fontSize: 25}}>HomeScreen</Text>
            </View>
            <TouchableOpacity style={{marginTop:20}}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Logout</Text>
                </View>
            </TouchableOpacity>             
        </View>        
      </KeyboardAvoidingView>
    );
}
