import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translations/i18n';
const initI18n = i18n;

function LangBlock(props) {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('');

  const getLang = async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      if (value !== null) {
        setLang(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const changeLang = async lang => {
    try {
      await AsyncStorage.setItem('lang', `${lang}`);
      await i18n.changeLanguage(`${lang}`);
      await getLang();
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getLang();
  }, [lang]);

  return (
    <View>
      <Text style={styles.title}>{t('Change language')}</Text>
      <TouchableOpacity
        style={lang === 'en' ? styles.langButtonActive : styles.langButton}
        onPress={() => changeLang('en')}>
        <Text style={lang === 'en' ? styles.langTextActive : styles.langText}>
          {t('English')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={lang === 'ua' ? styles.langButtonActive : styles.langButton}
        onPress={() => changeLang('ua')}>
        <Text style={lang === 'ua' ? styles.langTextActive : styles.langText}>
          {t('Ukraine')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={lang === 'ru' ? styles.langButtonActive : styles.langButton}
        onPress={() => changeLang('ru')}>
        <Text style={lang === 'ru' ? styles.langTextActive : styles.langText}>
          {t('Russian')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    marginVertical: 20,
    fontSize: 25
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
});

export default LangBlock;
