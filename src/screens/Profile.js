
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../styles/Style';
import AppContext from '../contexts/AppContext';

export default function ProfileScreen(props) {    
    const appContext = useContext(AppContext);

    useEffect(() => {
        
    },[]);

    actionLogout = async() => {        
        
    }

    return (
        <View style={[styles.whiteBG]}>
            <View style={{alignItems: 'center', marginTop: 40, marginBottom: 20}}>
                <Image
                    style={styles.profileImg}
                    source={require('../assets/photo/2.png')}
                />                
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.profileField}>Display Name</Text>
                <Text style={styles.profileValue}>Zeni Yoda Ataishi</Text>
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.profileField}>Telephone</Text>
                <Text style={styles.profileValue}>+55 61 99999-999</Text>
            </View>
        </View>
    );
}
