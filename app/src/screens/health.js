import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon} from 'react-native-elements';
import { Audio } from 'expo-av';
import {LineChart,} from "react-native-chart-kit";

  


export default function Health() {
    const navigation = useNavigation();
    const [mood, setMood] = useState('nervous');
    const [history, setHistory] = useState(0);
    const buttons = ['Pulse', 'Steps', 'Stress']
    const [selectedIndex, setSelectedIndex] = useState(0);

    
  

    return (
        <View style={styles.container}>
            <Text style={{backgroundColor:'#2193D1', height:100, color:'#FFF', fontWeight:'bold', 
            textAlign:'center', paddingTop:'10%', fontSize:20}}>My Health</Text>
            <TouchableOpacity onPress={()=>{setHistory(!history)}}><Text style={{backgroundColor:'#B5D0DE', height:50, color:'#FFF', fontWeight:'900', 
            textAlign:'center', paddingTop:'3.5%', fontSize:20}}>View History</Text></TouchableOpacity>

        {history==0 &&
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', flexDirection:'row', flexWrap:'wrap', alignSelf:'center'}}>
            <View style={{borderRadius:20,borderColor:'#2193D1', height:100, width:'45%', padding:'7.5%', marginRight:'2.5%', elevation:1, backgroundColor:'#FFF'}}>
                <Icon name="pulse" type="fontisto" color={"#2193D1"} size={20}></Icon>
                <Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:'#2193D1'}}>Pulse Rate</Text>
                <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', color:'#2193D1'}}>65 bps</Text>
            </View>
            <View style={{borderRadius:20, borderColor:'#2193D1', height:100, width:'45%', padding:'7.5%', elevation:1, backgroundColor:'#FFF'}}>
                <Icon name="shoe-prints" type="font-awesome-5" color={"#2193D1"} size={20}></Icon>
                <Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:'#2193D1'}}>Steps</Text>
                <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', color:'#2193D1'}}>561</Text>
            </View>
            <View style={{borderRadius:20, borderColor:'#2193D1', height:100, width:'92%', padding:'7.5%', marginTop:'5%', elevation:1, backgroundColor:'#FFF'}}>
                <Icon name="brain" type="font-awesome-5" color={"#2193D1"} size={20}></Icon>
                <Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:'#2193D1'}}>Stress Level</Text>
                <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', color:'#2193D1'}}>Normal</Text>
            </View>
            </View>}

            {history==1 &&
            <View style={{borderRadius:20, borderColor:'#2193D1',  width:'92%', padding:'7.5%', marginTop:'5%', alignSelf:'center'}}>
                <ButtonGroup
                onPress={setSelectedIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                selectedButtonStyle={{backgroundColor:'#2193D1'}}
                textStyle={{fontWeight:'bold'}}
                containerStyle={{height: 30, borderColor:'#2193D1', width:'50%', alignSelf:'center', marginTop:'15%', backgroundColor:'#FFF8F1'}}
            />
            {selectedIndex==0 &&
                <LineChart
                    data={{
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={320} // from react-native
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#2193D1",
                    backgroundGradientTo: "#B5D0DE",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#2193D1"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />}
                 {selectedIndex==1 &&
                <LineChart
                    data={{
                    datasets: [
                        {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000
                        ]
                        }
                    ]
                    }}
                    width={320} // from react-native
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#2193D1",
                    backgroundGradientTo: "#B5D0DE",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#2193D1"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />}
                 {selectedIndex==2 &&
                <LineChart
                    data={{
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={320} // from react-native
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#2193D1",
                    backgroundGradientTo: "#B5D0DE",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#2193D1"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />}
            </View>}
            
            <View style={{alignSelf:'center', marginTop:'10%'}}>
              
            </View>
    
            <View style={{backgroundColor:'#FFF', height:50, position:'absolute', bottom:0, borderTopRightRadius:10, 
            borderTopLeftRadius:10, width:'100%', paddingHorizontal:'15%', flexDirection:'row', paddingVertical:'2.5%'}}>
              <TouchableOpacity onPress={()=>{}}><Text style={{marginRight:'20%'}}><Icon name="home" type="feather" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Emotion')}}><Text style={{marginRight:'20%'}}><Icon name="smile-o" type="font-awesome" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Health')}}><Text style={{marginRight:'20%'}}><Icon name="barschart" type="ant-design" color={'#2193D1'}></Icon></Text></TouchableOpacity>
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