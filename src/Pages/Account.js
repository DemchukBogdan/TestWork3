import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translations/i18n';
import {useTranslation} from 'react-i18next';
import {SvgXml} from 'react-native-svg';
import logOut from '../../assets/icons/logOut';
import {useNavigation} from '@react-navigation/native';
import LangBlock from '../Components/langBlock';
import acc from '../../assets/images/account.png';
import { store } from "../redux/store";
const initI18n = i18n;

function Account(props) {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [user, setUser] = useState('');

  const logOutBtn = async () => {
    try {
      await AsyncStorage.removeItem('token');
      store.dispatch({
        type: 'CLEAR_ARRAY',
      });
      store.dispatch({
        type: 'CLEAR_DELAY',
      });
      navigation.navigate('Login');
    } catch (exception) {
      return false;
    }
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={acc} style={styles.accPhoto} />
        <Text style={styles.accText}>
          {t('Hi')}, {user}
        </Text>
      </View>
      <LangBlock />
      <View style={styles.logOutContainer}>
        <TouchableOpacity style={styles.blockBtn} onPress={() => logOutBtn()}>
          <View style={styles.btnNormalize}>
            <SvgXml xml={logOut} stroke="#E71F27" />
            <Text style={styles.textBtn}>{t('Go out')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  accPhoto: {
    marginTop: 16,
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
  },
  accText: {
    marginVertical: 10,
    textAlign: 'center',
  },
  langButton: {
    marginTop: 10,
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langText: {
    color: 'red',
  },
  langButtonActive: {
    marginTop: 10,
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langTextActive: {
    color: 'white',
  },
  logOutContainer: {
    position: 'absolute',
    marginTop: 20,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    bottom: 20,
  },
  btnNormalize: {
    width: Dimensions.get('window').width * 0.86,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  textBtn: {
    marginLeft: 20,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 28,
    alignItems: 'center',
    letterSpacing: 0.75,
    color: '#454545',
  },
});

export default Account;
