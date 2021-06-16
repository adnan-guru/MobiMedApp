import React from 'react';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import {style} from './style.js';
import Header from '../../../commonComponents/covidHeader';
import image from '../../../assets/icons/insurance/security_24px.png';
import DropDownCard from '../../../commonComponents/dropDownMedicalInfo';
import MedicalInfoCard from '../../../commonComponents/dropDownBasicInfo';
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
    // {
    //   title: 'Member ID',
    //   subTitle: '82764635',
    //   icon: require(`../../../assets/icons/insurance/image.png`),
    // },
  ];
  const data = [
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
        title="New Insurance"
        img={image}
      />
      {medicalInfo.map(item => {
        return <DropDownCard item={item} />;
      })}
      {dropdownInfo.map(item => {
        return <MedicalInfoCard item={item} />;
      })}
      <View style={{marginHorizontal: 20}}>
        <View style={style.card}>
          <Text style={style.cardText}>Cigna</Text>
          <View style={[style.hrLine, style.cardHrLine]} />
          <Text style={style.cardText}>Blue Cross</Text>
          <View style={[style.hrLine, style.cardHrLine]} />
          <Text style={style.cardText}>Blue Shield</Text>
        </View>
      </View>
      {data.map(item => {
        return <MedicalInfoCard item={item} />;
      })}
      <View style={style.hrLine} />
    </ScrollView>
  );
}
