import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Avatar from '../components/Avatar';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {StyleSheet} from 'react-native';
import {normalize, vh} from '../constants/Dimension';

const FOLLOWERS = (Math.random() * 10).toFixed(1);
const TIME = (Math.random() * 11 + 1).toFixed();

const PostCard = ({openAction, post}) => {
  const [thumbsUp, setThumbsUp] = useState(false);

  onLikeClic = () => {
    setThumbsUp(!thumbsUp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLine} />
      <View style={styles.postLayout}>
        <Avatar picture={post.owner.picture} size={50} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.textStyle}>
            {`${post.owner.firstName} ${post.owner.lastName}`}
          </Text>
          <Text>{FOLLOWERS} m followers</Text>
          <Text>{TIME} h</Text>
        </View>
        <View>
          <Icon name={'ellipsis-horizontal'} size={25} onPress={openAction} />
        </View>
      </View>
      <View style={styles.textSpacing}>
        <Text>{post.text}</Text>
      </View>
      <View style={styles.image}>
        <Image
          resizeMode={'cover'}
          style={styles.imageHeight}
          source={{uri: post.image}}
        />
      </View>

      <View style={styles.textSpacing}>
        <Text style={styles.postText}>{post.text}</Text>
      </View>
      <View style={styles.likeValue}>
        <View style={styles.iconCircle}>
          <Icon name={'thumbs-up'} size={10} color={Colors.white} />
        </View>
        <Text>{post.likes}</Text>
        <Text style={styles.comment_text}> 10 comments</Text>
      </View>
      <View style={styles.greySpacingLine}>
        <TouchableOpacity style={styles.iconLayout} onPress={onLikeClic}>
          <Icon
            name={thumbsUp ? 'thumbs-up' : 'thumbs-up-outline'}
            color={thumbsUp ? '#0073b0' : 'grey'}
            size={15}
          />
          <Text
            style={{...styles.iconText, color: thumbsUp ? '#0073b0' : 'grey'}}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconLayout}>
          <Icon
            name={'chatbox-ellipses-outline'}
            size={15}
            color={Colors.greyThree}
          />
          <Text style={styles.iconText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconLayout}>
          <Icon name={'md-share-social'} size={15} color={Colors.greyThree} />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconLayout} color={Colors.greyThree}>
          <Icon
            name={'md-send'}
            size={15}
            color={Colors.greyThree}
            style={{transform: [{rotate: '-45deg'}]}}
          />
          <Text style={styles.iconText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PostCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  topLine: {
    borderWidth: normalize(3),
    borderColor: Colors.backgroundColor,
    marginBottom: normalize(10),
  },
  postLayout: {
    paddingHorizontal: normalize(8),
    flexDirection: 'row',
    paddingHorizontal: normalize(8),
  },
  details: {
    flex: 1,
    marginLeft: normalize(8),
  },
  textStyle: {
    fontFamily: Fonts.Roboto_Medium,
  },
  textSpacing: {
    padding: normalize(10),
  },
  image: {
    height: vh(200),
    backgroundColor: Colors.blue,
  },
  imageHeight: {height: vh(200)},
  postText: {
    fontFamily: Fonts.Roboto_Medium,
  },
  likeValue: {
    marginLeft: normalize(10),
    flexDirection: 'row',
  },
  iconCircle: {
    backgroundColor: Colors.blue,
    borderRadius: normalize(100),
    marginRight: normalize(8),
    padding: normalize(3),
  },
  greySpacingLine: {
    borderTopColor: Colors.greyTwo,
    borderTopWidth: normalize(1),
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
    flexDirection: 'row',
    padding: normalize(8),
  },
  iconLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    color: 'grey',
  },
  comment_text: {
    position: 'absolute',
    right: normalize(8),
    color: Colors.greyThree,
    fontFamily: Fonts.Roboto_Regular,
  },
});
