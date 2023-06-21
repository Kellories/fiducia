import React, {useState,useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View, ScrollView} from "react-native"
import {getDocs, doc, getDoc, collection } from 'firebase/firestore'
import RequestCard from '../components/RequestCard'
const db = require('../api/fireabaseConfig')
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const Lend = ({navigation}) => {
    const [requests,setRequest] =useState([])

    useEffect(()=>{
        const getData = async() =>{
            let requestArr = []
            const docSnap = await getDocs(collection(db,'LoanProposal'))
            docSnap.forEach((doc)=>{
                data = doc.data()
                data['id'] = doc.id
                requestArr.push(data)
            })
            setRequest(requestArr)
        }
        getData()


    },[])


    return(
        <SafeAreaView>
            <Text>Requestees</Text>
            <FlatList data = {requests} renderItem={({item})=><RequestCard item = {item} onPress={()=>{navigation.navigate('LendDescription',{id:item.id})}}/>}/>
        </SafeAreaView>
    )
}

const LendDescription = ({route,navigation}) => {
    const [proposal,setProposal] = useState({})
    const {id} = route.params
    console.log(id)
    useEffect(()=>{
        const getData = async() => {
            const docRef = doc(db,'LoanProposal',id)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setProposal(docSnap.data())
                console.log(docSnap.data())
            }else{
                alert('Could Not Get Proposal!')
            }
            setProposal(docSnap.data())
        }
        getData()
    },[])


    return(
        <SafeAreaView>
            <ScrollView>
            <Text>
                {proposal.Loan}
            </Text>
            <Text>
                {proposal.Name}
            </Text>
            <Text>
                {proposal.Description}
            </Text>
            </ScrollView>
        </SafeAreaView>
    )
}


const LendStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Lend" component={Lend}/>
            <Stack.Screen name = 'LendDescription' component = {LendDescription}/>
        </Stack.Navigator>
    )
}
export default LendStack