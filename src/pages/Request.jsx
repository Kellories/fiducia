import { useState } from "react";
import { SafeAreaView, TextInput, Text, Pressable, View, Keyboard, ScrollView, KeyboardAvoidingView } from "react-native";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import requestStyles from "../styles/requestStyles";
import * as DocumentPicker from 'expo-document-picker'
import BackButton from "../components/backButton";

// firebase stuff
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'
const db = require('../api/fireabaseConfig')
const storage = getStorage()

const Request = ({ navigation }) => {
    const auth = getAuth()

    const [name, setName] = useState('')
    const [proposalId, setProposalID] = useState('')
    const [loan, setLoan] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState()

    // pickFile fn -> allows user to pick a file from their mobile device
    const pickFile = async () => {

        const file = await DocumentPicker.getDocumentAsync()
        // gets file object info
        console.log(file)

        if (file.type === 'cancel') {
            return;
        }
        try {

            const response = await fetch(file.uri)
            // fetch file data from mobile device file path

            const blob = await response.blob()
            // changes base64 string to blob type

            setFileName(file.name)
            return setFile(blob)
        } catch (err) {
            console.log(err)
        }

    }

    const createProposal = async () => {
        let docRefarr = doc(db, 'LoanProposal', 'arr');
        let arr = await getDoc(docRefarr);
        arr = arr.data()
        let newID = Math.max(arr) + 1;
        let newArr = arr.push(newID);

        let data = {
            'proposalID': newArr
        };
        // const response = await deleteDoc(db,'LoanProposal','arr')
        setDoc(docRefarr, data)
            .then(() => {
                alert("Request submitted");

            })
            .catch(() => {
                alert("Could not submit request");
            });
               
        const proposalPath = ref(storage, `proposal/${proposalId}/${fileName}`);

        if (file != undefined) {
            try {
                const response = await uploadBytes(proposalPath, file);
                console.log(response);
            } catch (err) {
                alert("Could not upload file!");
                console.log(err);
            }
        }

        let docRef = doc(db, 'LoanProposal', proposalId);
        data = {
            'Name': name,
            'Title': title,
            'Description': description,
            'Loan': loan,
            'UID': auth.currentUser.uid
        }
        console.log(data)
        setDoc(docRef, data)
            .then(() => {
                alert("Proposal Submitted!")
            })
            .catch(() => {
                console.log(err)
                alert("Could not submit Proposal!")
            })



    }

    return (

        <SafeAreaView style={requestStyles.container}>
            <BackButton onPress={() => { navigation.navigate('AppTabs') }} />
            <View style={requestStyles.req_container}>
                <Text style={requestStyles.req_Title}>Loan Request</Text></View>
            <View style={requestStyles.formContainer}>

                <View style={requestStyles.form_Container}>
                    <Text style={requestStyles.req_About}>Fill in the fields with information about your loan proposal</Text>

                    <View style={requestStyles.input_container}>
                        <Text style={requestStyles.userInputText}>Name</Text>
                        <View style={requestStyles.userInput}>
                            <TextInput
                                placeholderTextColor="#6966FF"
                                onChangeText={(e) => { setName(e) }} />
                        </View>
                    </View>
                    <View style={requestStyles.input_container}>
                        <Text style={requestStyles.userInputText}>Title</Text>
                        <View style={requestStyles.userInput}>

                            <TextInput
                                placeholderTextColor="#6966FF"
                                onChangeText={(e) => setTitle(e)}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={requestStyles.input_container}>
                        <Text style={requestStyles.userInputText}>Loan Value</Text>
                        <View style={requestStyles.userInput}>

                            <TextInput
                                placeholderTextColor="#6966FF"
                                onChangeText={(e) => setLoan(e)}
                                keyboardType="phone-pad">
                            </TextInput>
                        </View>
                    </View>

                    <View style={requestStyles.input_container}>
                        <Text style={requestStyles.userInputText}>Description</Text>
                        <View style={requestStyles.desc_userInput}>

                            <TextInput
                                placeholderTextColor="#6966FF"
                                onChangeText={(e) => setDescription(e)}>
                            </TextInput>
                        </View>
                    </View>

                    <Text style={requestStyles.fileText}>File(s)</Text>
                    <Pressable onPress={pickFile}
                        style={requestStyles.fileButton}>
                        <View>
                            <Text> Upload File</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={createProposal}
                        style={requestStyles.submitButton}>
                        <View>
                            <Text style={requestStyles.submitText}>Submit</Text>
                        </View>
                    </Pressable>




                </View>

            </View>
        </SafeAreaView>
    )

}
export default Request