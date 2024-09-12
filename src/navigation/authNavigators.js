import React from 'react'
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import 'react-native-gesture-handler';

import RestaurentsMapScreen from '../screens/RestaurentsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import ClientTabs from './ClientTabs';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen
                name='SignInWelcomeScreen'
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false, 
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Stack.Screen
                name='SignInScreen'
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <Stack.Screen
                name='DrawerNavigator'
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             
            <Stack.Screen
                name='RestaurentsMapScreen'
                component={RestaurentsMapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
               

          
        </Stack.Navigator>
    )
}