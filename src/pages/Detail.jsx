import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import {workouts} from '../helpers/workouts';
import Card from '../components/Card';
import {COLORS, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/detail.png';
import Back from '../assets/icons/back_icon.png';

export default function Detail() {
  const navigation = useNavigation();
  const {category} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={BackgroundImage}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>{category}</Text>

        <ScrollView style={{flex: 1}} contentContainerStyle={styles.view}>
          {workouts
            .filter(ex => ex.category === category)
            .map((item, index) => (
              <Card item={item} key={index} index={index} />
            ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backIcon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
    marginTop: 60,
    marginLeft: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 12,
  },
  view: {
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    fontSize: 25,
    color: COLORS.white,
  },
});
