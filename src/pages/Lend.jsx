
import React, {useState,useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View, ScrollView, TextInput,KeyboardAvoidingView,Linking,Pressable} from "react-native"
import { getAuth } from 'firebase/auth'
import { getDocs, doc, getDoc, collection } from 'firebase/firestore'
import RequestCard from '../components/RequestCard'
import globalStyles from '../styles/globalStyles'
import lendStyles from '../styles/lendStyles'
import pledgeStyle from '../styles/pledgeStyle'
import PledgeAmt from '../components/PledgeAmt'
import CompletedCard from '../components/completedCard'
const db = require('../api/fireabaseConfig')
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import{ProgressBar,Colors} from 'react-native-paper'

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import completedLoanStyle from '../styles/completedLoanStyles'
const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator()

const LendTab = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Pending" component={PendingStack} />
            <Tab.Screen name="Completed" component={CompletedStack} />

        </Tab.Navigator>
    )
}

const FundedLoans = ({ navigation }) => {
    const [loans, setLoans] = useState([])
    const [data, setData] = useState()
    useEffect(() => {
        const getFundedLoans = async () => {
            let loansArr = []
            const response = await fetch('http://13.212.100.69:5000/getLoanLedger', { method: "GET" })
            const fundedLoans = await response.json()
            setData(fundedLoans)
            fundedLoans.forEach((loan) => {
                for (i in loan.lendAmounts) {
                    loan.lendAmounts[i] = parseFloat(loan.lendAmounts[i])
                }
                loansArr.push(loan)
            })
            setLoans(loansArr)
        }
        getFundedLoans()
    }, [])


    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={lendStyles.requesteeText}>Completed Proposals</Text>
            <ScrollView>
                {loans.map((item) => {
                    return (
                        <CompletedCard item={item} onPress={() => { navigation.navigate('CompletedDescription', { data: item }) }} />
                    )
                })}
            </ScrollView>


        </SafeAreaView>
    )



}
// Loan Details page 
const FundedLoansDescription = ({ route, navigation }) => {
    const { data } = route.params
    const [lenders, setLenders] = useState([])
    const [borrowerData, setData] = useState(data)

    console.log('data')
    console.log(data)
    useEffect(() => {
        let lendersArr = []

        const getUsername = async () => {

            for (i in data.lenders) {
                console.log(data.lenders[i])
                const docSnap = await getDoc(doc(db, 'users', data.lenders[i]))
                lendersArr.push({ username: docSnap.data().username, amount: data.lendAmounts[i] })

            }
            const docSnap = await getDoc(doc(db, 'users', data.borrower))
            setData({ username: docSnap.data().username, loan: data.lendAmounts })

            console.log(lendersArr)

            setLenders(lendersArr)
        }
        getUsername()
    }, [])
    console.log(lenders)

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Text style={completedLoanStyle.proposalTitle}>
                  {data.loanTitle}
                </Text>

                <Text style={completedLoanStyle.loan}>
                    {borrowerData.loan}
                </Text>
                <Text style={completedLoanStyle.name}>
                    {borrowerData.username}
                </Text>
                <Text style={completedLoanStyle.loanersText}>Loaners</Text>

                <FlatList data={lenders} renderItem={({ item }) =>
                    <View>
                        <Text style={completedLoanStyle.amountText}>{item.amount}</Text>
                        <Text style={completedLoanStyle.usernameText}>{item.username}</Text>
                    </View>} />
            </ScrollView>

            <View style={completedLoanStyle.flexContainer}>
                <Pressable style={completedLoanStyle.viewOnBlockchainBtn}>
                    <View>
                        <Text style={{ color: 'black' }}>
                            View on Blockchain
                        </Text>
                    </View>
                </Pressable>
        
                <Pressable style={completedLoanStyle.shareBtn}>
                    <View>
                        <Text style={{ color: 'black' }}>
                            Share
                        </Text>
                    </View>
                </Pressable>
            </View>

        </SafeAreaView>




    )


}

const Lend = ({ navigation }) => {
    const [requests, setRequest] = useState([])

    useEffect(() => {
        const getData = async () => {
            let requestArr = []
            const docSnap = await getDocs(collection(db, 'LoanProposal'))
            docSnap.forEach((doc) => {
                data = doc.data()
                data['id'] = doc.id
                requestArr.push(data)
            })
            setRequest(requestArr)
        }
        getData()


    }, [])


    return (
        <SafeAreaView style={globalStyles.container}>
            <FlatList data={requests} renderItem={({ item }) => <RequestCard item={item} onPress={() => { navigation.navigate('PendingDescription', { id: item.id }) }} />} ListHeaderComponent={<Text style={lendStyles.requesteeText}>Requestees</Text>} />
        </SafeAreaView>
    )
}



const LendDescription = ({ route, navigation }) => {
    const [proposal, setProposal] = useState({})
    const [currentPledge, setCurrentPledge] = useState(0)
    const [barProgress, setProgress] = useState(0)
    const [pledgeAmount, setPledge] = useState('')

    const [fileUrl,setFileUrl] = useState('')
    const {id} = route.params

    const auth = getAuth()
    useEffect(() => {
        let currentLoan = 0
        const getData = async () => {
            const docRef = doc(db, 'LoanProposal', id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setProposal(docSnap.data())
                docSnap.data().Pledging.forEach((item) => { console.log(item.amount); currentLoan += item.amount })
                setCurrentPledge(currentLoan)



            } else {
                alert('Could Not Get Proposal!')
            }



        }
        const getFilePath = async()=>{
            const storage = getStorage()
            let path = " "
            try{
                const listResponse = await(listAll(ref(storage,'proposal/'+id+'/')))
                listResponse.items.forEach((itemRef)=>{
                    path = itemRef._location.path_
                })
                console.log(path)
                const response = await getDownloadURL(ref(storage,path))
                setFileUrl(response)
                console.log(response)
                return response
            }catch(err){
                console.log(err)
            }
    
    
        }
        getFilePath()
        getData()
  
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
                <Pressable onPress = {async()=>{await Linking.openURL(fileUrl)}}><View style = {pledgeStyle.fileBtn}><Text style = {{color:'white'}}>View Files</Text></View></Pressable>
                <Text style = {pledgeStyle.proposalDescription}>
                    {proposal.Description}
                </Text>
              
                </ScrollView>
              
                <PledgeAmt request = {proposal.UID} id = {id} auth = {auth} />
        
            </SafeAreaView>
        )
    


}


const PendingStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="PendingList" component={Lend} options={{ headerShown: false }} />
            <Stack.Screen name="PendingDescription" component={LendDescription} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

const CompletedStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CompletedList" component={FundedLoans} options={{ headerShown: false }} />
            <Stack.Screen name="CompletedDescription" component={FundedLoansDescription} />
        </Stack.Navigator>
    )
}

export default LendTab