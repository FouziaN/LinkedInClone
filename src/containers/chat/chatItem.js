import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from '../../components/Avatar';
import Colors from '../../constants/Colors';
import {normalization, normalize} from '../../constants/Dimension';
import Fonts from '../../constants/Fonts';

const TIME = (Math.random() * 10 + 1).toFixed();

const ChatItem = ({chat}) => {
  return (
    <View style={styles.container}>
      <Avatar picture={chat.owner.picture} size={40} />
      <View style={styles.layout}>
        <View flex={1}>
          <Text
            style={
              styles.name
            }>{`${chat.owner.firstName} ${chat.owner.lastName}`}</Text>
          <Text numberOfLines={1} style={styles.text}>
            {chat.text}
          </Text>
        </View>
        <Text style={styles.time}>{TIME} Days</Text>
      </View>
    </View>
  );
};
export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
    marginVertical: normalize(5),
  },
  layout: {
    flex: 1,
    marginHorizontal: normalize(10),
    flexDirection: 'row',
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.grey,
  },
  text: {
    color: Colors.darkGrey,
    fontSize: normalize(12),
    marginBottom: normalize(10),
    marginTop: normalize(5),
  },
  time: {
    fontSize: normalize(10),
    color: Colors.darkGrey,
  },
  name: {
    fontFamily: Fonts.Roboto_Regular,
  },
});
