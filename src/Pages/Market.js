import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {store} from '../redux/store';
import {SvgXml} from 'react-native-svg';
import arrow from '../../assets/icons/arrow';
import {BlurView} from '@react-native-community/blur';
import Item from '../Components/Item';
import OptionModal from '../Components/OptionModal';
import {useTranslation} from 'react-i18next';

function Market(props) {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {bitcoinArray} = useSelector(state => state.bitcoinArray);
  const {delay} = useSelector(state => state.delay);

  const getPrice = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1',
        {
          headers: {
            'X-CMC_PRO_API_KEY': '07b758d9-eb3c-4b0a-8353-27db930649b3',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res?.data) {
        store.dispatch({
          type: 'GET_NEW_PRICE',
          payload: res.data.data[1],
          time: res.data.status.timestamp,
        });
      } else {
      }
    } catch (error) {
      console.log('axios error', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPrice();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getPrice();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.optionBtn}>
        <Text style={styles.title}>{t('Options')}</Text>
        <SvgXml xml={arrow} />
      </TouchableOpacity>
      <FlatList
        data={bitcoinArray}
        renderItem={({item}) => (
          <Item
            name={item.name}
            price={item.quote?.USD.price}
            time={item.time}
          />
        )}
        keyExtractor={item => item.time}
        initialNumToRender={5}
      />
      {modalVisible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <OptionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  optionBtn: {
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 150,
    marginTop: 30,
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 20,
    fontSize: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Market;
