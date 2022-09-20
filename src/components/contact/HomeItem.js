import React, { useState, useEffect }from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeItem(props) {
    const [item, setItem] = useState(props.data.item);

    useEffect(() => {
        setItem(props.data.item);
    },[props.data]);

    return (
        <View style={[styles.itemContainer]}>
            <Image 
                style={styles.profileImg}
                source={item.image}
            />
            <View style={styles.nameContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <Text numberOfLines={1} style={styles.message}>{item.message}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.date}>12.35 AM</Text>
                {
                    item.unread > 0 ? 
                    <View style={styles.unreadText}>
                        <Text style={{textAlign: 'center', color: '#fff'}}>{item.unread}</Text>
                    </View>
                    :
                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                        <Icon name="check" style={{fontWeight: '200'}} size={14} color={ item.isOnline ? "#40c3d6" : "#bcbcbc"} />
                        <Icon name="check" style={{marginLeft: -8, fontWeight: '200'}} size={14} color={ item.isOnline ? "#40c3d6" : "#bcbcbc"} />
                    </View>
                }
                
            </View>
        </View>
    )
}
