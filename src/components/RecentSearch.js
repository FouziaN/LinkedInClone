import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {normalize} from '../constants/Dimension';

const RecentSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.heading_text}>Recent Searches</Text>
        <TouchableOpacity>
          <Text style={styles.clear_text}>Clear</Text>
        </TouchableOpacity>
      </View>
      {new Array(10)
        .fill(1)
        .map((_, i) => i)
        .map(item => (
          <View key={item} style={styles.list_view}>
            <View flexDirection={'row'}>
              <Text style={styles.text}>React Native</Text>
              <Text style={styles.job_number}>{' 50 new'}</Text>
            </View>
            <Text style={styles.details}>Noida . Executive</Text>
          </View>
        ))}
      <View style={styles.button}>
        <Text style={styles.button_text}>See More</Text>
      </View>
    </View>
  );
};
export default RecentSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(8),
    backgroundColor: Colors.white,
    padding: normalize(8),
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading_text: {
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
  },
  clear_text: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Roboto_Medium,
  },
  list_view: {
    marginTop: normalize(10),
    paddingVertical: normalize(2),
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.grey,
  },
  text: {fontFamily: Fonts.Roboto_Medium},
  job_number: {
    color: '#0A906E',
    fontSize: normalize(12),
    marginLeft: normalize(5),
    fontFamily: Fonts.Roboto_Regular,
  },
  details: {
    marginBottom: normalize(10),
    color: Colors.darkGrey,
    fontSize: normalize(12),
  },
  button: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(24),
    borderColor: Colors.black,
    borderWidth: normalize(1),
    marginTop: normalize(24),
    borderRadius: normalize(100),
    alignItems: 'center',
  },
  button_text: {
    fontFamily: Fonts.Roboto_Medium,
  },
});
