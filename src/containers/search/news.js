import React from 'react';
import {View, Text, Image} from 'react-native';
import Fonts from '../../constants/Fonts';

const News = () => {
  return (
    <View
      style={{
        marginTop: 22,
        padding: 8,
        borderTopWidth: 8,
        borderTopColor: 'rgb(232,229,223)',
      }}>
      <Text
        style={{
          marginLeft: 8,
          color: 'grey',
          fontFamily: Fonts.Roboto_Regular,
        }}>
        Today's news and views
      </Text>
      {new Array(10)
        .fill(0)
        .map((_, i) => i)
        .map(index => (
          <View
            key={index}
            paddingVertical={16}
            flexDirection={'row'}
            borderBottomWidth={1}>
            <View flex={1} paddingLeft={8} flexDirection={'row'}>
              <View>
                <Text
                  style={{fontFamily: Fonts.Roboto_Medium, fontSize: 16}}
                  fontSize={16}
                  numberOfLines={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis provident, nam quis omnis magnam perspiciatis, illo
                  sit nostrum veritatis veniam excepturi inventore adipisci nemo
                  ipsum temporibus placeat repellendus fugit. Ex?
                </Text>
                <Text
                  numberOfLines={2}
                  style={{fontFamily: Fonts.Roboto_Regular, marginTop: 5}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis provident, nam quis omnis magnam perspiciatis, illo
                  sit nostrum veritatis veniam excepturi inventore adipisci nemo
                  ipsum temporibus placeat repellendus fugit. Ex?
                </Text>
              </View>
              <Image
                style={{
                  height: 60,
                  width: 70,
                  borderRadius: 10,
                  marginLeft: 20,
                }}
                source={{
                  uri: 'https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-breaking-news-background-world-global-tv-news-banner-design.jpg?ver=6',
                }}
              />
            </View>
            <View height={60} width={80} marginLeft={8} />
          </View>
        ))}
    </View>
  );
};
export default News;
