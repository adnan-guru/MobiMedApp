import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, Text} from 'react-native';
import {style} from './style.js';

export default function V1({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={style.arrow}
            source={require('../../assets/icons/backArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
          <Text style={style.title}>Share Your Medical Data</Text>
        </TouchableOpacity>
        <Image
          style={style.Img}
          source={require('../../assets/images/image12(1).png')}
        />
        <Text style={[style.title, style.imageText]}>Smith Brown</Text>
        <View style={style.qrImageRow}>
          <Image
            style={style.qrImage}
            source={require('../../assets/images/layer1.png')}
          />
        </View>
        <Text style={style.imageSubText}>Scan QR Code</Text>
      </View>
    </ScrollView>
  );
}
