import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';
import CovidHeader from '../../../commonComponents/covidHeader';
import Covid19StepsCard from '../../../commonComponents/covid19StepsCard';
import covid19Img2 from '../../../assets/images/stepsImg2.png';
import covid19Img3 from '../../../assets/images/stepsImg3.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Covid19({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <CovidHeader onPress={() => navigation.goBack()} />
      <View style={style.covidImg1}>
        <Image source={require('../../../assets/images/covidImg1.png')} />
      </View>
      <View style={style.checkUpCard}>
        <Image
          style={style.checkCardIcon}
          source={require('../../../assets/icons/virus.png')}
        />
        <View>
          <Text style={style.checkCardText}>Start Questionnaire</Text>
          <Text style={[style.checkCardText, style.checkCardText2]}>
            Lorem Ipsum has been the industry's standard .
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CovidOne')}>
            <Image
              style={style.checkCardIcon2}
              source={require('../../../assets/icons/nextArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={style.stepsTitle}>Prevention</Text>
      <Covid19StepsCard />
      <Covid19StepsCard img={covid19Img2} title="Clean your hands" />
      <View style={{marginBottom: 114}}>
        <Covid19StepsCard img={covid19Img3} title="Wear a facemask" />
      </View>
    </ScrollView>
  );
}
