import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


const pledgeStyle = StyleSheet.create({

    flexContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'6%',

    },
    pledgeBtn:{
        backgroundColor:'#3D3BB8',
        padding:'3%',
        borderRadius:7
    },
    inputPledge:{
        padding:'3%',
        textAlign:'center',
        backgroundColor:'#f5f5f5',
        width:'75%',
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
        marginTop:'5%',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Poppins'
    },
    fileBtn:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        flexDirection:'row',
        backgroundColor:'#6966FF',
        width:'25%',
        marginLeft:'5%',
        marginTop:'2%',
        padding:3,
        borderRadius:10

    }


})



export default pledgeStyle