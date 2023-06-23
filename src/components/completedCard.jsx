import { Pressable, Text, View } from "react-native";
import { useState, useEffect } from "react";
import requestCardStyle from '../styles/requestCard'

const CompletedCard = ({item,onPress}) => {
    console.log(item)
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        let total = 0
        for(i in item.lendAmounts){
            total += item.lendAmounts[i]
        }
        setTotal(total)

        const getBorrowerName = () =>{

        }
        
    },[])

    console.log(total)
    return(
        <Pressable onPress = {onPress}>
            <View style = {requestCardStyle.flexContainer}>
                <Text>${total}</Text>
            </View>
        </Pressable>
    )
}
export default CompletedCard