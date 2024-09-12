import React,{useState,useRef} from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native'
import { colors, parameter,title } from '../../global/styles'
import { Icon,Button,SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'


export default function SignInScreen({navigation}) {


    const [textInput2Focused, setTextInput2Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    


    return (
        <ScrollView>
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
            <View style={{marginLeft:20,marginTop:10}}>
                <Text style={title}>Sign-In </Text>
            </View>
             <View style={{alignItems:'center',marginTop:10}}>
                <Text style={styles.text1}>Please enter the Email and Password </Text>
                 <Text style={styles.text1}>Registered With your Account</Text>
            </View>
            <View style={{marginTop:20}}>
                <View>
                    <TextInput
                        style={styles.textInput1}   
                        placeholder='Email'
                        ref={textInput1}
                    />
                </View>
                <View style={styles.textInput2}>
                 <Animatable.View animation={textInput2Focused?"":'fadeInRight'} duration={400}>
                        <Icon
                            name='lock'
                            iconStyle={{ color: colors.gray3 }}
                            type='material'
                        />
                    </Animatable.View >
                      <TextInput
                        style={{width:"80%"}} 
                        placeholder='Password'
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Focused(false)
                        }}
                        onBlur={() => {
                            setTextInput2Focused(true)
                        }}
                    />

                    <Animatable.View animation={textInput2Focused?"":'fadeInLeft'} duration={400}>
                   <Icon
                            name='visibility-off'
                            iconStyle={{ color: colors.gray3 }}
                            type='material'
                            style={{marginRight:10}}
                        />
                    </Animatable.View>
                </View>
                
            </View>
            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button 
                    title="SIGN IN"
                    buttonStyle={parameter.styledButton}
                        titleStyle={parameter.buttonTitle}
                        onPress={() => {
                          navigation.navigate('DrawerNavigator')
                        }}
                />
            </View>
            <View style={{alignItems:'center',marginTop:15}}>
                <Text style={{ ...styles.text1,textDecorationLine:'underline' } }>Forgot Password ?</Text>
            </View>
            <View style={{alignItems:'center',marginTop:20,marginBottom:20}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>OR</Text>
            </View>
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>
            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>
             <View style={{marginTop:25,marginLeft:20}}>
                <Text style={{ ...styles.text1, } }>New on ExpressFood ?</Text>
            </View>
            <View style={{alignItems:'flex-end',marginHorizontal:20,marginBottom:20}}>
                <Button
                    title="Create An Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                /> 
            </View>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text1: {
        color:colors.gray3,
        fontSize:16
    },
    textInput1:{
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:15
       
    },
    textInput2: {
          borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft:15
    },
    socialIcon: {
        borderRadius: 12,
        height:50,
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
