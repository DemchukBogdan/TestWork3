import React, {useEffect} from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function CheckAuth(props) {
  const navigation = useNavigation();
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        navigation.navigate('BottomTab');
      } else {
        navigation.navigate('Login');
      }
    } catch (e) {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: Dimensions.get('window').height,
      }}
    />
  );
}

export default CheckAuth;
