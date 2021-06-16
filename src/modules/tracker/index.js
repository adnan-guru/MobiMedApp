import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';
import ProgressCircle from 'react-native-progress-circle';
export default function Tracker({navigation}) {
  // const percentage = 66;
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <Image
        style={style.backIcon}
        source={require('../../assets/icons/trackerBackIcon.png')}
      />
      <Text onPress={() => navigation.navigate('covid')} style={style.title}>
        Statistics Tracking
      </Text>
      <View style={style.points}>
        <View style={style.activeTaxtView}>
          <Text style={style.activeTaxt}>Today</Text>
        </View>
        <Text style={[style.activeTaxt, style.pointsText]}>Week</Text>
        <Text style={[style.activeTaxt, style.pointsText]}>Month</Text>
        <Text style={[style.activeTaxt, style.pointsText]}>Year</Text>
      </View>
      <View style={style.progressBar}>
        <ProgressCircle
          percent={30}
          radius={50}
          borderWidth={8}
          color="#3399FF"
          fontSize="100%"
          shadowColor="#999"
          bgColor="#fff">
          <Text style={{fontSize: 18}}>{'10,354'}</Text>
          <Text style={{fontSize: 18}}>Steps</Text>
        </ProgressCircle>
      </View>
    </ScrollView>
  );
}
