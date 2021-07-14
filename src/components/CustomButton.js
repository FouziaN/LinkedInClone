import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {vh, normalize} from '../constants/Dimension';

const CustomButton = ({onPress, title, customStyles, customText}) => {
  const defaultStyles = {
    height: vh(40),
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <TouchableOpacity onPress={onPress} style={[defaultStyles, customStyles]}>
      <Text style={[customText]}>{title} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
