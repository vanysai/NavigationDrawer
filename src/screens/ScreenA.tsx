import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function ScreenA(){
    const navigation = useNavigation();

    
    function openScreen(){
        navigation.navigate('screenB')
    }


    return (
        <view style={{flex: 1, backgroundColor: 'red', justifyItems: 'center' }}>
            <Button
            title="Ir para tela B"
            onPress={openScreen}
            />
        </view>
    );
}