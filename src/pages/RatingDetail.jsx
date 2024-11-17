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
import {COLORS, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/detail.png';
import Back from '../assets/icons/back_icon.png';

export default function RatingDetail({route}) {
  const navigation = useNavigation();
  const {scores} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={BackgroundImage}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>{scores?.category}</Text>

        <ScrollView style={styles.flex} contentContainerStyle={styles.view}>
          {scores?.items?.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.row}>
                <View style={styles.side}>
                  <Text style={styles.rowTitle}>Место</Text>
                  <View style={styles.rankContainer}>
                    <Text style={styles.rank}>{item?.rank}</Text>
                  </View>
                </View>

                <View style={styles.center}>
                  <Text style={styles.rowTitle}>Имя</Text>
                  <Text style={styles.name}>{item?.name}</Text>
                </View>

                <View style={styles.side}>
                  <Text style={styles.rowTitle}>Калория</Text>
                  <View
                    style={
                      index > 2
                        ? styles.energyContainerLose
                        : styles.energyContainer
                    }>
                    <Text style={index > 2 ? styles.energyLose : styles.energy}>
                      {item?.energy * 10} ккал
                    </Text>
                  </View>
                </View>
              </View>
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
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    fontSize: 25,
    color: COLORS.white,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: 20,
    marginTop: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  side: {
    width: '25%',
  },
  center: {
    width: '50%',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.blue,
    paddingHorizontal: 5,
  },
  rowTitle: {
    textAlign: 'center',
    marginBottom: 15,
    color: COLORS.blue,
    fontSize: 16,
  },
  rankContainer: {
    width: 30,
    height: 35,
    backgroundColor: COLORS.violet,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  rank: {
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
    backgroundColor: COLORS.blue,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  energy: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 18,
  },
  energyContainerLose: {
    backgroundColor: '#FFD2D2',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  energyLose: {
    textAlign: 'center',
    color: '#E01E1E',
    fontWeight: '700',
    fontSize: 18,
  },
});
