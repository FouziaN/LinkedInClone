import React from 'react';
import {View, Text} from 'react-native';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {normalize} from '../constants/Dimension';
import {StyleSheet} from 'react-native';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native';

const NotificationItem = ({notification}) => {
  return (
    <View style={styles.container}>
      <Avatar size={45} picture={notification.owner.picture} />
      <View style={styles.details}>
        {notification.owner && (
          <Text style={styles.name} numberOfLines={1}>
            {notification.owner.firstName} {notification.owner.lastName}
          </Text>
        )}
        <Text numberOfLines={3}>{notification.text}</Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonView}>
            <Text style={styles.button_text}>Send Message</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.time}>{Math.floor(Math.random() * 11 + 1)}h</Text>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name={'ellipsis-h'}
            size={15}
            color={'grey'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(15),
    backgroundColor: Colors.white,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  details: {
    flex: 1,
    marginHorizontal: normalize(8),
    justifyContent: 'center',
  },
  name: {
    fontFamily: Fonts.Roboto_Medium,
  },
  button: {
    flexWrap: 'wrap',
    marginTop: normalize(10),
    flexDirection: 'row',
  },
  buttonView: {
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(50),
    marginRight: normalize(8),
    marginBottom: normalize(5),
    borderColor: Colors.blue,
    borderWidth: normalize(1),
  },
  button_text: {
    color: Colors.blue,
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  time: {
    marginBottom: normalize(8),
    color: Colors.darkGrey,
  },
  icon: {
    marginTop: normalize(10),
  },
});
