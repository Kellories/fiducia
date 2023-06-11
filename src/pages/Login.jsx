import React, { useState } from "react";
import { SafeAreaView , TextInput, Pressable, Text, Alert} from "react-native";
import LoginButton from "../components/LoginButton";
import globalStyles from "../styles/globalStyles";
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import app from "../api/fireabaseConfig";


const Stack = createNativeStackNavigator()

const UserLogin = ({navigation}) => {
    const auth = getAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return(
        <SafeAreaView> 
            <TextInput placeholder = "Email" onChangeText={(e)=>{setEmail(e)}}/>
            <TextInput placeholder="Password" onChangeText= {(e)=>(setPassword(e))}/>
            <Pressable onPress={()=>{navigation.navigate('userRegister')}}><Text>New Here? Register.</Text></Pressable>
            <Pressable onPress={()=>{
                console.log(email,password)

                signInWithEmailAndPassword(auth,email,password)
                .then((userCredential)=>{
                    const user = userCredential.user
                    console.log(user)
                })
                .catch((error)=>{
                    console.log(error.code)
                    console.log(error.message)
                })

            }} 
            style = {globalStyles.LoginButton}>
                <Text> Login </Text>
            </Pressable>
        </SafeAreaView>
    )
}
const UserSignup = ({navigation}) =>{
    const auth = getAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return(
        <SafeAreaView>
            <TextInput placeholder = "Email" onChangeText={(e)=>{setEmail(e)}}/>
            <TextInput placeholder="Password" onChangeText= {(e)=>(setPassword(e))}/>
            <Pressable onPress={()=>{navigation.navigate('userLogin')}}><Text>Already a User?</Text></Pressable>
            <Pressable onPress={()=>{
                console.log(email,password)

                createUserWithEmailAndPassword(auth,email,password)
                .then(()=>{
                   alert('Account Created!' , "Please Log In!")
                    navigation.navigate('userLogin')
                })
                .catch((error)=>{
                    console.log(error.code)
                    console.log(error.message)
                })

            }} 
            style = {globalStyles.LoginButton}>
                <Text> Register </Text>
            </Pressable>
        </SafeAreaView>





    )

}
const LoginStack = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name = 'userLogin' component ={UserLogin} options = {{headerShown : false}}/>
        <Stack.Screen name = 'userRegister' component = {UserSignup} options = {{headerShown: false}}/>
    </Stack.Navigator>
    )

}
export default LoginStack