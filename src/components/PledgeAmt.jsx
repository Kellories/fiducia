import {View,Text,TextInput,Pressable} from "react-native"
import pledgeStyle from "../styles/pledgeStyle"
import { useState } from "react"
const db = require('../api/fireabaseConfig')







const PledgeAmt = ({id,auth,request}) => {
    const [pledgeAmt,setPledgeAmt] = useState()
    const uid = auth.currentUser.uid
    console.log(`requestee ${request}`)
    console.log(`currnet ${uid}`)

    const CreatePledge = async() => {
        
    }

    return(

        <View style = {pledgeStyle.flexContainer}>
            <TextInput style = {pledgeStyle.inputPledge} placeholder = "Pledge Amount" onChangeText = {(e)=>setPledgeAmt(e)}/>
            <Pressable style = {pledgeStyle.pledgeBtn}>
                <View>
                    <Text style = {{color:'white'}}>
                        Pledge
                    </Text>
                </View>
            </Pressable>
        </View>


    )

}
export default PledgeAmt