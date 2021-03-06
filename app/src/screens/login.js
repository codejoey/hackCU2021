import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements';
 




export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];

    const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

       

   
    return (
        <View style={styles.container}>
             <Image source={require('../assets/logo.png')} style={{width:200, height:200, resizeMode:'contain', alignSelf:'center', marginTop:'10%'}}></Image>
            <View style={{ marginTop: '-10%' ,borderTopLeftRadius:20, borderTopRightRadius:20, height:'110%',backgroundColor: 'rgba(62, 62, 62, 0.6)' }}>
               
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, textAlign: 'center', color:'#FFF', marginTop:'5%', 
                }}>Sign in to continue</Text>
                
           
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', height:100}}>
            
                <TextInput placeholder="E-mail" placeholderTextColor="#FFF" style={{fontSize:20, borderWidth:2, borderRadius:5, borderColor:'#DDD', width:'70%', paddingLeft:'5%', alignSelf:'center', paddingVertical:'2.5%'}}></TextInput>
                <TextInput placeholder="Password" secureTextEntry placeholderTextColor="#FFF" style={{fontSize:20, borderWidth:2, borderRadius:5, borderColor:'#DDD', width:'70%', paddingLeft:'5%', paddingVertical:'2.5%', marginTop:'5%', alignSelf:'center'}}></TextInput>

            </View>
            <View style={{alignSelf:'center', marginTop:'10%'}}>
           <Text onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)} style={{backgroundColor:'#16B65C', color:'#FFF', textAlignVertical:'center', fontWeight:'bold', 
           fontSize:15, textAlign:'center', paddingVertical:'3.5%', paddingHorizontal:'10%', borderRadius:5, marginTop:'20%'}}>SIGN IN</Text>
            </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#16B65C'
    },
    header: {
        height: '50%',
        width: '60%',
        marginTop: '10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});