import {Text, SafeAreaView} from "react-native"
import Request from "./Request"
import LendStack from "./Lend";
import HomeNavButton from "../components/HomeNavBtn"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
    return(
        <SafeAreaView>
            <HomeNavButton name = "Request Proposal" onPress={()=>{navigation.navigate("Request")}}/>
            <HomeNavButton name = "Lend" onPress={()=>{navigation.navigate("LendStack")}}/>
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