import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {COLORS, dimensions, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/intro.png';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Intro() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <Text style={styles.title}>
          Достигайте своих целей в области здоровья
        </Text>

        <Text style={styles.description}>
          Начните отслеживать свой прогресс на пути к более здоровому образу
          жизни сегодня
        </Text>

        <CustomButton
          text={'Начать'}
          style={{marginTop: 30}}
          button={{backgroundColor: COLORS.introButton}}
          onPress={() => navigation.navigate('TabScreen')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height,
    width: dimensions.width,
  },
  title: {
    fontSize: 35,
    marginTop: dimensions.height / 1.6,
    paddingHorizontal: 20,
    fontFamily: FONTS.bold,
  },
  description: {
    paddingHorizontal: 20,
    fontFamily: FONTS.thin,
    fontSize: 18,
    marginTop: 10,
  },
});
