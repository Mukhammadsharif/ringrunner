import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../context/GlobalContext';

export default function Card({item, index}) {
  const [data, setData] = useState([]);
  const {refresh, setRefresh} = useContext(GlobalContext);

  const defineItemFromStorage = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (!activities) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      console.log(parsedStorage);
      setData(parsedStorage);
    }
  };

  useEffect(() => {
    defineItemFromStorage();
  }, [refresh]);

  const add = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage.push(item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  const remove = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage = parsedStorage.filter(s => s !== item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      <View style={index % 2 === 0 ? styles.header : styles.headerReverse}>
        <Image source={item?.image} style={styles.image} />
        <View style={styles.right}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.description}>{item?.description}</Text>

          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.time}>{item.energy} ккал</Text>
            </View>
          </View>

          <TouchableOpacity
            style={data.includes(item.id) ? styles.buttonActive : styles.button}
            onPress={() => (data.includes(item.id) ? remove() : add())}>
            <Text
              style={
                data.includes(item.id)
                  ? styles.buttonActiveText
                  : styles.buttonText
              }>
              {data.includes(item.id) ? 'Выполнено' : 'Начать'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.white,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerReverse: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  image: {
    objectFit: 'cover',
    height: 247,
    width: Dimensions.get('window').width / 3,
    borderRadius: 12,
  },
  right: {
    width: (Dimensions.get('window').width / 3) * 1.6,
    justifyContent: 'space-between',
    height: '100%',
  },
  name: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 16,
    paddingHorizontal: 20,
    color: COLORS.white,
    marginTop: 5,
  },
  description: {
    textAlign: 'center',
    fontFamily: FONTS.regular,
    fontSize: 12,
    paddingHorizontal: 10,
    marginTop: 5,
    color: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  time: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingHorizontal: 10,
  },
  buttonActive: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.violet,
    height: 40,
    marginTop: 8,
    backgroundColor: COLORS.violet,
    marginBottom: 5,
  },
  buttonActiveText: {
    color: 'white',
    fontFamily: FONTS.regular,
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.white,
    height: 40,
    marginTop: 8,
    backgroundColor: COLORS.white,
    marginBottom: 5,
  },
  buttonText: {
    color: COLORS.blue,
    fontFamily: FONTS.bold,
  },
});
