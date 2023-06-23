import {View, Text, SafeAreaView} from "react-native"
import Request from "./Request"
import LendStack from "./Lend";
import HomeNavButton from "../components/HomeNavBtn"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import globalStyles from "../styles/globalStyles";
const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={globalStyles.HomeNavContainer}>
                <Text style={globalStyles.HomeNavTextHeader}>Fast Actions</Text>
                <View style={globalStyles.HomeNavLayout}>
                    <HomeNavButton name = "Request" onPress={()=>{navigation.navigate("Request")}}/>
                    <HomeNavButton name = "Lend" onPress={()=>{navigation.navigate("LendStack")}}/>
                    <HomeNavButton name = "Repay" onPress={()=>{console.log('Repay btn pressed')}}/>
                </View>
            </View>
        </SafeAreaView>
    )

}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: true }} />
        </Stack.Navigator>
    )

}
export default HomeStack