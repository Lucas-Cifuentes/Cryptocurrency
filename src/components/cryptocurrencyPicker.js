import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const cryptocurrencyPicker = ({
  cryptocurrency,
  seceltedCrypto,
  setSeceltedCrypto,
}) => {
  const selectCrypto = (selectedCrypto) => {
    setSeceltedCrypto(selectedCrypto);
  };

  return (
    <>
      <Text style={styles.label}>Cryptocurrency</Text>
      <Picker
        selectedValue={seceltedCrypto}
        onValueChange={(selectedCrypto) => selectCrypto(selectedCrypto)}>
        <Picker.Item label="- Select -" value="" />
        {cryptocurrency.map((crypto) => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
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

export default cryptocurrencyPicker;
