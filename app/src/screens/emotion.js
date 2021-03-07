import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon, ListItem} from 'react-native-elements';
import { Audio } from 'expo-av';
import {LineChart,} from "react-native-chart-kit";




export default function Emotion() {
    const navigation = useNavigation();
    const [mood, setMood] = useState('nervous');
    const [history, setHistory] = useState(0);
    const list = [
        {
          title: '03-07-2021 14:20',
          icon: 'happy',
          location: 'School',
        },
        {
          title: '03-07-2021 14:15',
          icon: 'sad',
          location: 'Public Transport',
        },
      ]
      const [recording, setRecording] = useState();
      const [sound, setSound] = React.useState();
  
     
  
      async function startRecording() {
          try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: true,
              playsInSilentModeIOS: true,
              staysActiveInBackground: true,
            }); 
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync(); 
            setRecording(recording);
            console.log('Recording started');
          } catch (err) {
            console.error('Failed to start recording', err);
          }
        }
      
      async function stopRecording() {
          console.log('Stopping recording..');
          setRecording(undefined);
          await recording.stopAndUnloadAsync();
          const uri = recording.getURI(); 
          _sendAudio(uri);
          playSound(uri);
          console.log('Recording stopped and stored at', uri);
        }
  
      async function playSound(uri) {
          console.log('Loading Sound');
          const { sound } = await Audio.Sound.createAsync(
             {uri:uri}
          );
          setSound(sound);
      
          console.log('Playing Sound');
          await sound.playAsync(); }
  
      const _sendAudio = (uri) =>{
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': "multipart/form-data",
            'Content-Type': 'multipart/form-data',
            'Authorization':'PwN5MFQqcwKCZu56T9dpWg2gaz21EwnF'
        },
          body: ({file:uri})
      };
      fetch('https://upload.box.com/api/2.0/files/content/', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
      }
  

    return (
        <View style={styles.container}>
            <Text style={{backgroundColor:'#FFC30C', height:100, color:'#FFF', fontWeight:'bold', 
            textAlign:'center', paddingTop:'10%', fontSize:20}}>My Emotions</Text>
            <TouchableOpacity onPress={()=>{setHistory(!history)}}><Text style={{backgroundColor:'#FFE28E', height:50, color:'#FFF', fontWeight:'900', 
            textAlign:'center', paddingTop:'3.5%', fontSize:20}}>View History</Text></TouchableOpacity>

{history==0 &&
            <View style={{paddingHorizontal:'10%', marginTop:'40%',paddingTop:'5%', height:150, elevation:1, borderRadius:20, backgroundColor:'#FFF', width:'50%', alignSelf:'center'}}>
            {mood == 'happy' &&<Icon name="happy" type="ionicon" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'sad' &&<Icon name="sad" type="ionicon" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'neutral' &&<Icon name="sentiment-neutral" type="material-icons" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'angry' &&<Icon name="angry" type="font-awesome-5" color={'#FFC30C'} size={60}></Icon>}
            {mood == 'nervous' &&<Icon name="nervous" type="fontisto" color={'#FFC30C'} size={60}></Icon>}



            <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', color:'#FFC30C'}}>{mood}</Text>
            
            </View>}
            {history==1 &&
            <View>
         {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} type='ionicon' color='#FFC30C' />
                <ListItem.Content>
                  <ListItem.Title style={{color:'#FFC30C'}}>{item.location}</ListItem.Title>
                </ListItem.Content>
                  <ListItem.Title style={{color:'#FFC30C'}}>{item.title}</ListItem.Title>
              </ListItem>
            ))
          }</View>}
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