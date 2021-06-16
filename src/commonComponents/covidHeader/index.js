import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {style} from './style.js';
export default function covidHeader(props) {
  return (
    <ScrollView style={style.container}>
      <View style={style.covidHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={props.onPress && props.onPress}>
            <Image
              style={style.backArrow}
              source={require('../../assets/icons/backArrow.png')}
            />
          </TouchableOpacity>
          <Image
            style={style.backArrow}
            source={
              props.img ? props.img : require('../../assets/icons/Shape.png')
            }
          />
        </View>
        <View style={style.textView}>
          <Text style={style.title}>
            {props.title ? props.title : 'Covid-19 Questionnaire'}
          </Text>
          <Text style={style.para}>
            {props.para
              ? props.para
              : 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
