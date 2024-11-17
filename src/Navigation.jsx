import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import Intro from './pages/Intro';
import ProfileActiveIcon from '../src/assets/tab/profile_tab_icon_active.png';
import ProfileIcon from '../src/assets/tab/profile_tab_icon.png';
import RatingActiveIcon from '../src/assets/tab/rating_tab_icon_active.png';
import RatingIcon from '../src/assets/tab/rating_tab_icon.png';
import WorkoutActiveIcon from '../src/assets/tab/workout_tab_icon_active.png';
import WorkoutIcon from '../src/assets/tab/workout_tab_icon.png';
import Workout from './pages/Workout';
import Rating from './pages/Rating';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import RatingDetail from './pages/RatingDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={Intro} name="Intro" />
        <Stack.Screen component={TabScreen} name="TabScreen" />
        <Stack.Screen component={Detail} name="Detail" />
        <Stack.Screen component={RatingDetail} name="RatingDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabScreen = ({navigation}) => {
  const [color, setColor] = useState(COLORS.blue);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          backgroundColor: color,
          height: 90,
          paddingTop: 5,
        },
        tabBarHideOnKeyboard: true,
        gestureEnabled: false,
        tabBarLabelStyle: {
          marginTop: 15,
          fontSize: 14,
          fontFamily: FONTS.bold,
        },
        tabBarActiveTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? WorkoutActiveIcon : WorkoutIcon}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: 'Упражнения',
        }}
      />

      <Tab.Screen
        name="Rating"
        component={Rating}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? RatingActiveIcon : RatingIcon}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: 'Рейтинг',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? ProfileActiveIcon : ProfileIcon}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 35,
    height: 35,
    objectFit: 'contain',
    marginTop: 10,
  },
});
