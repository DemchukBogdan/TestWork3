import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../Pages/Account';
import {SvgXml} from 'react-native-svg';
import account from '../../assets/icons/account';
import search from '../../assets/icons/search';
import {useTranslation} from 'react-i18next';
import i18n from '../translations/i18n';
import {Dimensions} from 'react-native';
import Market from '../Pages/Market';
import Chart from "../Pages/Chart";
import info from "../../assets/icons/info";

const initI18n = i18n;
const Tab = createBottomTabNavigator();

function BottomTab() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('en');
  const height = Dimensions.get('window').height;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E71F27',
        tabBarInactiveTintColor: '#454545',
        tabBarStyle: height === 568 ? {height: 50} : {height: 85},
        headerStyle: {
          backgroundColor: '#E71F27',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name={t('Market')}
        component={Market}
        options={{
          tabBarIcon: ({color, size}) => <SvgXml xml={search} stroke={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={t('Chart')}
        component={Chart}
        options={{
          tabBarIcon: ({color, size}) => <SvgXml xml={info} stroke={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={t('Account')}
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgXml xml={account} stroke={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
