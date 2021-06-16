import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {style} from './style.js';
import DropDownCard from '../../../commonComponents/dropDownBasicInfo';
export default function BasicInfo({navigation}) {
  const data = [
    {
      title: 'Full Name',
      subTitle: 'Smith Brown',
      icon: require(`../../../assets/icons/basicInfoPersonIcon.png`),
    },
    {
      title: 'Email',
      subTitle: 'smith-brown@gmail.com',
      icon: require(`../../../assets/icons/basicInfoMailIcon.png`),
    },
    {
      title: 'Phone No.',
      subTitle: '1 202 555 0191',
      icon: require(`../../../assets/icons/basicInfoPhoneIcon.png`),
    },
    {
      title: 'Address',
      subTitle: '110 Commerce St, Hinesburg, VT, 05461',
      icon: require(`../../../assets/icons/basicInfoLocationIcon.png`),
    },
    {
      title: 'Date of Birth',
      subTitle: '15/07/1994',
      icon: require(`../../../assets/icons/basicInfoBirth.png`),
    },
  ];
  return (
    <ScrollView>
      <View style={style.hrLine} />
      {data.map(item => {
        return <DropDownCard item={item} />;
      })}
      <TouchableOpacity onPress={() => navigation.navigate('MedicalInfo')}>
        <Text style={{textAlign: 'center'}}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
