import React from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function ScreenA(){
    const navigation = useNavigation();

    
    function openScreen(){
        navigation.navigate('screenB')
    }


    return (
        <view style={{flex: 1, backgroundColor: '#ffefff', alignItems: 'center', height: 200, borderRadius:20, opacity:'80%' }}>
            {/* <Button 
            title="Ir para tela B"
            onPress={openScreen}
            /> */}
            <Image source={require('/home/izabugs/Documents/ReactNativeReforce/drawerproject/NavigationDrawer/assets/lucy.jpeg')}
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

