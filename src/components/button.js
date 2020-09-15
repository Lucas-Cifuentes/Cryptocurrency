import React from 'react';
import {Text, TouchableHighlight, Alert, StyleSheet} from 'react-native';

const button = ({coin, seceltedCrypto, setQuote, setLoading}) => {
  const handlePress = () => {
    if (coin.trim() === '' || seceltedCrypto.trim() === '') {
      Alert.alert('Error', 'All fields are required', [
        {
          text: 'OK',
        },
      ]);
    } else {
      setLoading(true);
      getPrice();
    }
  };

  const getPrice = () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${seceltedCrypto}&tsyms=${coin}`;
    fetch(url).then((res) =>
      res.json().then((res) => {
        setQuote(res.DISPLAY[seceltedCrypto][coin]);
        setLoading(false);
      }),
    );
  };

  return (
    <TouchableHighlight onPress={handlePress} style={styles.btn}>
      <Text style={styles.textBtn}>Quote</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4E45E4',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default button;
