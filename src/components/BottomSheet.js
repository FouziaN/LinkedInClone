import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';
import {normalize} from '../constants/Dimension';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const BottomSheet = React.forwardRef(({children}, ref) => {
  return (
    <Modalize
      ref={ref}
      onBackButtonPress={() => {
        ref.current?.close();
        return true;
      }}
      closeOnOverlayTap={true}
      panGestureEnabled
      withHandle
      modalHeight={SCREEN_HEIGHT * 0.4}>
      {children}
    </Modalize>
  );
});

export default BottomSheet;

export const ActionItem = ({icon, title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {icon ? <Icon name={icon} size={20} color={Colors.greyThree} /> : null}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: normalize(10),
  },
  text: {marginLeft: normalize(10), color: Colors.greyThree},
});
