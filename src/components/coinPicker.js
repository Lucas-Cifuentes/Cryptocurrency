import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const coinPicker = ({coin, setCoin}) => {
  const getCoin = (selectedCoin) => {
    setCoin(selectedCoin);
  };

  return (
    <>
      <Text style={styles.label}>Coin</Text>
      <Picker
        selectedValue={coin}
        onValueChange={(selectedCoin) => getCoin(selectedCoin)}>
        <Picker.Item label="- Select -" value="" />
        <Picker.Item label="United States Dollar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Pound Sterling" value="GBP" />
        <Picker.Item label="Argentine Peso" value="ARS" />
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
});

export default coinPicker;
