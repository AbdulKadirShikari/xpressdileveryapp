import React from 'react'
import 'react-native-gesture-handler';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../global/styles'
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import { ClientStack } from './clientStack';



const Tabs = createBottomTabNavigator();
 
export default function ClientTabs ()
{
    return (
        <Tabs.Navigator
            
           >
            <Tabs.Screen
                
                name='HomeScreen'
                
                component={HomeScreen}
                  options={
                      {  
                        headerShown:false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) =>
                        (
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                         
 }
                     }
                
            />
            <Tabs.Screen
                name='SearchScreen'
                component={ClientStack}
                options={
                    {   
                         headerShown:false,
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) =>
                        (
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        
 }
                     }
                
            />
            <Tabs.Screen
                name='MyOrdersScreen'
                component={MyOrdersScreen}
                  options={
                      {   
                         headerShown:false,
                        tabBarLabel: 'My Orders',
                        tabBarIcon: ({ color, size }) =>
                        (
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        
 }
                     }
            />
            <Tabs.Screen
                name='MyAccountScreen'
                component={MyAccountScreen}
                  options={
                      {   
                         headerShown:false,
                        tabBarLabel: 'My Account',
                        tabBarIcon: ({ color, size }) =>
                        (
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        
 }
                     }
                />
        </Tabs.Navigator>
    )
}