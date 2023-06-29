import { ScreenListeners } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const {Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                options={{
                    title: 'Tela A',
                    headerTitleAlign: 'center'
                }}
                component={ScreenA}
                
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor:'navy',
                    },
                    headerTintColor: 'white'
                }}
                component={ScreenB}
            />
        </Navigator>
    )
}