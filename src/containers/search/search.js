import React from 'react';
import News from './news';
import Header from './header';
import {SafeAreaView, ScrollView, View} from 'react-native';
import RecentSearch from './recentSearch';

const Search = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <Header />
        <View paddingHorizontal={8}>
          <RecentSearch />
        </View>
        <News />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Search;
