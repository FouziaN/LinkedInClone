import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import Avatar from '../../components/Avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import Fonts from '../../constants/Fonts';

const RecentSearch = () => {
  return (
    <SafeAreaView flex={1} backgroundColor={'white'}>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: Fonts.Roboto_Medium, color: 'grey'}}>
          Recent Searches
        </Text>
        <Text style={{fontFamily: Fonts.Roboto_Medium, color: 'grey'}}>
          Clear
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {new Array(3)
          .fill(0)
          .map((_, i) => i)
          .map(index => (
            <View key={index} margin={8}>
              <Avatar />
              <Text>Jhon Doe</Text>
            </View>
          ))}
      </ScrollView>
      {new Array(3)
        .fill(0)
        .map((_, i) => i)
        .map(index => (
          <View
            key={index}
            marginTop={10}
            paddingVertical={8}
            paddingHorizontal={15}
            flexDirection={'row'}>
            <Icon name={'clockcircleo'} size={18} color={'grey'} />
            <View flex={1} paddingLeft={8}>
              <Text style={{fontFamily: Fonts.Roboto_Medium}}>
                application developer{' '}
                <Text
                  style={{
                    fontFamily: Fonts.Roboto_Italic,
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  in jobs
                </Text>
              </Text>
            </View>
            <Icon
              name={'arrowup'}
              size={20}
              color={'grey'}
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </View>
        ))}
      <Text
        style={{
          marginTop: 12,
          marginBottom: 10,
          marginLeft: 5,
          fontFamily: Fonts.Roboto_Regular,
          color: 'grey',
        }}>
        {' '}
        Try searching for
      </Text>
      {new Array(3)
        .fill(0)
        .map((_, i) => i)
        .map(index => (
          <View
            key={index}
            marginTop={10}
            paddingVertical={8}
            paddingHorizontal={15}
            flexDirection={'row'}>
            <Icon name={'search1'} size={18} color={'grey'} />
            <View flex={1} paddingLeft={8}>
              <Text style={{fontFamily: Fonts.Roboto_Medium}}>
                Junior Front end developer{' '}
              </Text>
            </View>
            <Icon
              name={'arrowup'}
              size={20}
              color={'grey'}
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </View>
        ))}
    </SafeAreaView>
  );
};
export default RecentSearch;
