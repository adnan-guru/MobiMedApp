import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {style} from './style.js';
import Header from '../../../commonComponents/covidHeader';
import image from '../../../assets/icons/insurance/security_24px.png';
import InsuranceCard from '../../../commonComponents/insuranceCard';
export default function AboutInsurance({navigation}) {
  const data = [
    {
      title: 'UK PL8TE',
      image: require(`../../../assets/icons/insurance/font_download_24px.png`),
      color: '#FFFFFF',
    },
    {
      title: 'UK PL8TE',
      image: require(`../../../assets/icons/insurance/font_download_24px.png`),
      color: '#FFFFFF',
    },
    {
      title: 'BlueCross',
      image: require(`../../../assets/icons/insurance/PNGPIX-COM-Cigna-Logo-PNG-Transparent-11.png`),
      color: '#FFFFFF',
    },
  ];

  const insuranceData = [
    {
      title: 'UK PL8TE',
      image: require(`../../../assets/icons/insurance/fontdownload.png`),
      dotImage: require(`../../../assets/icons/insurance/more_vert_2.png`),
      color: 'rgba(238, 74, 94, 1)',
      textColor: '#FFFFFF',
    },
    {
      title: 'UK PL8TE',
      image: require(`../../../assets/icons/insurance/fontdownload.png`),
      dotImage: require(`../../../assets/icons/insurance/more_vert_2.png`),
      color: 'rgba(238, 74, 94, 1)',
      textColor: '#FFFFFF',
    },
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="light-content" />
      <View style={style.statusBar} />
      <Header
        onPress={() => navigation.goBack()}
        title="About Insurances"
        img={image}
      />
      <View style={style.contantView}>
        <View style={style.titleView}>
          <Text style={style.title}>Active Insurance</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ActiveInsurance')}>
            <View style={style.button}>
              <Text style={style.buttonTitle}>Add New</Text>
            </View>
          </TouchableOpacity>
        </View>
        {data.map(item => {
          return <InsuranceCard item={item} />;
        })}

        <View style={style.hrLine} />
        <View style={style.titleView}>
          <Text style={style.title}>Active Insurance</Text>
        </View>
        {insuranceData.map(item => {
          return <InsuranceCard item={item} />;
        })}
      </View>
    </ScrollView>
  );
}
