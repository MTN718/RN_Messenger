import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import ContactScreen from '../../screens/Contact';
import ProfileScreen from '../../screens/Profile';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>    
  );
}