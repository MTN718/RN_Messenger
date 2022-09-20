import React, { useState, useEffect }from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header(props) {    
    const [isSearchMode, setSearchMode] = useState(false);
    const [hasSearch, setSearch] = useState(props.hasSearch == undefined ? true : props.hasSearch)

    useEffect(() => {
        
    },[]);

    const onClickSearch = () => {
        setSearchMode(true);
    }

    const onFinishSearch = () => {
        setSearchMode(false);
    }

    return (
        <View style={[styles.container]}>
            {
            !isSearchMode ?
            <>
                <Text style={styles.title}>{props.title}</Text>
                {
                    hasSearch &&
                    <TouchableOpacity style={styles.search} onPress={() => onClickSearch()}>
                        <Icon name="search" size={20} color={"#fff"} />
                    </TouchableOpacity>
                }
            </>
            :
            <>        
                <TextInput style={styles.searchInput}/>
                {
                    hasSearch &&
                    <TouchableOpacity style={styles.searchBack} onPress={() => onFinishSearch()}>
                        <Icon name="arrow-left" size={20} color={"#fff"} />
                    </TouchableOpacity>  
                }
            </>
            }
        </View>
    )
}
