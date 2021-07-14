import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from '../utils/Endpoint';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loader from '../components/Loader';
import User from '../components/User';
import HeaderScreen from '../components/HeaderScreen';
import Fonts from '../constants/Fonts';
import {normalize} from '../constants/Dimension';
import Colors from '../constants/Colors';

const MyNetwork = () => {
  const [loading, setLoading] = useState(false);
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('user')
      .then(res => setNetworks(res.data.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <ScrollView contentContainerStyle={styles.scroll_view}>
        <View style={styles.layout}>
          <Text style={styles.textStyle}>Manage my network</Text>
          <TouchableOpacity>
            <Icon name={'chevron-right'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{...styles.layout, marginTop: normalize(8)}}>
          <Text style={styles.text}>Invitations</Text>
          <TouchableOpacity>
            <Icon name={'chevron-right'} size={30} />
          </TouchableOpacity>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.heading_List}>
              <Text style={styles.heading}>
                People you may know from your university
              </Text>
              <View style={styles.list}>
                {networks.map((user, index) => (
                  <User key={index} user={user} />
                ))}
              </View>
            </View>
            <View style={styles.heading_List}>
              <Text style={styles.heading}>Software Engineer you may know</Text>
              <View style={styles.list}>
                {networks.map((user, index) => (
                  <User key={index} user={user} />
                ))}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyNetwork;

const styles = StyleSheet.create({
  layout: {
    padding: normalize(12),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(14),
  },
  text: {
    color: Colors.blue,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(14),
  },
  heading_List: {
    marginTop: normalize(8),
    backgroundColor: Colors.white,
  },
  heading: {
    margin: normalize(10),
    fontFamily: Fonts.Roboto_Regular,
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll_view: {
    flexGrow: 1,
    backgroundColor: '#d3d3d3',
  },
});
