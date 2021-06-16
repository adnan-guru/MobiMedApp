import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from './style.js';

export default function AboutInsurance({item}) {
  const bgColor = {
    backgroundColor: item.color || 'white',
  };
  const textColor = {
    color: item.textColor || 'rgba(58, 58, 58, 1)',
  };
  return (
    <View style={[style.card, bgColor]}>
      <View style={style.cardContantView}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={style.cardImage}
            source={
              item.image
                ? item.image
                : require('../../assets/icons/insurance/font_download_24px.png')
            }
          />
          <View>
            <Text style={[style.cardText, textColor]}>
              {item.title ? item.title : 'UK PL8TE'}
            </Text>
            <Text style={[style.cardText, style.cardSubText, textColor]}>
              Insurance
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={style.cardDotImage}
            source={
              item.dotImage
                ? item.dotImage
                : require('../../assets/icons/insurance/more_vert_24px.png')
            }
          />
        </View>
      </View>
      <View style={style.row}>
        <Text style={[style.cardText, style.cardSecoundText, textColor]}>
          Policy No. - UK1B2764635
        </Text>
        <Text style={[style.cardText, style.cardSecoundText, textColor]}>
          Member ID - #82764635
        </Text>
      </View>
      <View style={style.hrLine} />
      <View style={style.secoundRow}>
        <View>
          <Text style={[style.cardText, style.secoundTitle, textColor]}>
            20 Year
          </Text>
          <Text style={[style.cardSecoundSubText, textColor]}>Time Period</Text>
        </View>
        <View>
          <Text style={[style.cardText, style.secoundTitle, textColor]}>
            $500,000
          </Text>
          <Text style={[style.cardSecoundSubText, textColor]}>Coverage</Text>
        </View>
        <View>
          <Text style={[style.cardText, style.secoundTitle, textColor]}>
            30-08-2020
          </Text>
          <Text style={[style.cardSecoundSubText, textColor]}>Expiry</Text>
        </View>
      </View>
    </View>
  );
}
