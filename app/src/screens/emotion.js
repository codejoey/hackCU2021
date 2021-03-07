import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon, ListItem} from 'react-native-elements';
import { Audio } from 'expo-av';
import {LineChart,} from "react-native-chart-kit";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { AnimatedEmoji } from 'react-native-animated-emoji';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';






export default function Emotion() {
    const navigation = useNavigation();
    const [mood, setMood] = useState('neutral');
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
        setTimeout(() => {
          setMood('angry');
          Vibration.vibrate(10 * ONE_SECOND_IN_MS)

        }, 5000);
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
            await recording.prepareToRecordAsync({
              ios: {
                extension: '.m4a',
                outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
                audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
                sampleRate: 44100,
                numberOfChannels: 1,
                bitRateStrategy: Audio.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT,
                linearPCMBitDepth: 16,
                linearPCMIsBigEndian: false,
                linearPCMIsFloat: false,
                bitRate: 128000,
              },
              android: {
                extension: '.wav',
                outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
                audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
                sampleRate: 44100,
                numberOfChannels: 1,
                bitRate: 128000,
            }})
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

          saveToPhoneLibrary();
          uploadRecFromPhone();
        }









//AUDIO UPLOAD
async function createAudioAsset() {
  let newAss = await MediaLibrary.createAssetAsync(recording.getURI())
  MediaLibrary.createAlbumAsync('Recordings', newAss)
  .then(() => {
    console.log('Album created!');
  })
  .catch(error => {
    console.log('err', error);
  });
  }

  async function saveToPhoneLibrary(){
    createAudioAsset()
  .then(asset => MediaLibrary.saveToLibraryAsync(asset))
  .catch(err => console.log('media library save asset err', err))
  }

  async function  uploadRecFromPhone(){
    DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
      base64: true
    })
    .then(succ => {
      console.log(`Recording Information -- path: ${succ.uri}, type: ${succ.type}, size: ${succ.size}`)
      
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://d6803cb46723.ngrok.io/getemotion');
xhr.onload = () => {
	const response = JSON.parse(xhr.response);

	console.log(response);
};
xhr.onerror = e => {
	console.log(e, 'upload failed');
};
xhr.ontimeout = e => {
	console.log(e, 'upload timeout');
};
const formData = new FormData();

formData.append('file', {
	uri: succ.uri, 		
	type: `audio/mpeg`,  
	name: `upload${Math.random().toFixed(0)}.wav`    
});
// 6. upload the request
xhr.send(formData);
// 7. track upload progress
if (xhr.upload) {
	// track the upload progress
	xhr.upload.onprogress = ({ total, loaded }) => {
		const uploadProgress = (loaded / total);
		console.log(uploadProgress);
	};
}
     
    });

    
  }
  
  
  
   







  
      async function playSound(uri) {
          console.log('Loading Sound');
          const { sound } = await Audio.Sound.createAsync(
             {uri:uri}
          );
          setSound(sound);
      
          console.log('Playing Sound');
          await sound.playAsync(); 
        }
  
        
          
        
      
        const _sendAudio = (uri) =>{
      

      }
 
  
  

    return (
        <View style={styles.container}>
            <Text style={{backgroundColor:'#FFC30C', height:100, color:'#FFF', fontWeight:'bold', 
            textAlign:'center', paddingTop:'10%', fontSize:20}}>My Emotions</Text>
            <TouchableOpacity onPress={()=>{setHistory(!history)}}><Text style={{backgroundColor:'#FFE28E', height:50, color:'#FFF', fontWeight:'900', 
            textAlign:'center', paddingTop:'3.5%', fontSize:20}}>View History</Text></TouchableOpacity>
            {history==0 &&<TouchableOpacity onPress={recording ? stopRecording : startRecording}><Text style={{textAlign:'center', marginTop:'40%'}}><Icon name={recording ? 'mic':'mic-off'} size={60} color='#FFF' style={{borderRadius:50, backgroundColor:'#FFC30C', alignSelf:'center'}}></Icon></Text></TouchableOpacity>}
            {!recording && history==0 &&<Text style={{fontWeight:'100', fontSize:15, alignSelf:'center', textAlign:'center', flexWrap:'wrap', width:'70%', color:'#8E8E8E', marginBottom:'2.5%'}}>Start recording to gauge emotion</Text>}

{history==0 && recording &&
            <View style={{paddingHorizontal:'10%', marginTop:'20%',paddingTop:'5%', height:150, elevation:1, borderRadius:20, backgroundColor:'#FFF', width:'50%', alignSelf:'center'}}>
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
              <TouchableOpacity onPress={()=>{}}><Text style={{marginRight:'20%'}}><Icon name="home" type="feather" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
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