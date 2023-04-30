import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Splashscreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthNavigation');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/splash.png')}
        style={styles.stretch}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  stretch: {
    width: 230,
    height: 238,
    resizeMode: 'stretch',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 150,
  },
});

export default Splashscreen;
