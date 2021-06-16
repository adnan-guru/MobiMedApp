import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {style} from './style.js';

export default function Tracker({item}) {
  const bgColor = {
    backgroundColor: item.color || 'white',
  };
  return (
    <ScrollView style={style.container}>
      <View style={[style.diseaseCard, bgColor]}>
        <View style={style.contantView}>
          <View style={style.contantRow}>
            <Text style={style.contantTitle}>
              {item.title ? item.title : 'Osteoporosis'}
            </Text>
            <Text style={style.contantSubTitle}>
              {item.subTitle ? item.subTitle : '12/07/2020'}
            </Text>
          </View>
          <Text style={[style.contantSubTitle, style.text]}>
            {item.paragraphTitle ? item.paragraphTitle : 'Ongoning Treatment'}
          </Text>
          <View style={style.cardHrLine} />
          <Text style={[style.contantSubTitle, style.para]}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s when an unknown printer took a galley of type.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
