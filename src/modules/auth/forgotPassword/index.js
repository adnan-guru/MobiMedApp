import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
import Header from '../../../commonComponents/header';
import keyImg from '../../../assets/icons/keyIcon.png';
import Input from '../../../commonComponents/inputs';
import mailIcon from '../../../assets/icons/mdi_mail.png';
import phoneIcon from '../../../assets/icons/phone.png';

export default function ForgotPassword({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <Header
          icon={keyImg}
          inputTitle="Forgot Your Password"
          onPress={() => navigation.navigate('register')}
        />

        <View style={style.inputsView}>
          <Input icon={mailIcon} placeholder="Email Address" />
          <View style={style.inputTop}>
            <Input icon={phoneIcon} placeholder="Phone Number" />
          </View>

          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('updatePassword')}
              color="#EE4A5E"
              title="Next"
            />
          </View>
          <View style={style.bottomTextView}>
            <Text style={style.bottomText}>Register</Text>
            <Image
              style={style.bottomTextLine}
              source={require('../../../assets/images/inputLine.png')}
            />
            <Text style={style.bottomText}>Login</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
