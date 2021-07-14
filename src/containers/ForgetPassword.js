import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';
import Fonts from '../constants/Fonts';
import Images from '../constants/Images';
import CustomInputText from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {connect} from 'react-redux';
import {updateEmailAddress} from '../module/Auth/Password/action';

export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  emailValidation = () => {
    if (!/^(?:\d{10}|\w+@\w+\.\w{2,3})$/i.test(this.state.email)) {
      alert('Please input valid email or Phone Number');
      return false;
    } else {
      return true;
    }
  };

  onSubmit = () => {
    if (this.emailValidation()) {
      this.props.updateEmailAddress(this.state.email);
      this.props.navigation.navigate('OtpScreen');
    } else alert('Invalid Information');
  };

  render() {
    return (
      <Animatable.View
        animation="fadeInUpBig"
        easing="ease-out"
        style={styles.container}>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.border}>
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
            <Text style={styles.forget_text}>Forgot Password?</Text>
            <Text style={styles.reset_description}>
              Reset password in two quick steps
            </Text>
            <CustomInputText
              placeholder="Email or Phone"
              CustomInputStyle={styles.input_style}
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <CustomButton
              title="Reset Password"
              onPress={this.onSubmit}
              customStyles={styles.button_style}
              customText={styles.button_text}
            />
          </View>
        </SafeAreaView>
      </Animatable.View>
    );
  }
}

const mapStateToProps = store => {
  const {ForgetPasswordReducer} = store;
  return {ForgetPasswordReducer};
};

const mapDispatchToProps = dispatch => ({
  updateEmailAddress: email => dispatch(updateEmailAddress(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: normalize(28),
    fontFamily: Fonts.Roboto_Bold,
  },
  reset_description: {
    marginTop: '2%',
    fontSize: normalize(13),
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
  logo: {
    height: vh(100),
    width: vw(100),
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyTwo,
  },
});
