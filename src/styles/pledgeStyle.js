import { StyleSheet } from "react-native";



const pledgeStyle = StyleSheet.create({

    flexContainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
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
    }

})

export default pledgeStyle