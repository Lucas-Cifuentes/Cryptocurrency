import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CoinPicker from './coinPicker';
import CryptocurrencyPicker from './cryptocurrencyPicker';
import Button from './button';

const form = ({
  coin,
  seceltedCrypto,
  setCoin,
  setSeceltedCrypto,
  setQuote,
  setLoading,
}) => {
  const [cryptocurrency, setCryptocurrency] = useState([]);

  useEffect(() => {
    getCryptoCurrency();
  }, []);

  const getCryptoCurrency = () => {
    fetch(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
    ).then((res) =>
      res.json().then((res) => {
        setCryptocurrency(res.Data);
      }),
    );
  };

  return (
    <View style={styles.container}>
      <CoinPicker coin={coin} setCoin={setCoin} />
      <CryptocurrencyPicker
        cryptocurrency={cryptocurrency}
        seceltedCrypto={seceltedCrypto}
        setSeceltedCrypto={setSeceltedCrypto}
      />
      <Button
        coin={coin}
        seceltedCrypto={seceltedCrypto}
        setQuote={setQuote}
        setLoading={setLoading}
      />
    </View>
  );
};

export default form;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2.5%',
  },
});
