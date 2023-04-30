import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/image/imagelanding.png')}
        style={styles.stretch}></Image>

      <View style={styles.loginview}>
        <View style={{marginTop: 38}}></View>
        <Text style={styles.textlogin}>Welcome,</Text>
        <Text style={styles.textlogin}>Please Register</Text>
        <View style={{marginTop: 20}}></View>
        <Text style={styles.fonttextbox}>Nama</Text>
        <View style={styles.textinput}>
          <TextInput placeholder="Enter Your Name"></TextInput>
        </View>
        <Text style={styles.fonttextbox}>Email</Text>
        <View style={styles.textinput}>
          <TextInput placeholder="Youremail@gmail.com"></TextInput>
        </View>

        <Text style={styles.fonttextbox}>Password</Text>
        <View style={styles.textinput}>
          <TextInput placeholder="Enter password"></TextInput>
        </View>
        <Text style={styles.fonttextbox}>Confirm Password</Text>
        <View style={styles.textinput}>
          <TextInput placeholder="Re-entered password"></TextInput>
        </View>

        <View style={styles.loginwith}>
          <Image
            source={require('../assets/icon/Gmail.png')}
            style={styles.iconloginwith}></Image>
          <Image
            source={require('../assets/icon/Facebook.png')}
            style={styles.iconloginwith}></Image>
          <Image
            source={require('../assets/icon/Twitter.png')}
            style={styles.iconloginwith}></Image>
        </View>
        <View style={{marginTop: 70}}></View>
        <TouchableOpacity>
          <View style={styles.buttonlogin}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 17,
                fontWeight: '700',
                alignItems: 'center',
                textAlignVertical: 'center',
                marginTop: 18,
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{marginBottom: 90}}></View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>Have An Account Yet? </Text>

        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.pop()}>
          <Text
            style={[styles.footertext, {fontWeight: '500', color: '#BB2427'}]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonlogin: {
    height: 55,
    width: '90%',
    backgroundColor: '#BB2427',
    borderRadius: 10,
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  footertext: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#717171',
    fontWeight: '300',
  },

  textinput: {
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    width: '90%',
    backgroundColor: '#F6F8FF',
    borderRadius: 8,
    marginVertical: 11,
  },
  forgotpassword: {
    fontWeight: '300',
    fontSize: 10,
    textAlignVertical: 'center',
    textAlign: 'right',
    marginLeft: 145,
  },

  iconloginwith: {
    marginHorizontal: 9,
  },
  loginwith: {
    marginLeft: 13,
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  fonttextbox: {
    color: '#BB2427',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 20,
  },
  textlogin: {
    fontFamily: 'Montserrat',
    color: '#0A0827',
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
  },
  loginview: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    marginTop: -35,
  },
  stretch: {
    width: '100%',
    height: 317,
    resizeMode: 'stretch',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default Register;
