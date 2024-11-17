import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {COLORS, dimensions, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/profile.png';
import {GlobalContext} from '../context/GlobalContext';
import {workouts} from '../helpers/workouts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '../assets/icons/gantel.png';

export default function Profile() {
  const {name, setName, phone, setPhone, email, setEmail, refresh} =
    useContext(GlobalContext);
  const [valueCost, setValueCost] = useState(0);
  const [percent, setPercent] = useState(0);

  const getStorage = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (!activities) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      if (parsedStorage) {
        let done = workouts.filter(item => parsedStorage.includes(item.id));
        if (done?.length) {
          let cost = 0;
          done.forEach(item => {
            cost = cost + parseInt(item.energy, 10);
          });

          let all = 0;
          workouts.forEach(item => {
            all = all + parseInt(item.energy, 10);
          });

          let localPercent = (cost / all) * 100;

          setPercent(localPercent);

          setValueCost(cost);
        }
      } else {
        setValueCost(0);
      }
    }
  };

  useEffect(() => {
    getStorage();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <Text style={styles.title}>Профиль</Text>
        <Text style={styles.description}>Отслеживай статистику</Text>

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите ваше имя'}
          value={name}
          onChangeText={value => {
            setName(value);
            AsyncStorage.setItem('name', value);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите ваш телефон'}
          value={phone}
          onChangeText={value => {
            setPhone(value);
            AsyncStorage.setItem('phone', value);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите вашу почту'}
          value={email}
          onChangeText={value => {
            setEmail(value);
            AsyncStorage.setItem('email', value);
          }}
        />

        <View style={styles.card}>
          <Image source={Icon} style={styles.icon} />

          <Text style={styles.name}> {Math.round(percent)} %</Text>

          <Text style={styles.name}>
            {valueCost} ккал {'\n'} потрочено
          </Text>
        </View>
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
    color: COLORS.white,
    fontFamily: FONTS.bold,
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 60,
  },
  description: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.thin,
    marginTop: 10,
    paddingLeft: 20,
    marginBottom: dimensions.height / 4,
  },
  textInput: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    borderColor: COLORS.violet,
    borderWidth: 0.8,
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 14,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.textInput,
  },
  card: {
    width: '85%',
    alignSelf: 'center',
    borderColor: COLORS.violet,
    borderWidth: 1.5,
    padding: 20,
    marginTop: 50,
    borderRadius: 25,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  icon: {
    height: 100,
    objectFit: 'contain',
    width: 80,
  },
  name: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.violet,
  },
});
