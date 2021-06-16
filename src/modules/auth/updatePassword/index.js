import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
import Header from '../../../commonComponents/header';
import keyIcon from '../../../assets/icons/keyIcon.png';
import Input from '../../../commonComponents/inputs';
export default function UpdatePassword({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <Header
          onPress={() => navigation.navigate('forgotPassword')}
          icon={keyIcon}
          inputTitle="Create New Password"
        />

        <View style={style.inputsView}>
          <Input placeholder="Password" />
          <View style={style.inputTop}>
            <Input placeholder="Conform Password" />
          </View>

          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('Tab')}
              color="#EE4A5E"
              title="Update"
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
