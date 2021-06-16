import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';
export default function Tracker(props) {
  return (
    <ScrollView style={style.container}>
      <View style={style.stepsView}>
        <View style={style.stepsCard}>
          <Image
            style={style.stepsImg1}
            source={
              props.img
                ? props.img
                : require('../../assets/images/stepsImg1.png')
            }
          />
          <View>
            <Text style={style.stepsCardTitle}>
              {props.title ? props.title : 'Avoid close contact'}
            </Text>
            <Text style={style.stepsCardPara}>
              Lorem Ipsum has been the industry's standard .
            </Text>
            <Text style={style.learnMoreText}>Learn More</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
