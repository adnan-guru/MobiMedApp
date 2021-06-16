import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';
import CovidHeader from '../../../commonComponents/covidHeader';
import {Checkbox} from 'react-native-paper';

export default function Tracker({navigation}) {
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <CovidHeader onPress={() => navigation.goBack()} />
      <View style={style.paraView}>
        <Text
          style={style.para}
          onPress={() => navigation.navigate('CovidTwo')}>
          Have you or someone in your family staying with you came in close
          contact with a laboratory confirmed COVID-19 patient in the last 14
          days without
        </Text>
        <View style={style.hrLine} />
        {/* <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        /> */}
      </View>
    </ScrollView>
  );
}
