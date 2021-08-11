import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
    headerOne: {
        fontFamily: 'BangersRegular',
        color: Colors.white,
        fontSize: 30,
        padding: 9,
    },
    headerTwo: {
        fontFamily: 'BangersRegular',
        color: Colors.danger,
        fontSize: 25,
        padding: 9,
        textAlign: 'center'
    },
    textBody: {
        color: Colors.grey,
        fontSize: 15
    }
})