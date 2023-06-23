import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from './src/styles/globalStyles';
import Login from './src/pages/Login'
import AppTabs from './src/pages/AppTabs';
import Request from './src/pages/Request';
import LendStack from './src/pages/Lend';
import HomeStack from './src/pages/Home';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins": require('./assets/fonts/Poppins-Regular.ttf'),
    "PoppinsBold": require('./assets/fonts/Poppins-Bold.ttf'),
    "PoppinsMedium": require('./assets/fonts/Poppins-Medium.ttf')
  });
};
const App = () =>{
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={(err) => {
          console.log(err)
        }}
      />
    )
  }
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component={Login} options={{headerShown : false}}/>
          <Stack.Screen name = "Home" component={HomeStack} options={{headerShown : false}}/>
          <Stack.Screen name = "AppTabs" component={AppTabs} options={{headerShown : false}}/>
          <Stack.Screen name='Request' component={Request} options={{ headerShown: true}} />
          <Stack.Screen name='LendStack' component={LendStack} options={{ headerShown: true}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App