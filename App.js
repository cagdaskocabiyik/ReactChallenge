import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApolloProvider } from '@apollo/client'

import { client } from './src/services/client'
import CardsScreen from './src/screens/CardsScreen'
import CardsOptionsScreen from './src/screens/CardOptionsScreen'
import { useFonts } from 'expo-font';
import Spinner from './src/components/Spinner'

const Stack = createStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    ProximaNovaBold: require('./assets/fonts/ProximaNovaA-Bold.ttf'),
    ProximaNovaRegular: require('./assets/fonts/ProximaNovaA-Regular.ttf'),
    ProximaNovaSemiBold: require('./assets/fonts/ProximaNovaA-Semibold.ttf'),
    ProximaNovaCondSemiBold: require('./assets/fonts/ProximaNovaACond-Semibold.ttf'),
  });

  if (!fontsLoaded) {
    return <Spinner />;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cards" screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen
            name="Cards"
            component={CardsScreen}
            options={{ title: 'Cards' }}
          />
          <Stack.Screen
            name="CardOptions"
            component={CardsOptionsScreen}
            options={{ title: 'Card Options' }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  )
}
