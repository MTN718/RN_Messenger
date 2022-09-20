
import React, { useState, useEffect, useContext }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity, FlatList} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../styles/Style';
import AppContext from '../contexts/AppContext';
import { AlphabetList } from "react-native-section-alphabet-list";
import ContactItem from "../components/contact/ContactItem"


export default function ContactScreen(props) {    
    const appContext = useContext(AppContext);

    const DATA = [
        {            
          id: "1",
          value: "John Doo",
          key: "JohnDoo",
          phone: "+44123123123",
          image: require('../assets/photo/1.jpg')
        },
        {
            id: "2",
            value: "Maria Silva",
            key: "MariaSilva",
            phone: "+54123123123",
            image: require('../assets/photo/2.png')
        },
        {
            id: "3",
            value: "Arthur Essbien Rullof",
            key: "Arthur",
            phone: "+234135235",
            image: require('../assets/photo/1.jpg')
        },
        {
            id: "4",
            value: "Maria Silva",
            key: "MariaSilva",
            phone: "+45212313",
            image: require('../assets/photo/2.png')
        },
        {
            id: "5",
            value: "Aron Ramsy",
            key: "AronRamsy",
            phone: "+45212313",
            image: require('../assets/photo/1.jpg')
        },
    ];

    useEffect(() => {
        
    },[]);

    renderContact = (item) => {        
        return (
            <ContactItem
                item={item}                            
            />
        );
    }

    return (
      <View style={[styles.whiteBG]}>
        <AlphabetList
            data={DATA}            
            renderCustomItem={(item) => renderContact(item)}            
            renderCustomSectionHeader={(section) => (
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                </View>
            )}
        />        
      </View>
    );
}
