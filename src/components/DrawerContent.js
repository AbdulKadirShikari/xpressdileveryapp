import React, { useState, useContext, useEffect } from "react";
import
    {
        View,
        Text,
        Linking,
        Pressable,
        Alert,
        Switch,
        StyleSheet
    } from "react-native";
import
    {
        DrawerContentScrollView,
        DrawerItemList,
        DrawerItem
} from "@react-navigation/drawer";
    
import { Icon, Avatar, Button } from "react-native-elements";
import { colors } from "../global/styles";

export default function DrawerContent (props)
{
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor: colors.buttons,}}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', 
                     paddingLeft: 20, paddingVertical: 10
                }}>
                <Avatar
                    rounded
                        avatarStyle={styles.avatar}
                        size={75}
                     source={{ uri:'http://pineslopesboulevard.co.za/wp-content/uploads/2020/07/f4330be4-2ce8-42b1-86c7-fef8eec4d437.jpeg'}}
                    />
                    <View style={{paddingLeft:10}}>
                        <Text style={{fontWeight:'bold',color:colors.pagebackground,fontSize:18}}>Abdul Qadir</Text>
                        <Text style={{color:colors.pagebackground,fontSize:14}}>abdul@XpressFood.com</Text>
                    </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-evenly',paddingBottom:5}}>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                    <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 }}>1</Text>
                        <Text style={{ color:colors.pagebackground,fontSize:14 }}>My Favorites</Text>
                          </View>
                        </View > 
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                             <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 }}>0</Text>
                        <Text style={{ color:colors.pagebackground,fontSize:14}}>My Cart</Text>
                        
                        </View> 
                          </View>
                        </View>
                </View>

                
                <DrawerItemList {...props} />
                
                <DrawerItem
                    label='Payment'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                 <DrawerItem
                    label='Promotions'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />

                 <DrawerItem
                    label='Settings'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                 <DrawerItem
                    label='Help'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{borderTopWidth:1,borderTopColor:colors.gray4}}>
                    <Text style={styles.preferences}>Preferences</Text>
                    
                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch
                             
                                trackColor={{ false: "#767577", true: '#81b0ff' }}
                                thumbColor='#f4f3f4'
                            />

                        </View>
                    </View>
                </View>

             
            </DrawerContentScrollView>

            
             <DrawerItem
                    label='Sign Out'
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="logout-variant"
                            color={color}
                            size={size}
                        />
                    )}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.pagebackground,
       
    },
    preferences: {
        fontSize: 16,
        color: colors.gray2,
        paddingTop: 10,
        paddingLeft: 20
    },
    switchText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkThemeText: {
        fontSize: 16,
        color: colors.gray2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight:'bold'
    }
})