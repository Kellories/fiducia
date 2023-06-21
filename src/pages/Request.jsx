import { useState } from "react";
import { SafeAreaView , TextInput} from "react-native";
import DocumentPicker, { pickDirectory } from 'react-native-document-picker'


const Request = () => {
    const [name,setName ] = useState('')
    const [proposalId,setProposalID] = useState('')
    const [loan,setLoan] =useState('')
    const [description,setDescription] = useState('')
    const [file,setFile] = useState()

    const pickFile = async() => {
        try{
            const response = await pickDirectory()
            const file = response.uri
            return setFile(file)
        }catch(err){
            console.log(err)
        }

    }

    return(
      <SafeAreaView>
        <TextInput placeholder = "name"></TextInput>
        <TextInput placeholder = 'proposalID'></TextInput>
        <TextInput placeholder="loan value "></TextInput>
        <TextInput placeholder="description"></TextInput>
        <Text>File(s)</Text>
        <Pressable onPress = {pickFile} >
            <View>
                <Text> Choose A File</Text>
            </View>
        </Pressable>
      </SafeAreaView>  
    )

}
export default Request