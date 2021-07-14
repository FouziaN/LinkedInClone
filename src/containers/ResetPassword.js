import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';
import Fonts from '../constants/Fonts';
import CustomInputText from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import Images from '../constants/Images';

export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
      isSecure: true,
      isSecureconfirm: true,
    };
  }

  handleSubmit = () => {
    const {password, confirmPassword} = this.state;
    if (password == '') {
      alert('Field Cannot be empty');
    } else if (password != confirmPassword) {
      alert('Password do not match');
      return false;
    } else if (password == confirmPassword) {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <SafeAreaView>
          {/* Header */}
          <View
            style={{borderBottomColor: Colors.greyTwo, borderBottomWidth: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.done_button}>Done</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}

          <View style={styles.footer_layout}>
            <Image
              style={styles.logo}
              source={Images.logo}
              resizeMode="contain"
            />
            <Text style={styles.forget_text}>Choose a new password</Text>
            <Text style={styles.reset_description}>
              Create a new password that is at least 8 character long
            </Text>
            <CustomInputText
              placeholder="New Password"
              CustomInputStyle={styles.input_style}
              value={this.state.password}
              secureTextEntry={this.state.isSecure}
              onChangeText={text => this.setState({password: text})}
              isShowPassword={true}
              onPasswordPress={() =>
                this.setState({isSecure: !this.state.isSecure})
              }
              showPassword={this.state.isSecure}
            />
            <CustomInputText
              placeholder="Retype new password"
              CustomInputStyle={{
                ...styles.input_style,
              }}
              value={this.state.confirmPassword}
              secureTextEntry={this.state.isSecureconfirm}
              onChangeText={text => this.setState({confirmPassword: text})}
              isShowPassword={true}
              onPasswordPress={() =>
                this.setState({isSecure: !this.state.isSecure})
              }
              showPassword={this.state.isSecure}
            />
            <View style={styles.layout}>
              <Text style={styles.didnt_text}>
                Require all devices to sign in with new password
              </Text>
            </View>
            <CustomButton
              onPress={this.handleSubmit}
              title="Submit"
              customStyles={styles.button_style}
              customText={styles.button_text}
            />
          </View>
        </SafeAreaView>
      </Animatable.View>
    );
  }
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: vh(80),
    width: vw(120),
  },
  done_button: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
    marginLeft: '3%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  footer_layout: {
    marginRight: '7%',
    marginLeft: '7%',
  },
  forget_text: {
    marginTop: normalize(15),
    fontSize: normalize(22),
    fontFamily: Fonts.Roboto_Bold,
    textAlign: 'left',
    marginRight: '10%',
  },
  reset_description: {
    marginTop: '4%',
    fontSize: normalize(13),
    textAlign: 'left',
    marginRight: '12%',
    fontFamily: Fonts.Roboto_Regular,
  },
  input_style: {
    height: 40,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
  },
  button_style: {
    backgroundColor: Colors.blue,
    borderRadius: normalize(50),
    marginTop: normalize(20),
  },
  button_text: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
  },
  changeText: {
    marginLeft: normalize(5),
    fontSize: normalize(13),
    top: normalize(3),
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
  },
  layout: {
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  didnt_text: {fontSize: normalize(13), fontFamily: Fonts.Roboto_Regular},
  show_password: {
    position: 'absolute',
    top: normalize(-28),
    right: normalize(10),
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.blue,
  },
});
