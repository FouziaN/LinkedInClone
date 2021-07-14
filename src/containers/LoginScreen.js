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
import Strings from '../constants/Strings';
import CustomInputText from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {updatePassword, updateEmailAddress} from '../module/Auth/SignIn/action';

export class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isSecure: true,
    };
  }

  emailValidation = () => {
    if (!/^(?:\d{10}|\w+@\w+\.\w{2,3})$/i.test(this.state.email)) {
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
    if (
      this.state.email == this.props.SignUpReducer.email &&
      this.state.password == this.props.SignUpReducer.password
    ) {
      this.props.updateEmailAddress(this.state.email);
      this.props.updatePassword(this.state.password);
      this.props.navigation.navigate('HomeScreen');
    } else alert('Invalid Information');
  };

  // goBack function
  goBack = () => {
    this.props.navigation.goBack();
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
          <TouchableOpacity onPress={this.goBack}>
            <FontAwesome name="x" size={25} color="grey" />
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.signIn_text}>{Strings.signIn}</Text>
          <View style={styles.join_text}>
            <Text style={styles.or_text}>Or</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.join_link}>Join Linkedin</Text>
            </TouchableOpacity>
          </View>
          <CustomInputText
            placeholder="Email or Phone"
            CustomInputStyle={styles.input_layout}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <CustomInputText
            placeholder="Password"
            CustomInputStyle={styles.input_layout}
            value={this.state.password}
            secureTextEntry={this.state.isSecure}
            onChangeText={text => this.setState({password: text})}
            isShowPassword={true}
            onPasswordPress={() =>
              this.setState({isSecure: !this.state.isSecure})
            }
            showPassword={this.state.isSecure}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PassStack')}
            style={styles.forget_margin}>
            <Text style={styles.forget_text}>Forget Password?</Text>
          </TouchableOpacity>
          <CustomButton
            title="Sign in"
            onPress={this.onSubmit}
            customStyles={styles.button_layout}
            customText={styles.button_text}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {SignUpReducer} = state;
  return {SignUpReducer};
};

const mapDispatchToProps = dispatch => ({
  updateEmailAddress: email => dispatch(updateEmailAddress(email)),
  updatePassword: password => dispatch(updatePassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: vh(20),
    width: vw(80),
  },
  dotview: {
    flexDirection: 'row',
    bottom: 100,
    alignSelf: 'center',
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
    marginTop: normalize(50),
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
  input_layout: {
    height: 40,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(10),
  },
  forget_margin: {marginTop: normalize(20)},
  forget_text: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
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
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.blue,
  },
});
