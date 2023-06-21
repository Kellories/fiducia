import React, { useState } from "react";
import { SafeAreaView, TextInput, Pressable, Text, View, Alert } from "react-native";
import LoginButton from "../components/LoginButton";
import globalStyles from "../styles/globalStyles";
import signUpStyles from "../styles/signUpStyles";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { doc, setDoc } from "@firebase/firestore";
const db = require('../api/fireabaseConfig')


const Stack = createNativeStackNavigator()


const UserLogin = ({ navigation }) => {
    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style={globalStyles.container}>

            <View style={globalStyles.loginContainer}>
                <Text style={globalStyles.login_Title}>Login</Text>
                <View style={globalStyles.login_Container}>
                    <View style={globalStyles.userInput}>
                        <Text style={globalStyles.userInputText}>Email</Text>
                        <TextInput
                            placeholderTextColor="#6966FF"
                            onChangeText={(e) => { setEmail(e) }} />
                    </View>
                    <View style={globalStyles.userInput}>
                        <Text style={globalStyles.userInputText}>Password</Text>
                        <TextInput
                            placeholderTextColor="#6966FF"
                            onChangeText={(e) => (setPassword(e))} />
                    </View>

                    <Pressable onPress={() => {
                        console.log(email, password)

                        signInWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                const user = userCredential.user
                                console.log(user)
                                navigation.navigate("AppTabs")
                            })
                            .catch((error) => {
                                console.log(error.code)
                                console.log(error.message)
                            })

                    }}
                        style={globalStyles.LoginButton}>
                        <Text style={globalStyles.LoginText}> Login </Text>
                    </Pressable>
                </View>



                <Text style={globalStyles.register_text}>Don't have an account?</Text>
                <Pressable onPress={() => { navigation.navigate('userRegister') }}
                    style={globalStyles.RegisterButton}>
                    <Text style={globalStyles.GetStartedText}>Sign up</Text>

                </Pressable>
            </View>


        </SafeAreaView>
    )
}

const UserSignup = ({ navigation }) => {
    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')


    return (
        <SafeAreaView style={globalStyles.container}>

            <View style={globalStyles.loginContainer}>
                <Text style={signUpStyles.signUp_Title}>Sign up</Text>



                <View style={globalStyles.login_Container}>

                    <View style={signUpStyles.userInput}>
                        <Text style={signUpStyles.userInputText}>Username</Text>
                        <TextInput
                            placeholderTextColor="#6966FF"
                            onChangeText={(e) => setUsername(e)} />
                    </View>

                    <View style={signUpStyles.userInput}>
                        <Text style={signUpStyles.userInputText}>Email</Text>
                        <TextInput
                            placeholderTextColor="#6966FF"
                            onChangeText={(e) => { setEmail(e) }} />
                    </View>

                    <View style={signUpStyles.userInput}>
                        <Text style={signUpStyles.userInputText}>Password</Text>
                        <TextInput
                            placeholderTextColor="#6966FF"
                            onChangeText={(e) => (setPassword(e))} />
                    </View>


                    <Pressable onPress={() => {
                        console.log(email, password)

                        createUserWithEmailAndPassword(auth, email, password)
                            .then(() => {

                                const docRef = doc(db, 'users', auth.currentUser.uid)
                                data = {
                                    'username': username,
                                    'email': email
                                }
                                setDoc(docRef, data)
                                    .then(() => {
                                        console.log("Successfully registered!")
                                        alert("User created! Please Login!")
                                        navigation.navigate('userLogin')
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                    })


                            })
                            .catch((error) => {
                                console.log(error.code)
                                console.log(error.message)
                            })

                    }}
                        style={signUpStyles.signUpButton}>
                            <Text style={signUpStyles.SignupText}> Sign up </Text>

                    </Pressable>
                </View>

                <Pressable>
               </Pressable>
                    <Text style={signUpStyles.alreadyUser_text}>Already a user?</Text>
                <Pressable onPress={() => { navigation.navigate('userLogin') }}
                    style={globalStyles.RegisterButton}>
                    <Text style={globalStyles.GetStartedText}>Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>





    )

}
const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='userLogin' component={UserLogin} options={{ headerShown: false }} />
            <Stack.Screen name='userRegister' component={UserSignup} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
export default LoginStack