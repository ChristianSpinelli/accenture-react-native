import React from 'react';
import { render } from 'react-dom';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';

export default function Accenture(){
    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={AccentureLogo}
            width={232}
            height={60}
            />
            <Text style={styles.title}>Accenture</Text>
            <Text style={styles.paragraph}>Texto complementar</Text>
            <RectButton style={styles.contact}
            onPress={()=>alert('Olá')}>
                <Text style={styles.textButton}>Entrar em contato</Text><Feather name="send" size={20}/>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        marginBottom:20,
        width:232,
        height:60
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    title:{
        fontSize:18,
        textAlign:'center',
        marginBottom:24,
        color:'#b8b8b8'
    },
    paragraph:{
        fontSize:18,
        textAlign:'left',
        color:'#b8b8b8'
    },
    contact:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        color:'#A100ff',
        marginTop:22,
    },
    textButton:{
        color:"#A100ff",
        fontSize:18,
        marginRight:18,
        
    }
})