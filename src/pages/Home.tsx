import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView,{Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {RectButton} from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';

import PinInsert from '../images/Pin.png';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation()
    function handlePageDetails(){
        navigation.navigate('accenture')
    }
    return(
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                latitude:-8.0632151,
                longitude:-34.8784675,
                latitudeDelta:0.008,
                longitudeDelta:0.008
            }}>
                <Marker
                icon={PinInsert}
                coordinate={{
                    latitude:-8.0632151,
                    longitude:-34.8784675,
                }}>
    
                    <Callout
                    tooltip={true}
                    onPress={handlePageDetails}
                    >
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Aqui estou</Text>
                        </View>
                    
                    </Callout>
        
                </Marker>
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Texto Qualquer</Text>
                <RectButton style={styles.findButton}>
                    <Feather name="search" size={20} color={'#fff'}></Feather>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map:{
      width: Dimensions.get('window').width,
      height:Dimensions.get('window').height,
    },
    calloutContainer:{
      width:160,
      height:60,
      paddingHorizontal:16,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:16,
      justifyContent:'center',
    },
    calloutText:{
      color:'#A100FF',
      textAlign:'center',
      fontSize:14,
    },
    footer:{
      position:'absolute',
      left:24,
      right:24,
      bottom:24,
      backgroundColor:'#fff',
      borderRadius:20,
      height:56,
      paddingLeft:24,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    footerText:{
      color:"#8fa7b3",
    },
    findButton:{
      height:56,
      width:56,
      backgroundColor:'#A100FF',
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
    }
  });