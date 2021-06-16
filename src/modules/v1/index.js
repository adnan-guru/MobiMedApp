import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {style} from './style.js';

export default function V1({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image
            style={style.arrow}
            source={require('../../assets/icons/arrowIcon.png')}
          />
        </TouchableOpacity>
        <Image
          style={style.logoImg}
          source={require('../../assets/images/logoImg.png')}
        />
        <View>
          <Image
            style={style.homeLogo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
