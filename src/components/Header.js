import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { colors, parameter } from '../global/styles'
import { Icon } from 'react-native-elements'
export default function Header({title,type,navigation}) {
    return (
        <View style={styles.header}>
            <View style={{marginLeft:20}}>
            <Icon
                type='material-community'
                name={type}
                color={colors.headerText}
                size={28}
                    onPress={() => {
                        navigation.goBack();
                }}
                />
                 
            </View>
             <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
              
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection:'row',
        backgroundColor: colors.buttons,  
        height:parameter.headerHeight,
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft:30
    },
      createButton: {
          backgroundColor: '#ffffff',
        alignCintent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        hight: 40,
        paddinghorizental: 20,
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:-3 
        
    }
})