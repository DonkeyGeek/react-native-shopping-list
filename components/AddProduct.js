import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import ButtonComponent from './ButtonComponent'
import Colors from "../constants/colors"
import Input from './Input';
import BodyText from './BodyText';
import TitleText from './TitleText';
import AppStyles from '../constants/AppStyles';

const AddProduct = ( { submitHandler, displayModal, cancelNewproduct } ) => {

    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        const regex = /[^a-z]/gi;
        setProduct(val.replace(regex, ''));
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    return (
        <Modal
            visible={ displayModal }
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TitleText style={AppStyles.headerTwo}>Veuillez indiquer un produit</TitleText>
                <BodyText style={AppStyles.textBody}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia optio quam suscipit. Fugit, praesentium expedita sed necessitatibus at nostrum facilis soluta cum assumenda magni odio nobis, possimus optio dolorum deleniti.</BodyText>

                <Input 
                    style={styles.textInput} 
                    textPlaceholder="Nouveau produit"
                    onChangeHandler={ inputHandler }
                    inputValue={ product }
                    maxLength={10}
                />
                
                <View style={styles.btnContainer}>
                    <ButtonComponent 
                       onPressHandler={ handleClick }
                       style={styles.btnBlue}
                    >
                    Valider
                    </ButtonComponent>

                    <ButtonComponent
                       onPressHandler={ cancelNewproduct }
                       style={styles.btnTomato}
                    >
                    Annuler
                    </ButtonComponent>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 24
    },
    textInput: {
        padding: 5,
        textAlign: "center",
        fontSize: 18,
        marginBottom: 15,
        borderRadius: 30,
        height: 50,
        fontSize: 19
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnBlue: {
        backgroundColor: Colors.success,
        width: 150,
        borderRadius: 6
    },
    btnTomato: {
        backgroundColor: Colors.danger,
        width: 150,
        borderRadius: 6
    }

})

export default AddProduct