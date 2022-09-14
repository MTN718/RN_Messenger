
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import {serviceUpdateUser} from '../../services/user/User'
import styles from '../../styles/Style';
import AppContext from '../../contexts/AppContext';
import { getAccessToken } from '@okta/okta-react-native';

export default function RegisterScreen(props) {    
    const appContext = useContext(AppContext);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        
    },[]);

    actionSubmit = () => {
        serviceUpdateUser(userName, (res) => {
            appContext.setSignIn(true);   
        });
    }

    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={styles.mainContainer}>
            <View style={[styles.flexView, styles.marginNormal]}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput 
                    style={styles.inputView}
                    value={userName} 
                    onChangeText={text => setUserName(text)}></TextInput>
            </View>
            <TouchableOpacity style={{marginTop:20}} onPress={() => actionSubmit()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Submit</Text>
                </View>
            </TouchableOpacity>             
        </View>        
      </KeyboardAvoidingView>
    );
}
