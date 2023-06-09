import { StyleSheet } from "react-native";


const globalStyles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 3000,
        BackgroundColor:'#FFFFFF'
    },
    
    login_Container:{
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#CED0ED',
        height: 400,
        width: 320,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1.8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},

    },
    userInput_email: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        height: 45,
        width: 255,
        fontSize: 16,
        paddingLeft: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1.8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    login_Title:{
        fontSize: 30,
        color: '#6966FF',
        fontWeight: 'bold',
        marginBottom: 30,
        marginRight: 225,
    
    },


    // Same button styles for Sign Up button in Sign up page
    LoginButton:{ 
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 270,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#6966FF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    LoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // Sign up button in Login Page
    RegisterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 270,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    GetStartedText: {
        color: '#6966FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userInput_email:{
        


    },

})
export default globalStyles