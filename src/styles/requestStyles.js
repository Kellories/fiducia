import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from 'expo-font';
const requestStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'20%'
    },
    req_container:{
        flex:1,
        flexDirection:'row',
        marginLeft:'5%'
    },
    formContainer: {

    },
    form_Container: {
        flex:1,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '10%',
        height: '90%',
    },
    req_Title: {
        fontSize: 35,
        color: '#6966FF',
        fontWeight: 'bold',
        fontFamily:'Poppins',
        marginLeft:'5%',
        marginTop:'3%'
    },
    req_About: {
        flex:1,
        fontSize: 14,
        color: '#6966FF',
        fontFamily:'Poppins',
        padding:'2%'

    },
    input_container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '15%',
        paddingRight: '15%',
        width: Dimensions.get('window').width,

    },
    userInput: {
        width: '100%',
        textAlignVertical: 'center',
        paddingVertical:'3%',
        backgroundColor: '#D9D9D9',

    },
    userInputText: {
        marginVertical: 5,
        color: '#000000',
        fontSize: 18,
        fontFamily:'Poppins',

    },
    desc_userInput: {
        backgroundColor: '#E1E1E1',
        paddingVertical:'3%'


    },
    fileText: {
        marginTop:'3%',
        color: '#6966FF',
        fontSize: 18,
        marginLeft: '1%',
        fontFamily:'Poppins'
    },
    fileButton: {
        marginVertical:'3%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: "60%",
        backgroundColor: '#E1E1E1',
        borderRadius: 25,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: "60%",
        backgroundColor: '#6966FF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    submitText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily:'Poppins',

    }




});
export default requestStyles;