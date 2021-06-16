import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from './style.js';

export default function Profile({item}) {
  const bgColor = {
    backgroundColor: item.color || 'transparent',
  };

  return (
    <View style={style.detailCard2}>
      <View style={[style.card2, bgColor]}>
        <View style={{flexDirection: 'row'}}>
          <Image style={style.Card2Icon} source={item.icon} />
          <Text style={style.card2Text}>
            {item.title ? item.title : 'Heart Rate'}
          </Text>
        </View>
        <Image style={style.Card2Icon2} source={item.graphIcon} />
        <Text style={[style.card2Text, style.text2]}>
          {item.subTitle ? item.subTitle : '75 bmp'}
        </Text>
      </View>
    </View>
  );
}
