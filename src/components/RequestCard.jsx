import { Pressable, Text, View } from "react-native";
import requestCardStyle from '../styles/requestCard'

const RequestCard = ({item,onPress}) => {
    return(
        <Pressable onPress = {onPress}>
            <View style = {requestCardStyle.flexContainer}>
                <Text>{item.Name}</Text>
                <Text>${item.Loan}</Text>
            </View>
        </Pressable>
    )
}
export default RequestCard