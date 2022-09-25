import * as React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Resumo from './screens/Resumo';
import InicialScreen from './screens/InicialScreen';
import Tickets from './screens/Tickets';
import NextMonths from './screens/modal/NextMonths';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Resumo />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
    >
      <StatusBar
        barStyle='dark-content'
        hidden={true}
        backgraundColor="#121212"
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: `black` },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen name="InicialScreen" component={InicialScreen}
          options={{
            tabBarLabel: 'InicialScreen',

            tabBarIcon: ({ color }) => (
              <MaterialIcons name="playlist-play" size={26} color={color} />
            ),
          }}
        />

        <Stack.Screen name="Resumo" component={Resumo}
          options={{
            tabBarLabel: 'PlayList',

            tabBarIcon: ({ color }) => (
              <MaterialIcons name="playlist-play" size={26} color={color} />
            ),
          }}
        />
         <Stack.Screen name="Tickets" component={Tickets}
          options={{
            tabBarLabel: 'PlayList',

            tabBarIcon: ({ color }) => (
              <MaterialIcons name="playlist-play" size={26} color={color} />
            ),
          }}
        />
        <Stack.Screen name="NextMonths" component={NextMonths}
          options={{
            tabBarLabel: 'NextMonths',

            tabBarIcon: ({ color }) => (
              <MaterialIcons name="playlist-play" size={26} color={color} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;