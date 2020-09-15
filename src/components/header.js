import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>Cryptocurrency</Text>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E45E4',
    fontFamily: 'Lato-Black',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
});
