import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Images from '../constants/Images';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Onboard');
  }, 2000);
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '80%',
    width: '60%',
  },
});
