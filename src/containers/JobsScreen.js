import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import JobHighlightCard from '../components/JobHighlightCard';
import RecentSearch from '../components/RecentSearch';
import HeaderScreen from '../components/HeaderScreen';
import Fonts from '../constants/Fonts';
import {normalize} from '../constants/Dimension';
import Colors from '../constants/Colors';

const JobsScreen = () => {
  const [jobs, setJobs] = useState(() => new Array(5).fill(1).map((_, i) => i));
  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <ScrollView contentContainerStyle={styles.background}>
        {jobs.length ? (
          <View style={styles.heading}>
            <Text style={styles.text_Highlights}>Highlights</Text>
          </View>
        ) : null}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jobs}
            renderItem={({item}) => (
              <JobHighlightCard
                onRemove={() => setJobs(jobs.filter(j => j !== item))}
              />
            )}
            keyExtractor={item => item.toString()}
          />
        </View>
        <RecentSearch />
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    backgroundColor: Colors.backgroundColor,
  },
  text_Highlights: {
    fontSize: normalize(18),
    fontFamily: Fonts.Roboto_Medium,
  },
  heading: {
    padding: normalize(8),
  },
});
