import React, {useState,useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View, ScrollView, TextInput,KeyboardAvoidingView} from "react-native"
import { getAuth } from 'firebase/auth'
import {getDocs, doc, getDoc, collection } from 'firebase/firestore'
import RequestCard from '../components/RequestCard'
import globalStyles from '../styles/globalStyles'
import lendStyles from '../styles/lendStyles'
import pledgeStyle from '../styles/pledgeStyle'
import PledgeAmt from '../components/PledgeAmt'
const db = require('../api/fireabaseConfig')
import{ProgressBar,Colors} from 'react-native-paper'

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
        <SafeAreaView style = {globalStyles.container}>
                <FlatList data = {requests} renderItem={({item})=><RequestCard item = {item} onPress={()=>{navigation.navigate('LendDescription',{id:item.id})}}/>} ListHeaderComponent={<Text style = {lendStyles.requesteeText}>Requestees</Text>}/>
        </SafeAreaView>
    )
}

const LendDescription = ({route,navigation}) => {
    const [proposal,setProposal] = useState({})
    const [currentPledge,setCurrentPledge] = useState(0)
    const [barProgress, setProgress] = useState(0)
    const [pledgeAmount, setPledge] = useState('')
    const {id} = route.params
    const auth = getAuth()
    let progress = 0
    useEffect(()=>{
        let currentLoan = 0
        const getData = async() => {
            const docRef = doc(db,'LoanProposal',id)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setProposal(docSnap.data())
                docSnap.data().Pledging.forEach((item)=>{console.log(item.amount); currentLoan += item.amount})
                setCurrentPledge(currentLoan)



            }else{
                alert('Could Not Get Proposal!')
            }

         
           
        }
        getData()
        console.log(proposal)
        console.log(currentPledge)
        console.log(proposal.Loan)
        console.log(currentPledge/proposal.Loan)

    },[])

   
    return(
        <SafeAreaView style = {globalStyles.container}>

            <ScrollView>
            <Text style = {pledgeStyle.proposalTitle}>
                {proposal.Title}
            </Text>
            <Text style = {pledgeStyle.loan}>
                ${currentPledge} / ${proposal.Loan}
                
            </Text>
            <Text style ={pledgeStyle.name}>
                {proposal.Name}
            </Text>
            <Text style = {pledgeStyle.proposalDescription}>
                {proposal.Description}
            </Text>
          
            </ScrollView>
          
            <PledgeAmt request = {proposal.UID} id = {id} auth = {auth} />
    
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