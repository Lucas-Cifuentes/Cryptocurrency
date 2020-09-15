import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const quote = ({quote}) => {
  if (Object.keys(quote).length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.price]}>{quote.PRICE}</Text>
      <Text style={styles.text}>Max Today: {quote.HIGHDAY}</Text>
      <Text style={styles.text}>Min Today: {quote.LOWDAY}</Text>
      <Text style={styles.text}>Last Update: {quote.LASTUPDATE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E45E4',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    paddingVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  price: {
    fontSize: 35,
  },
});

export default quote;
