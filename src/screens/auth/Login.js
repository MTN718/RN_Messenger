import React, { useEffect, useContext, useState } from 'react';
import {KeyboardAvoidingView,View,Text,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../../styles/Style';
import { serviceVerifyToken } from '../../services/auth/Auth';


import AppContext from '../../contexts/AppContext';

export default function LoginScreen(props) {

    const appContext = useContext(AppContext);

    useEffect(() => {        
        
    }, []);

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={[styles.flexView, styles.marginNormal]}>
                
            </View>
            <TouchableOpacity style={{marginTop:20}}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Login</Text>
                </View>
            </TouchableOpacity>             
        </View>        
      </KeyboardAvoidingView>
    );
}
