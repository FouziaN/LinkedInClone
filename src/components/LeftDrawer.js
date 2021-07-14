import * as React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Text} from 'react-native-paper';
import {normalize} from '../constants/Dimension';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {ExpandableListView} from 'react-native-expandable-listview';

const CONTENT = [
  {
    id: '42',
    categoryName: 'Item 1',
    customItem: (
      <View style={{flexDirection: 'row', height: 20}}>
        <Text style={{color: Colors.greyThree}}>Recent</Text>
        <Icon
          name="angle-down"
          size={20}
          color={Colors.greyThree}
          style={{position: 'absolute', right: -200}}
        />
      </View>
    ),
    subCategory: [
      {
        customInnerItem: (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}>
            <Icon name="hashtag" size={10} color={Colors.greyThree} />
            <Text style={{marginLeft: 10, color: Colors.greyThree}}>
              future
            </Text>
          </View>
        ),
        id: '1',
        name: '',
      },
      {
        customInnerItem: (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}>
            <Icon name="user-friends" size={10} color={Colors.greyThree} />
            <Text style={{marginLeft: 10, color: Colors.greyThree}}>
              innovation
            </Text>
          </View>
        ),
        id: '1',
        name: '',
      },
      {
        customInnerItem: (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}>
            <Icon name="hashtag" size={10} color={Colors.greyThree} />
            <Text style={{marginLeft: 10, color: Colors.greyThree}}>
              creativity
            </Text>
          </View>
        ),
        id: '1',
        name: '',
      },
      {
        customInnerItem: (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}>
            <Icon name="hashtag" size={10} color={Colors.greyThree} />
            <Text style={{marginLeft: 10, color: Colors.greyThree}}>india</Text>
          </View>
        ),
        id: '1',
        name: '',
      },
    ],
  },
  {
    id: '12',
    categoryName: 'Item 3',
    customItem: (
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: Colors.greyThree}}>Groups</Text>
        <Icon
          name="angle-down"
          size={20}
          color={Colors.greyThree}
          style={{position: 'absolute', right: -200}}
        />
      </View>
    ),
    subCategory: [
      {
        customInnerItem: (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}>
            <Icon name="user-friends" size={10} color={Colors.greyThree} />
            <Text style={{marginLeft: 10, color: Colors.greyThree}}>
              Railway and Transport
            </Text>
          </View>
        ),
        id: '1',
        name: '',
      },
    ],
  },
];

function DrawerContent({props, navigation}) {
  function handleItemClick({index}) {
    console.log(index);
  }

  function handleInnerItemClick({innerIndex}) {
    console.log(innerIndex);
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Images/onboarding1.png')}
          style={styles.profile}
        />
        <View style={styles.details}>
          <Text style={styles.name_text}>Fouzia Naaz</Text>
          <View style={styles.layout}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.button}>View Profile</Text>
            </TouchableOpacity>
            <Text style={styles.dot}>.</Text>
            <TouchableOpacity>
              <Text style={styles.button}>Settings</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.close_button}
            onPress={navigation.closeDrawer}>
            <Icon name={'times-circle'} style={styles.close_icon} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view_premium}>
        <View style={styles.marg}>
          <Icon name="square-full" size={15} color={'#E1AD01'} />
          <Text style={styles.premium_text}>Reactivate Premium</Text>
        </View>
      </View>
      <View>
        <ExpandableListView
          itemContainerStyle={{backgroundColor: 'white'}}
          data={CONTENT} // required
          onInnerItemClick={handleInnerItemClick}
          onItemClick={handleItemClick}
        />
      </View>
      <View style={styles.signout_button}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text_Signout}>Sign Out</Text>
        </TouchableOpacity>
        <Icon
          name={'sign-out-alt'}
          size={18}
          style={{marginLeft: normalize(10)}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
  },
  profile: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: normalize(50 / 2),
  },
  details: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
  },
  name_text: {
    fontFamily: Fonts.Roboto_Bold,
    fontWeight: '600',
    fontSize: normalize(14),
  },
  layout: {flexDirection: 'row', marginTop: normalize(5)},
  button: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Bold,
  },
  dot: {
    fontSize: normalize(12),
    color: Colors.blue,
    fontWeight: '900',
    fontFamily: Fonts.Roboto_Bold,
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
  close_button: {
    position: 'absolute',
    right: normalize(-40),
    top: normalize(15),
  },
  view_premium: {
    height: normalize(40),
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
  },
  marg: {
    flexDirection: 'row',
    marginLeft: normalize(10),
  },
  premium_text: {
    fontFamily: Fonts.Roboto_Thin,
    marginLeft: normalize(10),
    fontWeight: '300',
    fontSize: normalize(12.5),
  },
  signout_button: {
    fontFamily: Fonts.Roboto_Medium,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColor,
    width: '100%',
    alignItems: 'center',
  },
  text_Signout: {marginLeft: normalize(10)},
});

export default DrawerContent;
