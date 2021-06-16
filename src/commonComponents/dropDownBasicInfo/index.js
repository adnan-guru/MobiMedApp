import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';

export default function DropDownCard({item}) {
  return (
    <ScrollView>
      <View style={style.basiCInfoView}>
        <Text style={style.title}>{item.title ? item.title : 'Full Name'}</Text>
        <View style={style.detailView}>
          <Image
            style={style.icon}
            source={
              item.icon
              // ? item.icon
              // : require('../../assets/icons/basicInfoPersonIcon.png')
            }
          />
          <Text style={[style.title, style.detailText]}>
            {item.subTitle ? item.subTitle : 'Smith Brown'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
