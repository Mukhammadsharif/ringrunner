import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, dimensions, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/workout.png';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/GlobalContext';
import ChevronRight from '../assets/icons/chevron_right.png';
import {workouts} from '../helpers/workouts';

export default function Workout() {
  const navigation = useNavigation();
  const {setCategory} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <Text style={styles.title}>Начни день со спорта</Text>
        <Text style={styles.description}>Посмотрим расписание на сегодня</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flex}
          contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory(workouts[0].category);
              navigation.navigate('Detail');
            }}>
            <Image source={workouts[0].image} style={styles.image} />
            <Text style={styles.categoryName}>{workouts[0].category}</Text>
            <Image source={ChevronRight} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory(workouts[10].category);
              navigation.navigate('Detail');
            }}>
            <Image source={workouts[10].image} style={styles.image} />
            <Text style={styles.categoryName}>{workouts[10].category}</Text>
            <Image source={ChevronRight} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory(workouts[20].category);
              navigation.navigate('Detail');
            }}>
            <Image source={workouts[20].image} style={styles.image} />
            <Text style={styles.categoryName}>{workouts[20].category}</Text>
            <Image source={ChevronRight} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory(workouts[30].category);
              navigation.navigate('Detail');
            }}>
            <Image source={workouts[30].image} style={styles.image} />
            <Text style={styles.categoryName}>{workouts[30].category}</Text>
            <Image source={ChevronRight} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory(workouts[40].category);
              navigation.navigate('Detail');
            }}>
            <Image source={workouts[40].image} style={styles.image} />
            <Text style={styles.categoryName}>{workouts[40].category}</Text>
            <Image source={ChevronRight} style={styles.chevronRight} />
          </TouchableOpacity>
        </ScrollView>
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
  flex: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
    paddingBottom: 100,
    marginTop: 100,
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
  },
  category: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  chevronRight: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 12,
  },
  categoryName: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    width: '50%',
    textAlign: 'center',
    color: COLORS.white,
    textDecorationLine: 'underline',
  },
});
