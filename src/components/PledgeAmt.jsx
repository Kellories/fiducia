import {View,Text,TextInput,Pressable} from "react-native"
import pledgeStyle from "../styles/pledgeStyle"
import { useState } from "react"
const db = require('../api/fireabaseConfig')
import { doc , setDoc, updateDoc, arrayUnion, arrayRemove, getDoc, deleteDoc} from "firebase/firestore"







const PledgeAmt = ({id,auth,request}) => {
    const [pledgeAmt,setPledgeAmt] = useState()
    const uid = auth.currentUser.uid
    console.log(`requestee ${request}`)
    console.log(`currnet ${uid}`)

    const CreatePledge = async() => {
        const docRef = doc(db,'LoanProposal', id)
        if(uid !== request){
            let docSnap = await getDoc(docRef)
            let oldAmount = 0
            let existingPledge = 0
            for(i in docSnap.data().Pledging){
                if(docSnap.data().Pledging[i].pledger === uid){
                    existingPledge += docSnap.data().Pledging[i].amount
                    oldAmount = docSnap.data().Pledging[i].amount
                }
            }
            let newValue = 0
            if(existingPledge != 0 && pledgeAmt != NaN){
                newValue = existingPledge + pledgeAmt
            }
            if(newValue != 0){

                await updateDoc(docRef,{
                    Pledging: arrayRemove({'amount':oldAmount, 'pledger':uid })
                })
                await updateDoc(docRef,{
                    Pledging: arrayUnion({'amount':newValue, 'pledger':uid})
                })
            }else{
              await updateDoc(docRef,{
                Pledging: arrayUnion({'amount':pledgeAmt, 'pledger':uid})
              })
            }
            let check = 0
            let lenders = []
            let lendAmounts = []
            docSnap = await getDoc(docRef)
            for(i in docSnap.data().Pledging){
                check += docSnap.data().Pledging[i].amount 
                lenders.push(docSnap.data().Pledging[i].pledger)
                lendAmounts.push((docSnap.data().Pledging[i].amount).toString())
            }
            console.log(docSnap.data().UID)
            console.log(lenders)
            console.log(lendAmounts)
            if(check >= docSnap.data().Loan){

                try{
                    await fetch('http://13.212.100.69:5000/createLoanLedger',{
                        method:"POST", 
                        headers: { 'Content-Type': 'application/json' },
                        body:JSON.stringify({
                            borrower: docSnap.data().UID,
                            lenders: lenders,
                            lendAmounts: lendAmounts
                        })
                    }).then(async (response)=>{
                        console.log(response.json())
                        try{
                            await deleteDoc(docRef)
                        }catch(err){
                            console.log(err)
                        }

                    })
                }catch(err){
                    console.log(err)
                }


            }
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