import React from 'react';
import {Image, View} from 'react-native';

const Avatar = ({size, picture}) => {
  size = size ? size : 60;

  return (
    <View
      height={size}
      width={size}
      borderRadius={size / 2}
      backgroundColor={'grey'}
      overflow={'hidden'}>
      <Image
        style={{flex: 1}}
        source={{
          uri:
            picture ||
            'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        }}
      />
    </View>
  );
};
export default Avatar;
