import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize, vh} from '../../constants/Dimension';
import Colors from '../../constants/Colors';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Icon
          name={'arrow-back-outline'}
          size={30}
          onPress={() => navigation.goBack()}
          color={'grey'}
        />
        <View style={styles.search_layout}>
          <TextInput
            autoFocus
            numberOfLines={1}
            paddingHorizontal={5}
            placeholder={'Seach messages'}
            style={styles.search_text}
          />
        </View>
        <Icon
          style={styles.scanner_icon}
          name={'settings-sharp'}
          color={'grey'}
          size={25}
        />
      </View>
    </View>
  );
};
export default ProfileHeader;

const styles = StyleSheet.create({
  search_layout: {
    flexDirection: 'row',
    borderRadius: normalize(5),
    flex: 1,
    height: vh(40),
    marginHorizontal: normalize(12),
    marginVertical: normalize(2),
    justifyContent: 'space-between',
    backgroundColor: Colors.lightBlue,
  },
  container: {
    backgroundColor: 'white',
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.greyTwo,
    padding: normalize(5),
  },
  scanner_icon: {
    marginLeft: normalize(10),
    marginRight: normalize(10),
    marginTop: normalize(5),
  },
  search_text: {
    fontSize: normalize(15),
  },
  layout: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
