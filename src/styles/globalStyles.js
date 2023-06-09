import { StyleSheet } from "react-native";


const globalStyles = StyleSheet.create({
    
    container:{
        flex:1,
        BackgroundColor:'white'
    },

    // Same button styles for Sign Up button in Sign up page
    LoginButton:{
        text: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6966FF',
        maxWidth: 282,
        minHeight: 50,
        borderRadius: 25,
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 4},
    },
    // Sign up button in Login Page
    WhiteButton: {
        text: '#6966FF',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        maxWidth: 282,
        minHeight: 50,
        borderRadius: 25,
        marginLeft: 50,
        marginRight: 50,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 4},
    }

})
export default globalStyles