import React, {useState,useEffect} from 'react'
import {Text, SafeAreaView, FlatList, View} from "react-native"
import {getDocs, doc,collection } from 'firebase/firestore'
const db = require('../api/fireabaseConfig')



const Lend = () => {
    const [requests,setRequest] =useState([])

    useEffect(()=>{
        const getData = async() =>{
            let requestArr = []
            const docSnap = await getDocs(collection(db,'LoanProposal'))
            docSnap.forEach((doc)=>{
                console.log(doc)
                console.log(doc.data())
                requestArr.push(doc.data())
            })
            setRequest(requestArr)
        }
        getData()


    },[])


    return(
        <SafeAreaView>
            <Text>Requestees</Text>
            <FlatList data = {requests} renderItem={({item})=><Text>{item.Name}            ${item.Loan}</Text>}/>
        </SafeAreaView>
    )
}
export default Lend