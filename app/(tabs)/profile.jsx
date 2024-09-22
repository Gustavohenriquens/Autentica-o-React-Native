import { View, Text,TouchableOpacity, Alert  } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { auth } from '../../configs/FirebaseConfig'
import { signOut } from 'firebase/auth'
import { Colors } from '../../constants/Colors'

export default function Profile() {

  const router = useRouter();

    function signOutUser() { 
    Alert.alert
    (
      "Certeza que deseja sair?", "Você será desconectado da sua conta.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress : () => {
            signOut(auth) 
            .then(() => { 
              console.log('User signed out!'); 
              router.replace('/auth/sign-in') 
            })
            .catch((error) => {
              console.error('Sign out error:', error); 
            });
          }
        }
      ],
      { cancelable: false } 
    );
  }

  return (
    <View style={{
      padding : 30
    }}>
        <TouchableOpacity  onPress={signOutUser}
      style={{
        padding  : 20,
        marginTop : 70,
        backgroundColor  : Colors.PRIMARY,
        borderRadius : 99, 
        display : 'flex'
      }}>
        <Text style={{
          textAlign  :'center',
          color : Colors.WHITE,
          fontSize : 17,
          fontFamily : 'outfit-medium'
        }}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  )
}