import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {style} from './style.js';
import DropDownCard from '../../../commonComponents/dropDownBasicInfo';
import DropDownMedicalInfo from '../../../commonComponents/dropDownMedicalInfo';
export default function BasicInfo({navigation}) {
  const dropdownInfo = [
    {
      title: 'Growth (Height)',
      subTitle: '183 cm',
      icon: require(`../../../assets/icons/medicalInfoNature.png`),
    },
    {
      title: 'Weight',
      subTitle: '84 kg',
      icon: require(`../../../assets/icons/medicalInfoGrowthIcon.png`),
    },
  ];
  const info = [
    {
      title: 'Training Time (Per Week)',
      subTitle: '45 hrs',
      icon: require(`../../../assets/icons/medicalInfo/directions_run_24px2.png`),
    },
  ];
  const medicalInfo = [
    {
      title: 'Blood Type',
      subTitle: 'AB+',
      icon: require(`../../../assets/icons/medicalInfo/place_24px2.png`),
    },
    {
      title: 'Blood Pressure',
      subTitle: '90 - 120',
      icon: require(`../../../assets/icons/medicalInfo/timer_24px2.png`),
    },
    {
      title: 'Heart Rate',
      subTitle: '75 bmp',
      icon: require(`../../../assets/icons/medicalInfo/favorite_24px.png`),
    },
    {
      title: 'Sleeping Time (Per Day)',
      subTitle: '8 hrs',
      icon: require(`../../../assets/icons/medicalInfo/brightness_3_242.png`),
    },
    {
      title: 'Water (Per Day)',
      subTitle: '8 cups',
      icon: require(`../../../assets/icons/medicalInfo/brightness_3_242.png`),
    },
  ];
  return (
    <ScrollView>
      <View style={style.hrLine} />
      {dropdownInfo.map(item => {
        return <DropDownCard item={item} />;
      })}
      {medicalInfo.map(item => {
        return <DropDownMedicalInfo item={item} />;
      })}
      {info.map(item => {
        return <DropDownCard item={item} />;
      })}
      <TouchableOpacity onPress={() => navigation.navigate('TreatmentHistory')}>
        <Text style={{textAlign: 'center'}}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
