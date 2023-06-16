import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import moment from 'moment/moment';

const Item = ({name, price, time}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {moment(time).format('dddd, MMMM Do YYYY, h:mm:ss a')}
    </Text>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{price} $</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
  },
});

export default Item;
