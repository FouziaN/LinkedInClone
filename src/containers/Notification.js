import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import axios from '../utils/Endpoint';
import Loader from '../components/Loader';
import NotificationItem from '../components/NotificationItem';
import HeaderScreen from '../components/HeaderScreen';

const Notification = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('post')
      .then(res => {
        setNotifications(res.data.data);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <NotificationItem notification={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
