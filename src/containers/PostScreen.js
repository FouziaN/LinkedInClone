import React, {useRef, useEffect} from 'react';
import Avatar from '../components/Avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {normalize} from '../constants/Dimension';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import BottomSheet, {ActionItem} from '../components/BottomSheet';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Post = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      modalizeRef.current?.open();
    }, 1000);
  }, []);

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView flex={1} backgroundColor={'white'}>
      <View style={styles.header}>
        <Icon
          name={'close'}
          color={'grey'}
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.head_text}>Start Post</Text>
        <Text style={{...styles.head_text, color: Colors.greyTwo}}>Post</Text>
      </View>
      <View style={styles.layout}>
        <View style={styles.layout2}>
          <Avatar size={40} />
          <View marginLeft={10}>
            <Text style={{...styles.head_text, fontSize: normalize(14)}}>
              Fouzia Naaz
            </Text>
            <View style={styles.button}>
              <Icon color={'grey'} name={'earth'} size={15} />
              <View paddingHorizontal={5}>
                <Text style={{color: Colors.greyThree}}>Anyone</Text>
              </View>
              <Icon color={'grey'} name={'arrow-down-drop-circle'} size={15} />
            </View>
          </View>
        </View>

        <TextInput
          placeholder={'What do you want to talk about?'}
          multiline
          style={styles.post_question}
        />
        <Text style={styles.hastTag}>Add hashtag</Text>
        <View style={styles.iconLayout}>
          <View style={styles.footerIcon}>
            <Icon name={'camera'} size={20} color={'grey'} />
            <Icon
              name={'video'}
              size={20}
              color={'grey'}
              style={styles.iconStyle}
            />
            <Icon
              name={'image'}
              size={20}
              color={'grey'}
              style={styles.iconStyle}
            />
            <TouchableOpacity onPress={onOpen}>
              <Icon
                name={'dots-horizontal'}
                color={'grey'}
                size={20}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
          <View padding={8} flexDirection={'row'}>
            <Icon name={'chat-processing-outline'} size={20} color={'grey'} />
            <Text style={styles.footer_text}>Anyone</Text>
          </View>
        </View>

        <BottomSheet ref={modalizeRef}>
          <View style={styles.lauout_bottom}>
            <ActionItem icon={'image-inverted'} title={'Add a Photo'} />
            <ActionItem icon={'video-camera'} title={'Take a video'} />
            <ActionItem
              icon={'500px-with-circle'}
              title={'Celebrate on occasion'}
            />
            <ActionItem
              icon={'text-document-inverted'}
              title={'Add a document'}
            />
            <ActionItem
              icon={'briefcase'}
              title={'Share that you are hiring'}
            />
            <ActionItem icon={'user'} title={'Find an Expert'} />
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};
export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: normalize(10),
    marginHorizontal: normalize(10),
  },
  head_text: {
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(16),
  },
  layout: {
    flex: 1,
    paddingHorizontal: normalize(10),
  },
  layout2: {
    marginTop: normalize(12),
    flexDirection: 'row',
  },
  button: {
    marginTop: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: normalize(1),
    borderColor: Colors.greyThree,
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(5),
    borderRadius: normalize(100),
  },
  post_question: {
    flex: 1,
    fontSize: normalize(15),
    textAlignVertical: 'top',
    marginTop: normalize(15),
  },
  hastTag: {
    fontSize: normalize(14),
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Medium,
  },
  iconLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerIcon: {
    flexDirection: 'row',
    marginTop: normalize(8),
  },
  footer_text: {
    marginLeft: normalize(5),
    color: Colors.greyThree,
    fontFamily: Fonts.Roboto_Medium,
  },
  iconStyle: {
    marginLeft: normalize(8),
  },
  lauout_bottom: {marginTop: normalize(70)},
});
