import React, {useState} from 'react';
import {StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native';

import Header from './src/components/header';
import Form from './src/components/form';
import Quote from './src/components/quote';

const App = () => {
  const [coin, setCoin] = useState('');
  const [seceltedCrypto, setSeceltedCrypto] = useState('');
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <Form
          coin={coin}
          seceltedCrypto={seceltedCrypto}
          setCoin={setCoin}
          setSeceltedCrypto={setSeceltedCrypto}
          setQuote={setQuote}
          setLoading={setLoading}
        />
        {loading ? (
          <ActivityIndicator
            style={styles.loading}
            color="#4E45E4"
            size="large"
          />
        ) : (
          <Quote quote={quote} loading={loading} />
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: '100%',
  },
  loading: {
    marginTop: 15,
  },
});

export default App;
