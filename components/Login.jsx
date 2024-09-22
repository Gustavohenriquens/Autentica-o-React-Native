import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter(); //Router serve para navegação de páginas

  return (
    <View style={{
        display : 'flex',
        alignItems : 'center',
        marginTop : 150,
    }}>
        <Image source={require('../assets/images/login.png')}
            style={{
                width : 270,
                height : 480,
                borderRadius: 20,
                borderWidth : 6,
                borderColor : '#000',
            }}
        />

        <View style={styles.container}>
            <Text style={{
                fontSize  :30,
                fontFamily : 'outfit-bold',
                textAlign : 'center',
                marginTop : 10,
            }}>AI Travel Planner</Text>

            <Text style={{
                fontFamily : 'outfit',
                fontSize  : 20,
                textAlign  :'center',
                color  : Colors.GRAY,
                marginTop : 20
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since.</Text>

            <TouchableOpacity 
            onPress={() => router.push('auth/sign-in')} //Vai para a página que você colocou entre strings
            style={styles.button}>
                <Text style={{
                    color : Colors.WHITE,
                    textAlign : 'center',
                    fontFamily : 'outfit',
                    fontSize : 17
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : Colors.WHITE,
        marginTop : -20,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        height : '100%',
        padding : 25,
    },
    button : {
        padding : 15,
        backgroundColor : Colors.PRIMARY,
        borderRadius : 99,
        marginTop : '20%'
    }
})