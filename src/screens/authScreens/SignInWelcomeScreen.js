import React,{useState,useRef} from 'react'
import { Text, View, StyleSheet, Dimensions,Image, _Image} from 'react-native'
import { colors, parameter,title } from '../../global/styles'
import { Icon, Button, SocialIcon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper'

export default function SignInWelcomeScreen({navigation}) {
    return (
        <View style={{flex:1}}>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.background2, fontWeight: 'bold' }}>DISCOVER RESTORENTS</Text>
                 <Text style={{fontSize:26,color:colors.background2,fontWeight:'bold'}}>IN YOUR AREAS</Text>
            </View>
            <View style={{flex:4,justifyContent:'center',}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519' }}
                            style={{height:'100%',width:'100%'}}
                        />

                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg' }}
                            style={{height:'100%',width:'100%'}}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1095550.jpg&fm=jpg' }}
                            style={{height:'100%',width:'100%'}}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?cs=srgb&dl=pexels-julie-aagaard-2097090.jpg&fm=jpg' }}
                            style={{height:'100%',width:'100%'}}
                        />

                    </View>
                </Swiper>
            </View>
            <View style={{flex:4,justifyContent:'flex-end',marginBottom:20}}>
           <View style={{marginHorizontal:20, marginTop:30}}>
                <Button 
                    title="SIGN IN"
                    buttonStyle={parameter.styledButton}
                        titleStyle={parameter.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}
                />
                </View>
                <View style={{marginHorizontal:20, marginTop:20}}>
                <Button
                    title="Create Your Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                /> 
            </View>
                 </View>
            
            </View>
       
    )
}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd6eb'
        
    },
     slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
        
    },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd6ef'
        
    },
    createButton: {
          backgroundColor: '#ffffff',
       alignContent:'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor:colors.gray3,
        hight: 40,
        paddinghorizental: 20,
    },
    createButtonTitle: {
        color: colors.gray1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:-3 
        
    }

     
})