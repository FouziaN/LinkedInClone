import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Avatar from '../components/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {normalize} from '../constants/Dimension';
import {StyleSheet} from 'react-native';
import Fonts from '../constants/Fonts';

const {width} = Dimensions.get('screen');

const User = ({user}) => {
  return (
    <View
      style={styles.container}
      borderRadius={15}
      borderWidth={1}
      margin={8}
      overflow={'hidden'}
      borderColor={'#E0EAF0'}>
      <View style={styles.background_color} />
      <TouchableOpacity>
        <Icon name={'times-circle'} style={styles.close_icon} size={20} />
      </TouchableOpacity>
      <View alignItems={'center'} style={styles.details_layout}>
        <Avatar size={100} picture={user.picture} />
        <Text style={styles.name_text}>
          {`${user.firstName}`} {`${user.lastName}`}
        </Text>
        <Text style={styles.detail_text}> Software Developer</Text>
        <View style={styles.layout}>
          <Icon name={'infinity'} color={'grey'} size={15} />
          <Text style={styles.detail_text}>10 mutual connections</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.button_text}>Connect</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default User;

const styles = StyleSheet.create({
  container: {width: width / 2 - 8 * 2},
  background_color: {
    height: normalize(75),
    backgroundColor: Colors.lightBlue,
  },
  close_icon: {
    top: normalize(-60),
    left: normalize(140),
  },
  details_layout: {
    top: normalize(-55),
    alignItems: 'center',
  },
  name_text: {
    marginTop: normalize(10),
    fontFamily: Fonts.Roboto_Regular,
  },
  detail_text: {
    fontSize: normalize(12),
    marginLeft: normalize(5),
    color: Colors.darkGrey,
  },
  layout: {
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: normalize(-40),
    borderRadius: normalize(60),
    marginBottom: normalize(24),
    paddingVertical: normalize(5),
    marginHorizontal: normalize(12),
    borderColor: Colors.blue,
    alignItems: 'center',
    borderWidth: normalize(1),
  },
  button_text: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Regular,
  },
});
