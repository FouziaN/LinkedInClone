import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';
import Images from '../constants/Images';
import FontAwesome from 'react-native-vector-icons/Feather';
import Fonts from '../constants/Fonts';
import CustomInputText from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {updatePassword, updateEmailAddress} from '../module/Auth/SignUp/action';

export class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isSecure: true,
    };
  }

  emailValidation = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      alert('Please input valid email');
      return false;
    } else {
      return true;
    }
  };

  userPasswordValidation = () => {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(this.state.password)) {
      alert('Minimum eight characters, at least one letter and one number');
      return false;
    } else {
      return true;
    }
  };

  onSubmit = () => {
    if (this.emailValidation() && this.userPasswordValidation()) {
      this.props.updateEmailAddress(this.state.email);
      this.props.updatePassword(this.state.password);
      this.props.navigation.navigate('JoinLinkedin');
    } else alert('Fill the Required Fields');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header Layout */}
        <View style={styles.header_layout}>
          <Image
            style={styles.logo}
            source={Images.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <FontAwesome name="x" size={25} color="grey" />
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.signIn_text}>Join Linkedin</Text>
          <View style={styles.join_text}>
            <Text style={styles.or_text}>or</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.join_link}>sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forget_margin}>
            <Text style={styles.upper_text}>Email or Phone</Text>
            <CustomInputText
              CustomInputStyle={styles.custon_input}
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Text
              style={{
                marginTop: 15,
                ...styles.upper_text,
              }}>
              Password
            </Text>
            <CustomInputText
              CustomInputStyle={styles.custon_input}
              value={this.state.password}
              secureTextEntry={this.state.isSecure}
              onChangeText={text => this.setState({password: text})}
              isShowPassword={true}
              onPasswordPress={() =>
                this.setState({isSecure: !this.state.isSecure})
              }
              showPassword={this.state.isSecure}
            />
            <Text style={styles.upper_text}>6 or more characters</Text>
          </View>
          <CustomButton
            onPress={this.onSubmit}
            title="Continue"
            customStyles={styles.button_layout}
            customText={styles.button_text}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = store => {
  const {SignUpReducer} = store;
  return {SignUpReducer};
};

const mapDispatchToProps = dispatch => ({
  updatePassword: password => dispatch(updatePassword(password)),
  updateEmailAddress: email => dispatch(updateEmailAddress(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: vh(20),
    width: vw(80),
  },
  header_layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(20),
    marginLeft: normalize(25),
    marginRight: normalize(25),
  },
  footer: {
    marginTop: normalize(60),
    marginLeft: normalize(25),
    marginRight: normalize(30),
  },
  signIn_text: {
    fontSize: normalize(26),
    fontFamily: Fonts.Roboto_Medium,
  },
  join_text: {
    flexDirection: 'row',
    marginTop: normalize(5),
  },
  or_text: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
  },
  join_link: {
    marginLeft: normalize(5),
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
  },
  forget_margin: {marginTop: normalize(20)},
  upper_text: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  custon_input: {
    height: 40,
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(5),
  },
  button_layout: {
    backgroundColor: Colors.blue,
    borderRadius: normalize(50),
    marginTop: normalize(20),
  },
  button_text: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
  },
  show_password: {
    position: 'absolute',
    top: normalize(-22),
    right: normalize(10),
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.blue,
  },
});
