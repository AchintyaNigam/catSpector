import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator()

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

export function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
