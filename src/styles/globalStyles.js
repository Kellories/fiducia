import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from 'expo-font';


const globalStyles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        padding:8,
        margin:'auto'
    },
    loginContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'column',
        width: Dimensions.get('window').width

        
    },
    login_Container:{
        alignSelf:'center',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        width:'80%',
        height:'60%',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1.8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},


    },
    
    login_Title:{
        fontSize: 35,
        marginLeft: '1%',
        color: '#6966FF',
        fontWeight: 'bold',
        left:'10%',
        bottom:'3%'
        
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
        fontSize:18,
       
    },
    
    register_text : {
        alignSelf:'center',
        top:'4%'
    },


    // Same button styles for Sign Up button in Sign up page
    LoginButton:{ 
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
    LoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // Sign up button in Login Page
    RegisterButton: {
        alignSelf:'center',
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        height:'5%',
        width:"80%",
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

    // HomeNavBtn in Home page
    HomeNavButton: {
        backgroundColor: '#FFFFFF',
        width: '23%',
        height: '100%',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'flex-end',
        shadowColor: '#1E1E1E',
        shadowOpacity:0.1,
        shadowOffset: {width: 5, height: 10},
        shadowOpacity: 2,
        shadowRadius: 10,
    },
    HomeNavButtonText: {
        fontSize: 14,
        color: '#6966FF',
        fontWeight: '500',
        textAlign: 'center',
        margin: 10
    },
    
    // HomeNav 
    HomeNavContainer: {
        height: '50%',
        backgroundColor: '#6966FF',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    HomeNavLayout: {
        height: '47%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    HomeNavTextHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        margin: 10,
        marginLeft: 25
    }
    
})
export default globalStyles