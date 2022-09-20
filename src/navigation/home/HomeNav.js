import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from '../../screens/Home';
import ContactScreen from '../../screens/Contact';
import ProfileScreen from '../../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header/Header';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  const onSearch = () => {

  }

  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            title: 'Messenger',  
            header: (props) => (
              <Header title="Messenger"/>
            ),            
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 12, color: focused ? '#ff69b9' : '#9baeb5'}}>Chats</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (              
              <Icon name="comments" size={24} color={ focused ? "#ff69b9" : "#9baeb5"} />
            ),
          }}          
        />
        <Tab.Screen name="Contact" component={ContactScreen}         
          options={{
            title: 'Contact',  
            header: (props) => (
              <Header title="Contact"/>
            ),            
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 12, color: focused ? '#ff69b9' : '#9baeb5'}}>Contacts</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (              
              <Icon name="users" size={24} color={ focused ? "#ff69b9" : "#9baeb5"} />
            ),
          }}  
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            title: 'Profile',  
            header: (props) => (
              <Header title="Profile" hasSearch={false}/>
            ),            
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 12, color: focused ? '#ff69b9' : '#9baeb5'}}>Profile</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (              
              <Icon name="user" size={24} color={ focused ? "#ff69b9" : "#9baeb5"} />
            ),
          }}  
        />
    </Tab.Navigator>    
  );
}