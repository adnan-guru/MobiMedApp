import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';

export default function MeetCard() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
      <View style={style.meetCardView}>
        <View style={style.meetCard}>
          <Image
            style={style.meetCardIcon}
            source={require('../../assets/icons/meetIcon.png')}
          />
          <View style={style.cardHairline} />
          <Text style={style.cardText}>Tracker</Text>
        </View>
      </View>
    </ScrollView>
  );
}
