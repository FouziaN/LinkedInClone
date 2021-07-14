import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {Button} from 'react-native';
import {Text, View, Image} from 'react-native';
import Colors from '../../constants/Colors';
import {normalize} from '../../constants/Dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../constants/Images';
import ProfileHeader from './header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fonts from '../../constants/Fonts';
import CustomButton from '../../components/CustomButton';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

export class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ProfileHeader />
        <ScrollView>
          <View>
            <Image
              style={styles.headerImage}
              source={Images.headerImage}
              resizeMode="cover"
            />
            <View style={styles.header_button}>
              <Icon name="pencil-outline" size={18} color={Colors.blue} />
            </View>
            <Image source={Images.Onboarding2} style={styles.profile_Image} />
            <TouchableOpacity>
              <View style={styles.profile_button}>
                <Icon name="plus" size={18} color={'#FFC594'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="pencil-outline"
                size={25}
                color={Colors.greyThree}
                style={styles.pencil_button}
              />
            </TouchableOpacity>
            <View style={styles.details_view}>
              <Text style={styles.name_text}>Fouzia Naaz</Text>
              <Text style={styles.possition_text}>
                Software Engineer at Appinventive
              </Text>
              <Text style={styles.company_Name}>Appinventive</Text>
              <Text style={styles.location_text}>Noida, Uttar Pardesh</Text>
              <Text style={styles.connection}>500+ connections</Text>
            </View>

            <View style={styles.button_view}>
              <TouchableOpacity style={styles.open}>
                <Text style={styles.open_text}>Open to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.add_button}>
                <Text style={styles.add_text}>Add Section</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.share_button}>
                  <Icon
                    name="dots-horizontal"
                    size={18}
                    color={Colors.greyThree}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.dashboard}>
              <Text style={{fontSize: normalize(12)}}>Your Dashboard</Text>
              <Text style={styles.private_text}>Privates to you</Text>
              <View style={styles.vie_numb}>
                <View style={styles.layout}>
                  <View style={{width: 70}}>
                    <Text style={styles.number_text}>234</Text>
                    <Text style={styles.detail_text}>
                      Who viewed you profile
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.number_text}>731</Text>
                    <Text style={styles.detail_text}>Post Views</Text>
                  </View>
                  <View style={{width: normalize(70)}}>
                    <Text style={styles.number_text}>80</Text>
                    <Text style={styles.detail_text}>Search appearances</Text>
                  </View>
                </View>
              </View>
              <View style={styles.second_layout}>
                <View style={styles.marginView}>
                  <Icon name="satellite-uplink" size={20} />

                  <View style={{marginLeft: normalize(10)}}>
                    <Text style={styles.icon_text}>Creater mode : Off</Text>
                    <Text style={styles.icon_details}>
                      Grow your audience and get discovere by highlighting on
                      your profile
                    </Text>
                  </View>
                </View>
                <View style={styles.marginView}>
                  <Icon name="account-supervisor" size={20} />

                  <View style={{marginLeft: normalize(10)}}>
                    <Text style={styles.icon_text}>My Network</Text>
                    <Text style={styles.icon_details}>
                      Manage your connections , events , and intreset
                    </Text>
                  </View>
                </View>
                <View style={styles.marginView}>
                  <Icon name="bookmark" size={20} />

                  <View style={{marginLeft: normalize(10)}}>
                    <Text style={styles.icon_text}>My Items</Text>
                    <Text style={styles.icon_details}>
                      Keep tracks of your jobs and articles
                    </Text>
                  </View>
                </View>
                <View style={styles.marginView}>
                  <Icon name="cash" size={20} />

                  <View style={{marginLeft: normalize(10)}}>
                    <Text style={styles.icon_text}>Salary Insight</Text>
                    <Text style={styles.icon_details}>
                      Explore how your salary compares too your peers
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  headerImage: {height: normalize(100), width: '100%'},
  header_button: {
    height: normalize(28),
    width: normalize(28),
    backgroundColor: Colors.white,
    borderRadius: normalize(50),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: normalize(15),
    top: normalize(10),
  },
  profile_Image: {
    height: normalize(120),
    width: normalize(120),
    borderRadius: normalize(120 / 2),
    borderWidth: normalize(1),
    borderColor: 'white',
    position: 'absolute',
    top: normalize(50),
    left: normalize(10),
    borderColor: Colors.greyTwo,
  },
  profile_button: {
    height: normalize(28),
    width: normalize(28),
    backgroundColor: Colors.white,
    borderRadius: normalize(50),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(20),
    left: normalize(110),
    borderWidth: normalize(1),
    borderColor: Colors.greyTwo,
  },
  pencil_button: {
    position: 'absolute',
    right: normalize(15),
    top: normalize(10),
  },
  details_view: {
    marginTop: '20%',
    marginHorizontal: normalize(15),
  },
  name_text: {fontFamily: Fonts.Roboto_Medium, fontSize: normalize(18)},
  possition_text: {
    fontFamily: Fonts.Roboto_Regular,
    fontWeight: '300',
    fontSize: normalize(12),
  },
  company_Name: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
    fontWeight: '300',
    marginTop: normalize(10),
  },
  location_text: {
    fontWeight: '300',
    fontSize: normalize(10),
    color: Colors.greyThree,
  },
  connection: {
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
    color: Colors.blue,
    marginTop: normalize(10),
  },
  button_view: {
    flexDirection: 'row',
    marginLeft: normalize(10),
    alignItems: 'center',
    margin: '2%',
  },
  open: {
    borderColor: Colors.blue,
    backgroundColor: Colors.blue,
    height: normalize(30),
    width: normalize(150),
    borderRadius: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  open_text: {
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.white,
    fontSize: normalize(12),
  },
  add_button: {
    borderColor: Colors.greyThree,
    borderWidth: 1,
    backgroundColor: Colors.white,
    height: normalize(30),
    width: normalize(150),
    borderRadius: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(10),
  },
  add_text: {
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.greyThree,
    fontSize: normalize(12),
  },
  share_button: {
    height: normalize(30),
    width: normalize(30),
    backgroundColor: Colors.white,
    borderRadius: normalize(50),
    marginLeft: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.greyThree,
  },
  dashboard: {
    backgroundColor: Colors.lightBlue,
    padding: normalize(10),
    borderTopWidth: normalize(8),
    borderTopColor: Colors.backgroundColor,
    borderBottomWidth: normalize(8),
    borderBottomColor: Colors.backgroundColor,
  },
  private_text: {
    fontSize: normalize(10),
    fontFamily: Fonts.Roboto_Italic,
    color: Colors.greyThree,
    fontWeight: '400',
    marginTop: normalize(3),
  },
  vie_numb: {
    backgroundColor: Colors.white,
    borderColor: Colors.greyTwo,
    padding: normalize(5),
    borderWidth: normalize(1),
    borderRadius: normalize(7),
    marginTop: normalize(10),
    height: normalize(60),
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number_text: {
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.blue,
  },
  detail_text: {fontSize: normalize(10), fontFamily: Fonts.Roboto_Regular},
  second_layout: {
    borderWidth: 1,
    borderColor: Colors.greyTwo,
    backgroundColor: Colors.white,
    height: normalize(180),
    marginTop: normalize(10),
    borderRadius: normalize(7),
    padding: normalize(5),
  },
  marginView: {
    flexDirection: 'row',
    margin: normalize(5),
  },
  icon_text: {
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  icon_details: {
    fontSize: normalize(10),
    color: Colors.greyThree,
  },
});
