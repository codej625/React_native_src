import React, { useState } from 'react';
import { Image, StyleSheet, Button, Text, View } from 'react-native';
//==============================================================
const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }
  const onReset = () => {
    setNumber(prevNumber => prevNumber = 0);
  }
  //==============================================================
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/275929008_490542826067533_407513471873107866_n.jpg?stp=dst-jpg_p370x247&_nc_cat=100&ccb=1-7&_nc_sid=85a577&_nc_ohc=77xBxX3KXjQAX-K1B5n&_nc_ht=scontent-ssn1-1.xx&oh=00_AT8rw5uLii-uyo87ZJM6rMbcyberc4mdfoTCtIHqmxhL-A&oe=62AA42F3',
        }}
      />
      <Text style={styles.conuter}>{number}</Text>
      <Button
        style={styles.button}
        title='plus'
        onPress={onIncrease}
      ></Button>
      <Button
        style={styles.button}
        title='reset'
        onPress={onReset}
      ></Button>
      <Button
        style={styles.button}
        title='minus'
        onPress={onDecrease}
      ></Button>
    </View>
  );
}
//==============================================================
const styles = StyleSheet.create({
  conuter: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    height: 130,
    padding: 35,
    backgroundColor: 'rgba(128, 128, 128, 0.8)'
  },
  button: {
    fontSize: 50,
  },
  logo: {
    width: 412,
    height: 423,
  },
});
//==============================================================
export default Counter;