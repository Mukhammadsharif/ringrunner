import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import {COLORS, dimensions, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/rating.png';
import {ratings} from '../helpers/ratings';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Rating() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <Text style={styles.title}>Рейтинг</Text>
        <Text style={styles.description}>Наблюдайте за достижениями</Text>

        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {ratings.map((score, index) => (
            <View style={styles.cardContainer} key={index}>
              <View key={index} style={styles.card}>
                <Text style={styles.category}> {score.category}</Text>

                <View style={styles.row}>
                  <View style={styles.side}>
                    <Text style={styles.rowTitle}>Место</Text>
                    <View style={styles.scoreContainer}>
                      <Text style={styles.score}>{score?.items[0]?.rank}</Text>
                    </View>
                  </View>

                  <View style={styles.center}>
                    <Text style={styles.rowTitle}>Имя</Text>
                    <Text style={styles.name}>{score?.items[0]?.name}</Text>
                  </View>

                  <View style={styles.side}>
                    <Text style={styles.rowTitle}>Калория</Text>
                    <View style={styles.energyContainer}>
                      <Text style={styles.energy}>
                        {score?.items[0]?.energy * 10} ккал
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <CustomButton
                text={'Подробно'}
                style={{
                  marginTop: 15,
                  width: '70%',
                  alignSelf: 'center',
                }}
                button={{backgroundColor: COLORS.violet, height: 40}}
                onPress={() =>
                  navigation.navigate('RatingDetail', {scores: score})
                }
              />
            </View>
          ))}
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
  cardContainer: {
    marginTop: 20,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  category: {
    fontSize: 20,
    paddingVertical: 15,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    backgroundColor: COLORS.sky,
    color: COLORS.white,
    borderRadius: 12,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  side: {
    width: '30%',
  },
  center: {
    width: '40%',
  },
  rowTitle: {
    textAlign: 'center',
    marginBottom: 15,
    color: COLORS.stroke,
    fontSize: 16,
  },
  scoreContainer: {
    width: 30,
    height: 35,
    backgroundColor: COLORS.textInput,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  score: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 20,
  },
  name: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 17,
    marginTop: 5,
  },
  energyContainer: {
    backgroundColor: COLORS.sky,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
  },
  energy: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 18,
  },
});
