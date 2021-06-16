import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
export default function Tracker({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <View style={style.covidHeader}>
        <View style={style.headerImagesView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={style.backArrow}
              source={require('../../../assets/icons/backArrow.png')}
            />
          </TouchableOpacity>
          <Image
            style={style.backArrow}
            source={require('../../../assets/icons/Shape.png')}
          />
        </View>
        <View style={style.textView}>
          <Text style={style.title}>Covid-19 Questionnaire</Text>
        </View>
      </View>
      <View style={style.mainView}>
        <View style={style.card}>
          <Text style={style.cardText}>Risk of Covid-19*</Text>
          <Text style={style.cardTitle}>Low Risk!</Text>
        </View>
        <Text style={style.para}>
          * This is based on current understanding of the desease which is
          subject to change. Please do consult the doctor and take their advice
          in case you are not feeling well.
        </Text>
        <View style={style.hrLine} />
        <Text style={style.pointsTitle}>Recommendation</Text>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>
            Practice personal hygiene as a preventive measure.
          </Text>
        </View>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>
            Avoid public activities outside home.
          </Text>
        </View>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>
            Avoid any travel unless necessary.
          </Text>
        </View>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>
            Keep social distancing, stay at least 6 feet.
          </Text>
        </View>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>Safely wear a facemask.</Text>
        </View>
        <View style={style.pointsView}>
          <Image
            style={style.doneImg}
            source={require('../../../assets/icons/done_24px.png')}
          />
          <Text style={style.pointstext}>Wash your hand for 20 seconds.</Text>
        </View>
        <View style={style.button}>
          <Button
            color="#0ABAB5"
            title="Done"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
