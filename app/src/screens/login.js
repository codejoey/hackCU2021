import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native';





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

    // GoogleFit.checkIsAuthorized().then(() => {
    //     console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
    // })

 
    const buttons = ['Login', 'Sign Up']
    const [selectedIndex, setSelectedIndex] = useState(0);

    
      

       

   
    return (
        <View style={styles.container}>
             <Image source={require('../assets/logo.png')} style={{width:200, height:200, resizeMode:'contain', alignSelf:'center', marginTop:'20%'}}></Image>
            <View style={{ marginTop: '-10%' ,borderTopLeftRadius:20, borderTopRightRadius:20, height:'110%' }}>
               
            <ButtonGroup
                onPress={setSelectedIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                selectedButtonStyle={{backgroundColor:'#36A044'}}
                containerStyle={{height: 30, borderColor:'#36A044', width:'50%', alignSelf:'center', marginTop:'15%', backgroundColor:'#FFF8F1'}}
            />
                                    
           {selectedIndex==0 &&
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', height:100}}>
            
            <Input
                placeholder='   Email'
                style={{backgroundColor:'#FFF', borderRadius:20}}
                leftIcon={
                    <Icon
                    name='envelope'
                    type='font-awesome'
                    size={24}
                    color='black'
                    />
                }
            />  
            <Input
                placeholder='   Password'
                style={{backgroundColor:'#FFF', borderRadius:20}}
                leftIcon={
                    <Icon
                    name='lock'
                    type='font-awesome'
                    size={24}
                    color='black'
                    />
                }
                secureTextEntry
            />              

            </View>}

            {selectedIndex==1 &&
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', height:100}}>
            
            <Input
                placeholder='   Email'
                style={{backgroundColor:'#FFF', borderRadius:20}}
                leftIcon={
                    <Icon
                    name='envelope'
                    type='font-awesome'
                    size={24}
                    color='black'
                    />
                }
            />  
             <Input
                placeholder='   Code'
                style={{backgroundColor:'#FFF', borderRadius:20}}
                leftIcon={
                    <Icon
                    name='user'
                    type='font-awesome'
                    size={24}
                    color='black'
                    />
                }
            /> 
            <Input
                placeholder='   Password'
                style={{backgroundColor:'#FFF', borderRadius:20}}
                leftIcon={
                    <Icon
                    name='lock'
                    type='font-awesome'
                    size={24}
                    color='black'
                    />
                }
                secureTextEntry
            />              

            </View>}


            <View style={{alignSelf:'center', marginTop:'10%'}}>
           <TouchableOpacity onPress={() => navigation.navigate('Location')}><Text style={{backgroundColor:'#36A044', color:'#FFF', textAlignVertical:'center', fontWeight:'bold', 
           fontSize:15, textAlign:'center', paddingVertical:'2.5%', paddingHorizontal:'10%', borderRadius:20, marginTop:'90%'}}>Submit</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF8F1'
    },
    header: {
        height: '50%',
        width: '60%',
        marginTop: '10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});