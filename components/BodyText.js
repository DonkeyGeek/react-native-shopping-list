import React from 'react'
import { Text } from 'react-native';
import AppStyles from '../constants/AppStyles';


const { textBody } = AppStyles;
const BodyText = ({children, style}) => <Text style={{...textBody, ...style}}>{children}</Text>;

export default BodyText