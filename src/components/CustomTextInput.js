import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';
import Fonts from '../constants/Fonts';

const CustomInputText = ({
  placeholder,
  CustomInputStyle,
  secureTextEntry,
  onChangeText,
  value,
  onEndEditing,
  onSubmitEditing,
  maxLength,
  isShowPassword,
  onPasswordPress,
  showPassword,
}) => {
  const defaultStyles = {
    backgroundColor: Colors.white,
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: vh(45),
        borderRadius: normalize(5),
        borderColor: Colors.darkGrey,
        borderWidth: 1,
        marginTop: normalize(10),
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput
        style={[defaultStyles, CustomInputStyle]}
        placeholderTextColor="grey"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
      />
      {isShowPassword ? (
        <TouchableOpacity onPress={() => onPasswordPress()}>
          <Text style={styles.password}>{showPassword ? 'show' : 'hide'}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  InputText: {
    backgroundColor: Colors.white,
    color: 'black',
  },
  isHighlighted: {
    borderColor: Colors.tealBlue,
    borderWidth: 0.5,
  },
  password: {
    fontSize: 12,
    marginRight: 10,
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
  },
});
