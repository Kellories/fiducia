import { useState } from "react";
import { SafeAreaView , TextInput, Text, Pressable, View} from "react-native";
import { getStorage,ref,uploadBytes } from 'firebase/storage'
import * as DocumentPicker from 'expo-document-picker'

// firebase stuff
import { doc, setDoc,getDoc } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
const db = require('../api/fireabaseConfig')
const storage = getStorage()

const Request = () => {
    const auth = getAuth()
    const [name,setName ] = useState('')
    const [proposalId,setProposalID] = useState('')
    const [loan,setLoan] =useState('')
    const [description,setDescription] = useState('')
    const [title,setTitle] = useState('')
    const [file,setFile] = useState()
    const [fileName,setFileName] =useState()
    const pickFile = async() => {
        const file = await DocumentPicker.getDocumentAsync()
        console.log(file)
        
        if(file.type === 'cancel'){
            return;
        }
        try{
            const response = await fetch(file.uri)
            const blob = await response.blob()
            setFileName(file.name)
            return setFile(blob)
        }catch(err){
            console.log(err)
        }

    }

    const createProposal = async() => {
        const proposalFileRef = ref(storage, `proposal/${proposalId}/${fileName}`)
        if(file != undefined){
            try{
                const response = await uploadBytes(proposalFileRef, file)
                console.log(response)
            }catch(err){
                console.log(err)
            }

        }
        console.log(proposalId)
        const docRef = doc(db,'LoanProposal',proposalId)
        const data = {
            'Name': name,
            'Title': title,
            'Description': description,
            'Loan': loan,
            'UID': auth.currentUser.uid
        }
        console.log(data)
        setDoc(docRef,data)
            .then(()=>{
                alert("Proposal Submitted!")
            })
            .catch(()=>{
                console.log(err)
                alert("Could not submit Proposal!")
            })    



    }

    return(
      <SafeAreaView>
        <TextInput placeholder = "name" onChangeText = {(e)=>setName(e)}></TextInput>
        <TextInput placeholder = 'title' onChangeText={(e)=>setTitle(e)}/>
        <TextInput placeholder = 'proposalID' onChangeText = {(e)=>setProposalID(e)}></TextInput>
        <TextInput placeholder= "loan value" onChangeText={(e)=>setLoan(e)}></TextInput>
        <TextInput placeholder="description" onChangeText={(e)=>setDescription(e)}></TextInput>
        <Text>File(s)</Text>
        <Pressable onPress = {pickFile} >
            <View>
                <Text> Choose A File</Text>
            </View>
        </Pressable>
        <Pressable onPress = {createProposal}>
            <View>
                <Text>Submit Proposal</Text>
            </View>
        </Pressable>
      </SafeAreaView>  
    )

}
export default Request