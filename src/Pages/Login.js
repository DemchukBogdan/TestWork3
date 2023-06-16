import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import mainPhoto from '../../assets/images/mainPhoto.jpeg';
import MainButton from '../Components/MainButton';
import {useTranslation} from 'react-i18next';
import NameInput from '../Components/NameInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login(props) {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [login, setLogin] = useState('');

  const addUser = async login => {
    try {
      await AsyncStorage.setItem('token', `${login}`);
      navigation.navigate('BottomTab');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ImageBackground source={mainPhoto} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.promText}>{t('Prom')}</Text>
        <View style={styles.normalize}>
          <NameInput
            placeholder={t('Login')}
            onChange={setLogin}
            value={login}
          />
        </View>
        <View style={styles.normalize}>
          <MainButton
            title={t('Continue')}
            onPress={() => addUser(login)}
            disabled={login.length < 3}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height * 0.25,
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  image: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  promText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  nameInput: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  mainButton: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 22,
    color: 'white',
  },
  normalize: {
    marginTop: 20,
  },
});

export default Login;
