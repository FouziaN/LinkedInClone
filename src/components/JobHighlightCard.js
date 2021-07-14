import React from 'react';
import {Dimensions, View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {StyleSheet} from 'react-native';
import {normalize} from '../constants/Dimension';

const CARD_WIDTH = Dimensions.get('screen').width * 0.8;

const JobHighlightCard = () => {
  return (
    <ScrollView>
      <View marginHorizontal={8} width={CARD_WIDTH * 0.95}>
        <View style={styles.layout}>
          <View style={styles.detail_view}>
            <Text style={styles.application_text}>Application Viewed</Text>
            <Text style={styles.days}>6d</Text>
            <Icon name={'close'} size={20} />
          </View>
          <Text style={styles.details}>
            Your resume has been viewed.Earn a skill badge to stand out even
            more.
          </Text>
          <View style={styles.job_detailsView}>
            <Icon name={'office-building'} size={40} />
            <View>
              <Text style={{fontFamily: Fonts.Roboto_Bold}}>
                Full Stack Engineer
              </Text>
              <Text>Appinventiv</Text>
              <Text>India</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: Colors.white, fontFamily: Fonts.Roboto_Bold}}>
              Earn Skill Badges
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default JobHighlightCard;

const styles = StyleSheet.create({
  layout: {
    padding: normalize(16),
    backgroundColor: Colors.white,
    borderRadius: normalize(10),
  },
  detail_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  application_text: {
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
  },
  days: {marginRight: normalize(80)},
  details: {marginTop: normalize(10)},
  job_detailsView: {
    marginTop: normalize(16),
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.blue,
    height: normalize(30),
    marginTop: normalize(10),
    marginLeft: '5%',
    marginRight: '5%',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(24),
    borderRadius: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
