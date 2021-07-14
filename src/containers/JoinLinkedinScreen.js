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
import FontAwesome from 'react-native-vector-icons/Feather';
import Fonts from '../constants/Fonts';
import CustomInputText from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {updateFirstName, updateLastName} from '../module/Auth/SignUp/action';

export class JoinLinkedinScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  firstNameValidation = () => {
    if (!/^[a-zA-Z]+[a-zA-Z]+$/i.test(this.state.firstName)) {
      alert('Please enter valid firstName');
      return false;
    } else {
      return true;
    }
  };

  lastNameValidation = () => {
    if (!/^[a-zA-Z]+[a-zA-Z]+$/i.test(this.state.lastName)) {
      alert('Please enter valid LastName');
      return false;
    } else {
      return true;
    }
  };

  onSubmit = () => {
    if (this.firstNameValidation() && this.lastNameValidation()) {
      this.props.updateFirstName(this.state.firstName);
      this.props.updateLastName(this.state.lastName);
      this.props.navigation.navigate('Login');
    } else alert('Fill the Required Fields');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header Layout */}
        <View style={styles.header_layout}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <FontAwesome name="arrow-left" size={25} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Onboard')}>
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
            <Text style={styles.upper_text}>First Name</Text>
            <CustomInputText
              CustomInputStyle={styles.custon_input}
              value={this.state.firstName}
              onChangeText={text => this.setState({firstName: text})}
            />
            <Text
              style={{
                marginTop: 15,
                ...styles.upper_text,
              }}>
              Last Name
            </Text>
            <CustomInputText
              CustomInputStyle={styles.custon_input}
              value={this.state.lastName}
              onChangeText={text => this.setState({lastName: text})}
            />
          </View>
          <CustomButton
            title="Agree & Join"
            customStyles={styles.button_layout}
            customText={styles.button_text}
            onPress={this.onSubmit}
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
  updateFirstName: name => dispatch(updateFirstName(name)),
  updateLastName: lastName => dispatch(updateLastName(lastName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinLinkedinScreen);

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
    height: 30,
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
});
