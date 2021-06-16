import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {style} from './style.js';
import DropDownCard from '../../../commonComponents/dropDownBasicInfo';
export default function BasicInfo({navigation}) {
  const data = [
    {
      title: 'Date',
      subTitle: '15/07/1994',
      icon: require(`../../../assets/icons/medicalInfo/birth.png`),
    },
    {
      title: 'Disease or Health Problem',
      subTitle: 'Knee Injury',
      icon: require(`../../../assets/icons/medicalInfo/disease.png`),
    },
    {
      title: 'Treatment Doctor',
      subTitle: 'Dr. Rita Leite',
      icon: require(`../../../assets/icons/medicalInfo/doctor.png`),
    },
  ];
  return (
    <ScrollView style={style.bgColor}>
      <View style={style.hrLine} />
      {data.map(item => {
        return <DropDownCard item={item} />;
      })}
      <View style={{marginHorizontal: 20}}>
        <Text style={style.title}>Additional Information</Text>
        <View style={style.paragraphView}>
          <Text style={[style.title, style.paragraph]}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s when an unknown printer took a galley of type and
            scrambled.
          </Text>
        </View>
        <View style={style.addHistoryCard}>
          <Image
            style={style.icon}
            source={require('../../../assets/icons/add_circle_24px.png')}
          />
          <Text style={style.addHistoryCardText}>Add More History</Text>
        </View>
        <View style={style.hrLine} />
        <TouchableOpacity onPress={() => navigation.navigate('AboutInsurance')}>
          <Text style={{textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
