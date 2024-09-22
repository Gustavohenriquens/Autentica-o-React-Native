import { View, Text, Alert, BackHandler } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors } from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useFocusEffect } from '@react-navigation/native';

export default function MyTrip() {  

  useFocusEffect( 
    useCallback(() => { 
      const onBackPress = () => { //
        return true; 
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress); 

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress); 
      };
    }, [])
  );


  return (
    <View style={{
        padding : 25,
        paddingTop : 55,
        backgroundColor : Colors.WHITE,
        height  : '100%'
    }}>
      <View style={{
        display  : 'flex',
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'space-between'
      }}>
        <Text style={{
          fontFamily  : 'outfit-bold',
          fontSize : 30
        }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

    </View>
  )
}