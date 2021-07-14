import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import axios from '../utils/Endpoint';
import HeaderScreen from '../components/HeaderScreen';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';
import BottomSheet, {ActionItem} from '../components/BottomSheet';
import {normalize} from '../constants/Dimension';

const HomeScreen = () => {
  const modalizeRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('post')
      .then(res => {
        console.log(res);
        setPosts(res.data.data);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <View>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PostCard
                post={item}
                openAction={() => modalizeRef.current?.open()}
              />
            )}
          />
        )}
      </View>
      <BottomSheet ref={modalizeRef}>
        <View style={styles.bottomSheet_margin}>
          <ActionItem icon={'bookmark'} title={'Save'} />
          <ActionItem icon={'share-alternative'} title={'Share via'} />
          <ActionItem icon={'circle-with-cross'} title={'Unfollow'} />
          <ActionItem icon={'sound-mute'} title={'Mute'} />
          <ActionItem
            icon={'eye-with-line'}
            title={'I dont want to see this'}
          />
          <ActionItem icon={'flag'} title={'Report this post'} />
          <ActionItem icon={'eye'} title={'Who can see this post?'} />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bottomSheet_margin: {
    marginTop: normalize(40),
  },
});
