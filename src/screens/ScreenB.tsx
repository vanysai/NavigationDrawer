import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View, Image, StyleSheet } from "react-native";

export function ScreenB(){
    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenC')
    }
    return (
        <view style={{flex: 1, backgroundColor: '#eaec0c', justifyItems: 'center' }}>
            {/* <Button
            title="Ir para a Tela C"
            onPress={openScreen}
            /> */}
            <Image source={require('/home/izabugs/Documents/ReactNativeReforce/drawerproject/NavigationDrawer/assets/david.png')}
            style={styles.img}/>
        </view>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
        backgroundColor:'black',
        flexDirection:'column',
    },
    img:{
        width:150,
        height:150,
        borderRadius:200,
        position:'absolute',
        justifyContent: 'center',
        left: 130,
        top:250,
        zIndex: 2,
        borderWidth:7,
        borderColor:'#414244',
    },
  });
