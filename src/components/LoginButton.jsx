import React from "react";
import { Pressable, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";
const LoginButton = ({onPress}) => {
    return(
         <Pressable style = {globalStyles.LoginButton}>
            <View>
                   <Text>Login</Text>
            </View>
         </Pressable>
    )
}
export default LoginButton