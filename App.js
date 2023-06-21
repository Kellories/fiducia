import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from './src/styles/globalStyles';
import Login from './src/pages/Login'
import AppTabs from './src/pages/AppTabs';
import Request from './src/pages/Request';
import LendStack from './src/pages/Lend';

const Stack = createNativeStackNavigator()

const App = () =>{
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "AppTabs" component={AppTabs} options={{headerShown : false}}/>
          <Stack.Screen name='Request' component={Request} options={{ headerShown: true}} />
          <Stack.Screen name='LendStack' component={LendStack} options={{ headerShown: true}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App