import React, {Component} from 'react';
import {Image, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomSlide from '../components/CustomSlide';
import Colors from '../constants/Colors';
import {normalize, vh, vw} from '../constants/Dimension';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';

export class OnboardingScreen extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      timePassed: false,
      onBoardingData: [
        {
          id: '1',
          image: Images.Onboarding3,
          title: 'Find and land your next job',
        },
        {
          id: '2',
          image: Images.Onboarding1,
          title: 'Build your network on the go',
        },
        {
          id: '3',
          image: Images.Onboarding2,
          title: 'Stay ahead with curated content for your career',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
        {/* Onboarding Slide */}
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            const active = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            if (this.state.index !== active) {
              this.setState({index: active});
            }
          }}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          data={this.state.onBoardingData}
          renderItem={({item}) => (
            <CustomSlide Image={item.image} Title={item.title} />
          )}
        />

        <View style={styles.dotview}>
          {[1, 2, 3].map((item, index) => {
            return (
              <View
                style={{
                  ...styles.dotStyle,
                  backgroundColor:
                    index === this.state.index ? 'grey' : 'white',
                }}
              />
            );
          })}
        </View>
        <CustomButton
          title="Join now"
          onPress={() => this.props.navigation.navigate('SignUp')}
          customStyles={styles.CustomButton}
          customText={styles.customText}
        />
        <CustomButton
          title="Sign in"
          onPress={() => this.props.navigation.navigate('Login')}
          customStyles={styles.sign_button}
          customText={styles.sign_text}
        />
      </SafeAreaView>
    );
  }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: vh(20),
    width: vw(80),
    marginTop: normalize(20),
    marginLeft: normalize(30),
  },
  dotview: {
    flexDirection: 'row',
    bottom: 100,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  CustomButton: {
    backgroundColor: Colors.blue,
    borderRadius: 50,
    bottom: 50,
    marginLeft: '10%',
    marginRight: '10%',
  },
  customText: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
  },
  sign_button: {
    borderRadius: 50,
    bottom: 40,
    marginLeft: '10%',
    marginRight: '10%',
  },
  sign_text: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
  },
});
