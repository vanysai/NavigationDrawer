import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export function ScreenC(){
    return (
        <view style={{flex: 1, backgroundColor: '#46c3bd', justifyContent: 'center' }}>
            <Image source={require('/home/izabugs/Documents/ReactNativeReforce/drawerproject/NavigationDrawer/assets/rebecca.jpg')}
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
