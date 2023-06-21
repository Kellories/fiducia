import { StyleSheet, Dimensions } from "react-native";


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

})
export default globalStyles