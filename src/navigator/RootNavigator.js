import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../containers/SplashScreen';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignUpScreen';
import OnboardingScreen from '../containers/OnboardingScreen';
import JoinLinkedinScreen from '../containers/JoinLinkedinScreen';
import ForgetPassword from '../containers/ForgetPassword';
import OtpScreen from '../containers/OtpScreen';
import ResetPassword from '../containers/ResetPassword';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';
import MyNetwork from '../containers/MyNetwork';
import PostScreen from '../containers/PostScreen';
import Notification from '../containers/Notification';
import JobsScreen from '../containers/JobsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Chat from '../containers/chat/ChatScreen';
import Search from '../containers/search/search';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HeaderScreen from '../components/HeaderScreen';
import DrawerContent from '../components/LeftDrawer';
import ProfileScreen from '../containers/profile/ProfileScreen';

const Stack = createStackNavigator();
const Pass = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PassStack = () => {
  return (
    <Pass.Navigator headerMode={false}>
      <Pass.Screen name="ForgetPass" component={ForgetPassword} />
      <Pass.Screen name="OtpScreen" component={OtpScreen} />
      <Pass.Screen name="ResetPassword" component={ResetPassword} />
    </Pass.Navigator>
  );
};

const Draw = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="drawer" component={HeaderScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'home'}
              color={color}
              size={size}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Network"
        component={MyNetwork}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'user-friends'}
              color={color}
              size={size}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'plus-square'}
              color={color}
              size={size}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'bell'}
              color={color}
              size={size}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Job"
        component={JobsScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'briefcase'}
              color={color}
              size={size}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomTabButton = props => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, {borderTopColor: 'black', borderTopWidth: 2}]
        : props.style
    }
  />
);

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboard" component={OnboardingScreen} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="JoinLinkedin" component={JoinLinkedinScreen} />
      <Stack.Screen name="PassStack" component={PassStack} />
      <Stack.Screen name="HomeScreen" component={Draw} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
