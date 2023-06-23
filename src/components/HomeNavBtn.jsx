import { Pressable, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";

const HomeNavButton = ({name,onPress}) =>{

    return(
        <Pressable onPress = {onPress} style = {globalStyles.HomeNavButton}>
            <View>
                <Text style={globalStyles.HomeNavButtonText}>
                    {name}
                </Text>
            </View>
        </Pressable>
    )
}
export default HomeNavButton