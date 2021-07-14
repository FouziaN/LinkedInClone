import React, {useState, useEffect} from 'react';
import ChatItem from './chatItem';
import axios from '../../utils/Endpoint';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Loader from '../../components/Loader';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {normalize} from '../../constants/Dimension';

const Chat = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('post')
      .then(res => {
        setChats(res.data.data);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icons
          name={'arrow-left'}
          size={25}
          color={'#616161'}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.message_header}>Messaging</Text>
        <Icons
          name={'file-document-edit-outline'}
          style={styles.icon}
          color={'#616161'}
          size={25}
        />
        <Icons
          name={'dots-horizontal'}
          size={27}
          color={'#616161'}
          style={{marginLeft: 15}}
        />
      </View>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.search_view}>
              <View style={styles.searchBox_layout}>
                <Icon name={'search'} size={15} color={'#616161'} />
                <View flex={1}>
                  <TextInput
                    numberOfLines={1}
                    placeholder={'Seach messages'}
                    style={styles.search_text}
                  />
                </View>
                <Icon
                  name={'settings'}
                  size={20}
                  color={'#616161'}
                  style={styles.icon2}
                />
              </View>
            </View>
          )}
          data={chats}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ChatItem chat={item} />}
        />
      )}
    </SafeAreaView>
  );
};
export default Chat;

const styles = StyleSheet.create({
  search_view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.backgroundColor,
    borderWidth: normalize(8),
  },
  searchBox_layout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(5),
  },
  header: {
    alignItems: 'center',
    marginHorizontal: normalize(5),
    flexDirection: 'row',
    marginBottom: normalize(10),
  },
  search_text: {
    fontSize: normalize(16),
    marginLeft: normalize(5),
    color: Colors.greyThree,
  },
  container: {flex: 1, backgroundColor: Colors.white},
  icon2: {transform: [{rotate: '-90deg'}], margin: normalize(5)},
  message_header: {
    marginLeft: normalize(90),
    fontSize: normalize(18),
    fontFamily: Fonts.Roboto_Medium,
  },
  icon: {marginLeft: normalize(90)},
});
