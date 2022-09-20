import React, { useState, useEffect }from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactItem(props) {
    const [item, setItem] = useState(props.item);

    useEffect(() => {
        setItem(props.item);
    },[props.item]);

    return (
        <View style={[styles.itemContainer]}>
            <Image 
                style={styles.profileImg}
                source={item.image}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{item.value}</Text>
                <Text numberOfLines={1} style={styles.message}>{item.phone}</Text>
            </View>            
        </View>
    )
}
