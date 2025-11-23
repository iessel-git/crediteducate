// File: src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard/Dashboard';
import Accounts from './screens/Accounts';
import Scenarios from './screens/Scenarios';
import Learn from './screens/Learn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="Scenarios" component={Scenarios} />
          <Stack.Screen name="Learn" component={Learn} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
