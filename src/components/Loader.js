import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = props => {
  return (
    <View flex={1} justifyContent={'center'} alignContent={'center'}>
      {props.message && <Text>{props.message}</Text>}
      <ActivityIndicator color={'#0073b0'} size={25} />
    </View>
  );
};
export default Loader;
