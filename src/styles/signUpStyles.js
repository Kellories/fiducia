import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from 'expo-font';

const signUpStyles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'white',
        padding:8,
        margin:'auto'
    },
    userInput: {
        marginTop:'5%',
        width: '90%',
        textAlignVertical:'center',
        borderBottomWidth:3,
        borderBottomColor:'#6966FF',
     },
     userInputText:{
         marginBottom:'5%',
         color: '#6966FF',
         fontSize: 18,
         fontFamily:'Poppins',
     },
    signUp_Title:{
        fontSize: 35,
        marginLeft: '1%',
        color: '#6966FF',
        left:'10%',
        bottom:'3%',
        fontFamily:'Poppins',
    },
    alreadyUser_text : {
        alignSelf:'center',
        top:'4%',
        fontFamily:'Poppins'
    },


    // Same button styles for Sign Up button in Sign up page
    signUpButton:{ 
        alignItems: 'center',
        justifyContent: 'center',
        height:'10%',
        width:"90%",
        backgroundColor: '#6966FF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    // Button 'sign up' text
    SignupText: {
        color: 'white',
        fontSize: 20,
        fontFamily:'Poppins',
    },
    

})
export default signUpStyles