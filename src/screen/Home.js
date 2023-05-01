import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const Home = ({}) => {
  return (
    <ScrollView>
      <View style={styles.rectanglehome}>
        <View style={{flexDirection: 'row', marginTop: 56, marginLeft: 22}}>
          <Image
            source={require('../assets/image/photoprofil.jpeg')}
            style={styles.photoprofil}></Image>
          <Image
            source={require('../assets/icon/Bag.png')}
            style={styles.bagicon}></Image>
        </View>
        <Text style={styles.sayhello}>Hello, Rivanka!</Text>
        <Text style={styles.jargon}>Ingin merawat dan perbaiki</Text>
        <Text style={styles.jargon}>sepatumu? cari disini</Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 22}}>
          <View style={styles.searchcontainer}>
            <Image
              source={require('../assets/icon/Search.png')}
              style={styles.searchicon}></Image>
          </View>
          <View style={styles.filtercontainer}>
            <Image
              source={require('../assets/icon/Filter.png')}
              style={styles.searchicon}></Image>
          </View>
        </View>
      </View>
      <ScrollView style={styles.rectanglehomescroll}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 18,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.boxcategory}>
            <Image
              source={require('../assets/icon/sepatu.png')}
              style={styles.iconcategory}></Image>
            <Text style={styles.texticoncategory}>Sepatu</Text>
          </View>
          <View style={styles.boxcategory}>
            <Image
              source={require('../assets/icon/jaket.png')}
              style={styles.iconcategory}></Image>
            <Text style={styles.texticoncategory}>Jaket</Text>
          </View>
          <View style={styles.boxcategory}>
            <Image
              source={require('../assets/icon/tas.png')}
              style={styles.iconcategory}></Image>
            <Text style={styles.texticoncategory}>Tas</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 22,
            marginTop: 22,
            marginBottom: 20,
          }}>
          <Text style={{fontWeight: '600', color: '#0A0827', fontSize: 12}}>
            Rekomendasi Terdekat
          </Text>

          <Text
            style={{
              right: 30,
              position: 'absolute',
              color: '#E64C3C',
              fontWeight: '500',
              fontSize: 10,
            }}>
            View All
          </Text>
        </View>
        <View
          style={{
            width: '87%',
            height: 133,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '87%',
            height: 133,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '87%',
            height: 133,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '87%',
            height: 133,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            alignSelf: 'center',
          }}></View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectanglehome: {
    width: '100%',
    height: 295,
    backgroundColor: '#FFFFFF',
  },
  iconcategory: {
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  texticoncategory: {
    fontWeight: '600',
    color: '#BB2427',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 9,
  },
  boxcategory: {
    width: 95,
    height: 95,
    backgroundColor: 'white',
    borderRadius: 16.3,
    alignSelf: 'center',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  filtercontainer: {
    height: 45,
    width: 45,
    marginLeft: 15,
    backgroundColor: '#F6F8FF',
    borderRadius: 14,
  },
  searchcontainer: {
    height: 45,
    width: '78%',
    backgroundColor: '#F6F8FF',
    borderRadius: 14,
  },
  rectanglehomescroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F8FF',
  },
  photoprofil: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  bagicon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    right: 24,
    position: 'absolute',
  },
  searchicon: {
    width: 16,
    height: 16,
    marginLeft: 16,
    textAlignVertical: 'center',
    marginTop: 15,
  },
  sayhello: {
    marginLeft: 22,
    fontSize: 15,
    fontWeight: '500',
    height: 36,
    marginTop: 5,
    color: '#034262',
  },
  jargon: {
    fontWeight: '700',
    fontSize: 20,
    color: '#0A0827',
    marginLeft: 22,
    marginTop: 5,
  },
});

export default Home;
