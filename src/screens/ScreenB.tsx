import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

export function ScreenB(){
    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenC')
    }
    return (
        <view style={{flex: 1, backgroundColor: '#eaec0c', justifyItems: 'center' }}>
            <Button
            title="Ir para a Tela C"
            onPress={openScreen}
            />
        </view>
    );
}