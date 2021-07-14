import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions, Image, Text} from 'react-native';
import {normalize, vh, vw} from '../constants/Dimension';
import Fonts from '../constants/Fonts';

const CustomSlide = React.memo(
  function CustomSlide(props) {
    return (
      <SafeAreaView
        style={{width: Dimensions.get('window').width, height: '100%'}}>
        <Image
          style={styles.Images}
          source={props.Image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{props.Title}</Text>
      </SafeAreaView>
    );
  },
  () => true,
);

export default CustomSlide;

const styles = StyleSheet.create({
  Images: {
    height: vh(260),
    width: vw(264),
    marginTop: normalize(16),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(97),
  },
  title: {
    fontSize: normalize(18),
    margin: normalize(35),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.Roboto_Medium,
  },
});
