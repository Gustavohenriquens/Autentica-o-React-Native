import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({ //Permite colocar novas fontes..
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf')
  })

  return (
    // Página que vai renderizar primeiro
    <Stack screenOptions={{
      headerShown  : false //Esconde o cabeçalho padrão de todas as telas no stack.
    }}> 
     {/* uando o usuário acessar essa rota, ele verá um layout com diferentes abas, onde cada aba representa uma seção do app. */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
