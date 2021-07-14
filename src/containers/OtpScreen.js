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
import {connect} from 'react-redux';
import {updateOtp} from '../module/Auth/Password/action';

export class OtpScreen extends Component {
  constructor() {
    super();
    this.state = {
      otp: '',
    };
  }

  otpValidation = () => {
    if (!/^(\d\s*){6}$/i.test(this.state.otp)) {
      alert('Please input valid otp');
      return false;
    } else {
      return true;
    }
  };

  onSubmit = () => {
    if (this.otpValidation()) {
      this.props.updateOtp(this.state.otp);
      this.props.navigation.navigate('ResetPassword');
    } else alert('Invalid Information');
  };

  render() {
    return (
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
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
            <Text style={styles.forget_text}>We sent a code to your phone</Text>
            <Text style={styles.reset_description}>
              Enter 6 digit verification code sent to your phone ending in 12.
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.changeText}>Change</Text>
              </TouchableOpacity>
            </Text>
            <CustomInputText
              placeholder="6 digit code"
              CustomInputStyle={styles.input_style}
              value={this.state.otp}
              onChangeText={text => this.setState({otp: text})}
              maxLength={6}
            />
            <View style={styles.layout}>
              <Text style={styles.didnt_text}>Didn't receive the code?</Text>
              <TouchableOpacity>
                <Text style={styles.changeText1}>Resend code</Text>
              </TouchableOpacity>
            </View>
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
  updateOtp: otp => dispatch(updateOtp(otp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: vh(40),
    width: vw(100),
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
    marginTop: '10%',
    marginRight: '7%',
    marginLeft: '7%',
  },
  forget_text: {
    marginTop: normalize(30),
    fontSize: normalize(22),
    fontFamily: Fonts.Roboto_Medium,
    textAlign: 'left',
    marginRight: '10%',
  },
  reset_description: {
    marginTop: '4%',
    fontSize: normalize(12),
    textAlign: 'left',
    marginRight: '10%',
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
  changeText1: {
    marginLeft: normalize(5),
    fontSize: normalize(13),
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
  },
  layout: {
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  didnt_text: {fontSize: normalize(14)},
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyTwo,
  },
});
