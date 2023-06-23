import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


const completedLoanStyle = StyleSheet.create({

    flexContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'6%',

    },
    viewOnBlockchainBtn:{
        padding:'3%',
        textAlign:'center',
        backgroundColor:'#f5f5f5',
        width:'75%',
        borderRadius:7
    },
    shareBtn:{
        backgroundColor:'#F5F5F5',
        padding:'3%',
        borderRadius:7
    },
    proposalTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'6%',
        marginTop:'10%',
        marginBottom:'3%',
        fontFamily:'Poppins'
    },
    loan:{
        fontSize:58,
        marginLeft:'6%',
        fontWeight:'500',
        color:'#5351BD',
        fontFamily:'Poppins'
    },
    proposalDescription:{
        marginLeft:'6%',
        width:'90%',
        marginTop:'2%'
    },
    name:{
        marginLeft:'6%',
        marginTop:'2%',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Poppins'
    },
    loanersText:{
        marginLeft:'6%',
        marginTop:'5%',
        marginBottom: '4%',
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Poppins',
        color: "#B3B3B3"
    },
    usernameText:{
        marginLeft:'6%',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Poppins'
    },
    amountText:{
        fontSize: 36,
        marginLeft:'6%',
        marginBottom: '1%',
        fontWeight:'bold',
        color:'#5351BD',
        fontFamily:'Poppins'
    }


})



export default completedLoanStyle