import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const FitnessQuoteButton = () => {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomQuote = data.quote;
      setQuote(randomQuote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Get Fitness Quote" onPress={fetchRandomQuote} />
      {quote !== '' && <Text>{quote}</Text>}
    </View>
  );
};

export default FitnessQuoteButton;
