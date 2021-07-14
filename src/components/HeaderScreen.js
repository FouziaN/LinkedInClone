import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {normalize} from '../constants/Dimension';
import Colors from '../constants/Colors';

const HeaderScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('../assets/Images/onboarding1.png')}
            style={styles.drawer_image}
          />
        </TouchableOpacity>
        <View style={styles.search_bar}>
          <View flexDirection="row" flex={1}>
            <Icon name={'search'} size={20} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={{flex: 1}}>
              <Text variant={'bold'} fontSize={12}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Icon name={'qr-code-scanner'} size={20} />
          </View>
        </View>
        <Icon
          size={20}
          name={'chat'}
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    </View>
  );
};
export default HeaderScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(10),
    backgroundColor: Colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: normalize(16),
  },
  layout: {
    borderBottomWidth: normalize(1),
    marginTop: normalize(10),
    borderBottomColor: Colors.grey,
    backgroundColor: Colors.white,
  },
  drawer_image: {
    height: normalize(35),
    width: normalize(35),
    borderRadius: normalize(35 / 2),
  },
  search_bar: {
    flex: 1,
    padding: normalize(10),
    marginHorizontal: normalize(10),
    flexDirection: 'row',
    borderRadius: normalize(5),
    backgroundColor: Colors.lightBlue,
  },
});
