import {View,Text,TextInput,Pressable} from "react-native"
import pledgeStyle from "../styles/pledgeStyle"
import { useState } from "react"
const db = require('../api/fireabaseConfig')
import { doc , setDoc, updateDoc, arrayUnion} from "firebase/firestore"







const PledgeAmt = ({id,auth,request}) => {
    const [pledgeAmt,setPledgeAmt] = useState()
    const uid = auth.currentUser.uid
    console.log(`requestee ${request}`)
    console.log(`currnet ${uid}`)

    const CreatePledge = async() => {
        const docRef = doc(db,'LoanProposal', id)
        if(uid !== request){
            await updateDoc(docRef,{
                Pledging: arrayUnion({'amount': pledgeAmt, 'pledger': uid})
            })
            console.log('Pledged! Refresh Proposal')
        }else{
            alert("Cannot Pledge To Own Proposal!")
        }

    }

    return(

        <View style = {pledgeStyle.flexContainer}>
            <TextInput style = {pledgeStyle.inputPledge} placeholder = "Pledge Amount" onChangeText = {(e)=>setPledgeAmt(parseInt(e))}/>
            <Pressable style = {pledgeStyle.pledgeBtn} onPress = {CreatePledge}>
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