import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon} from 'react-native-elements';
import { Audio } from 'expo-av';



export default function Emotion() {
    const navigation = useNavigation();
    const [mood, setMood] = useState('nervous');
  

    return (
        <View style={styles.container}>
            <Text style={{backgroundColor:'#FFC30C', height:100, color:'#FFF', fontWeight:'bold', 
            textAlign:'center', paddingTop:'10%', fontSize:20}}>My Emotions</Text>
            <TouchableOpacity><Text style={{backgroundColor:'#FFE28E', height:50, color:'#FFF', fontWeight:'900', 
            textAlign:'center', paddingTop:'3.5%', fontSize:20}}>View History</Text></TouchableOpacity>

       
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', height:100}}>
            {mood == 'happy' &&<Icon name="happy" type="ionicon" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'sad' &&<Icon name="sad" type="ionicon" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'neutral' &&<Icon name="sentiment-neutral" type="material-icons" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'angry' &&<Icon name="angry" type="font-awesome-5" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'nervous' &&<Icon name="nervous" type="fontisto" color={'#FFC30C'} size={60}></Icon>}



            <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', color:'#FFC30C'}}>{mood}</Text>
            
            </View>
            <View style={{alignSelf:'center', marginTop:'10%'}}>
              
            </View>
    
            <View style={{backgroundColor:'#FFF', height:50, position:'absolute', bottom:0, borderTopRightRadius:10, 
            borderTopLeftRadius:10, width:'100%', paddingHorizontal:'15%', flexDirection:'row', paddingVertical:'2.5%'}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Record')}}><Text style={{marginRight:'20%'}}><Icon name="home" type="feather" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Emotion')}}><Text style={{marginRight:'20%'}}><Icon name="smile-o" type="font-awesome" color={'#FFC30C'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Health')}}><Text style={{marginRight:'20%'}}><Icon name="barschart" type="ant-design" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity><Text style={{marginRight:'20%'}}><Icon name="settings" type="feather" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>

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