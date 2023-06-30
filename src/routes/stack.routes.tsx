import { ScreenListeners } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const {Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                options={{
                    title: 'Lucy',
                    headerTitleAlign: 'center'
                }}
                component={ScreenA}
                
            />
            <Screen
                name='screenB'
                options={{
                    title: 'David',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor:'navy',
                    },
                    headerTintColor: 'white'
                }}
                component={ScreenB}
            />
             <Screen
                name='screenC'
                options={{
                    title: 'Rebecca',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor:'#a2c23e',
                    },
                    headerTintColor: 'white'
                }}
                component={ScreenC}
            />
        </Navigator>
    )
}