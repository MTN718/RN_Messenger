
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity, FlatList} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../styles/Style';
import AppContext from '../contexts/AppContext';
import ContactItem from '../components/contact/ContactItem'
import HomeItem from '../components/contact/HomeItem';

export default function ChatScreen(props) {    
    const appContext = useContext(AppContext);
    const DATA = [
        {
          id: "1",
          name: "John Doo",
          message: "How about you. Brother? I can't delete this message",
          image: require('../assets/photo/1.jpg'),
          unread: 2,
          isOnline: false
        },
        {
            id: "2",
            name: "Maria Silva",
            message: "Hey I want to see your design brother. Awesome",
            image: require('../assets/photo/2.png'),
            unread: 1,
            isOnline: false
        },
        {
            id: "3",
            name: "Arthur Essbien Rullof",
            message: "Lorem ipsum dokor at arnet",
            image: require('../assets/photo/1.jpg'),
            unread: 0,
            isOnline: true
        },
        {
            id: "4",
            name: "Maria Silva",
            message: "Hey I want to see your design brother. Awesome",
            image: require('../assets/photo/2.png'),
            unread: 0,
            isOnline: false
        },
    ];

    useEffect(() => {
        
    },[]);

    actionLogout = async() => {        
        
    }

    renderContact = (item) => {
        return (
            <HomeItem
                data={item}                            
            />
        );
    }
    return (
      <View style={[styles.whiteBG]}>
        
      </View>
    );
}
