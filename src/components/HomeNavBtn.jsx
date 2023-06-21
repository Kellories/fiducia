import { Pressable, Text, View } from "react-native";

const HomeNavButton = ({name,onPress}) =>{

    return(
        <Pressable onPress = {onPress}>
            <View>
                <Text>
                    {name}
                </Text>
            </View>
        </Pressable>
    )
}
export default HomeNavButton