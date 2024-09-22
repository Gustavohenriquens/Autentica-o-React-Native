import { Text, View } from "react-native";
import Login from '../components/Login';
import { auth } from './../configs/FirebaseConfig'
import { Redirect } from "expo-router";

export default function Index() { //Página inicial! Quando abrir o aplicativo vai renderizar primeiro essa página 

    const user = auth.currentUser; // Está verificando o usuário autenticado com o sistema de autenticação


  return (
    <View
      style={{flex: 1,}}>
      {user?  // Define uma visualização condicional em React Native, onde o usuário é redirecionado para uma rota específica (/mytrip) caso esteja autenticado.
        <Redirect href={'/mytrip'}/> :
          <Login />
      }

    </View>
  );
}
