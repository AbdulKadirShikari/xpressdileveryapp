import *as React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import ClientTabs from './ClientTabs'
import { Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator()
 

export default function DrawerNavigator ()
{
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}>

            <Drawer.Screen
                name='ClientTabs'
                component={ClientTabs}
                options={{
                    headerShown:false,
                    title: 'Client',
                    drawerIcon: ({ focused, size }) =>
                    (
                        <Icon
                            type='material-community'
                            name='home'
                            color={focused ? '#7cc' : colors.gray2}
                            size={size}
                        />
                  )
                     
                }}
            />
            <Drawer.Screen
                name='BusinessConsoleScreen'
                component={BusinessConsoleScreen}
                options={{
                    headerShown:false,
                    title: 'Business Console',
                    drawerIcon: ({ focused, size }) =>
                    (
                        <Icon
                            type='material'
                            name='business'
                            color={focused ? '#7cc' : colors.gray2}
                            size={size}
                        />
                  )
                     
                }}
            />
        </Drawer.Navigator>
    )
}