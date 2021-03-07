import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';





export default function LocationSettings() {
    const navigation = useNavigation();
    const [loc, setLoc] = useState('');

    const _getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLoc(location.coords);
        console.log(location);
      };
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' ,borderTopLeftRadius:20, borderTopRightRadius:20, height:'110%' }}>
                <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center', marginBottom:'10%'}}>Settings</Text>
               
                <Text style={{fontWeight:'900', fontSize:20, alignSelf:'center', marginBottom:'2.5%'}}>Enable GPS Location</Text>
               
                <Text style={{fontWeight:'100', fontSize:15, alignSelf:'center', textAlign:'center', flexWrap:'wrap', width:'70%', color:'#8E8E8E', marginBottom:'2.5%'}}>This will be used to notify you about incidents and search facilities based on your location</Text>
                {loc == '' &&<TouchableOpacity  onPress={()=>{_getLocation()}}><Text style={{backgroundColor:'#36A044', color:'#FFF', textAlignVertical:'center', fontWeight:'bold', alignSelf:'center', 
           fontSize:15, textAlign:'center', paddingVertical:'2.5%', paddingHorizontal:'10%', borderRadius:20, marginTop:'5%', width:'70%'}} >Enable GPS</Text></TouchableOpacity>}
           {loc != '' &&
           <Text style={{fontWeight:'500', textAlign:'center', color:'#36A044'}}><Icon name="location-on" type="material-icons" size={20} color={'#36A044'}></Icon>{loc.latitude},{loc.longitude}</Text>}
            <View style={{alignSelf:'center', marginTop:'10%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Emotion')}><Text  style={{backgroundColor:'#36A044', color:'#FFF', textAlignVertical:'center', fontWeight:'bold', 
           fontSize:15, textAlign:'center', paddingVertical:'2.5%', paddingHorizontal:'10%', borderRadius:20, marginTop:'70%'}}>Continue</Text></TouchableOpacity>
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