import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from 'expo-font';
const requestStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
        margin: 'auto'
    },

    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width
    },
    form_Container: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '10%',
        height: '90%',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1.8,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },


    },
    req_Title: {
        fontSize: 35,
        marginLeft: '1%',
        color: '#6966FF',
        fontWeight: 'bold',
        left: '10%',
        fontFamily:'Poppins',
    },
    req_About: {
        fontSize: 14,
        color: '#6966FF',
        fontFamily:'Poppins',

    },
    input_container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '15%',
        width: Dimensions.get('window').width,

    },
    userInput: {
        width: '80%',
        textAlignVertical: 'center',
        height: '30%',
        backgroundColor: '#D9D9D9',
        borderRadius: '20%'
    },
    userInputText: {
        marginVertical: 5,
        color: '#000000',
        fontSize: 18,
        fontFamily:'Poppins',

    },
    desc_userInput: {
        backgroundColor: '#E1E1E1',
        borderRadius: '20%',
        marginBottom: '5%',
        width: '80%',
        height: '60%',

    },
    fileText: {
        marginBottom: '5%',
        color: '#6966FF',
        fontSize: 18,
        marginLeft: '1%',
        fontFamily:'Poppins'
    },
    fileButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
        width: "60%",
        backgroundColor: '#E1E1E1',
        borderRadius: 25,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
        width: "40%",
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