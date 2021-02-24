import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Accenture from './pages/Accenture';
import Header from './components/Header';

export default function Route(){
    const {Screen, Navigator} = createStackNavigator()
    return(
        <NavigationContainer>
            <Navigator
                screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f2f2'}}}
            >
                <Screen
                    name="home"
                    component={Home}
                />
                <Screen
                    name="accenture"
                    component={Accenture}
                    options={{
                        headerShown:true,
                        header:()=><Header title="Accenture" showCancel={false}/>
                    }}
                />
            </Navigator>       
        </NavigationContainer>
       
    )
}