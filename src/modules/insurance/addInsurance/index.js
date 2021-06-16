import React from 'react';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import {style} from './style.js';
import Header from '../../../commonComponents/covidHeader';
import image from '../../../assets/icons/insurance/security_24px.png';
import DropDownCard from '../../../commonComponents/dropDownMedicalInfo';
import MedicalInfoCard from '../../../commonComponents/dropDownBasicInfo';
import Button from '../../../commonComponents/button copy';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function AddInsurance({navigation}) {
  const medicalInfo = [
    {
      title: 'Insurance Type',
      subTitle: 'Health Insurance',
    },
  ];
  const dropdownInfo = [
    {
      title: 'Insurance Company',
      subTitle: 'Cigna',
    },
    {
      title: 'Policy number',
      subTitle: 'UK1B2764635',
    },
    {
      title: 'Member ID',
      subTitle: '82764635',
      icon: require(`../../../assets/icons/insurance/image.png`),
    },
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="light-content" />
      <View style={style.statusBar} />
      <Header
        onPress={() => navigation.goBack()}
        title="Add New Insurance"
        img={image}
      />
      {medicalInfo.map(item => {
        return <DropDownCard item={item} />;
      })}
      {dropdownInfo.map(item => {
        return <MedicalInfoCard item={item} />;
      })}
      <View style={style.hrLine} />
      <View style={style.buttonView}>
        <TouchableOpacity onPress={() => navigation.navigate('Insurance')}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
