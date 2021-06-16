import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
import Header from '../../../commonComponents/header';
import Input from '../../../commonComponents/inputs';
import maileIcon from '../../../assets/icons/mdi_mail.png';
import lockIcon from '../../../assets/icons/mdi_lock.png';

export default function Login({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <Header
          inputTitle="Login Into Your Account"
          onPress={() => navigation.navigate('home')}
        />
        <View style={style.inputsView}>
          <Input placeholder="Email Or User" icon={maileIcon} />
          <View style={style.inputTop}>
            <Input placeholder="Password" icon={lockIcon} />
          </View>
          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('register')}
              color="#EE4A5E"
              title="Login"
            />
          </View>
          <View style={style.bottomTextView}>
            <Text style={style.bottomText}>Register an Account</Text>
            <Image
              style={style.bottomTextLine}
              source={require('../../../assets/images/inputLine.png')}
            />
            <Text style={style.bottomText}>Forgot Password?</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
