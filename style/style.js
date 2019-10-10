import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    heading: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 20,
    },

    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        margin: 10,
    },

    image: {
        height: 100,
        width: 100,
    },

    signupButton: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },

    signupTextCont: {

        justifyContent: 'center',
        paddingTop: 10,
        flexDirection: 'row'
    },

    signupText: {
        color: 'black',
        fontSize: 16
    },
})