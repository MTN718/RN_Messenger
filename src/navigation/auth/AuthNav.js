import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/auth/Welcome';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

    </Stack.Navigator>
  );
}