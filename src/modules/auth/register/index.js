import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
import Header from '../../../commonComponents/header';
import Input from '../../../commonComponents/inputs';
import personIcon from '../../../assets/icons/person.png';
import maileIcon from '../../../assets/icons/mdi_mail.png';
import phoneIcon from '../../../assets/icons/phone.png';
import cakeIcon from '../../../assets/icons/cake.png';
import locationIcon from '../../../assets/icons/location.png';
import lockIcon from '../../../assets/icons/mdi_lock.png';

export default function Register({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <Header
          inputTitle="Create Your Account"
          onPress={() => navigation.navigate('login')}
        />
        <View style={style.inputsView}>
          <Input icon={personIcon} placeholder="Name" />
          <View style={style.marginTop}>
            <Input icon={maileIcon} placeholder="Email Address" />
          </View>
          <View style={style.marginTop}>
            <Input icon={phoneIcon} placeholder="Phone Number" />
          </View>
          <View style={style.marginTop}>
            <Input icon={cakeIcon} placeholder="Age" />
          </View>
          <View style={style.marginTop}>
            <Input icon={locationIcon} placeholder="Address" />
          </View>
          <View style={style.marginTop}>
            <Input icon={lockIcon} placeholder="Password" />
          </View>

          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('forgotPassword')}
              color="#EE4A5E"
              title="Register"
            />
          </View>
          <View style={style.bottomTextView}>
            <Text style={style.bottomText}>
              Have an account already? Log In
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
