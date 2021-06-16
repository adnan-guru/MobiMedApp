import React from 'react';
import {View, Image, ScrollView, Text, ImageBackground} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/button';
import bottomImg from '../../../assets/images/bottomSvg.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Home({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={style.logo}
            source={require('../../../assets/images/homeLogo.png')}
          />
        </TouchableOpacity>
        <Text style={style.text}>Your medical history your way!</Text>
        <Image
          style={style.mobileImg}
          source={require('../../../assets/images/homeMobile.png')}
        />

        <View style={style.buttonView}>
          <Button color="#EE4A5E" title="Login" />
          <View style={style.registerButton}>
            <Button
              onPress={() => navigation.navigate('login')}
              title="Register"
              textColor="rgba(238, 74, 94, 1)"
            />
          </View>
        </View>

        <ImageBackground source={bottomImg} style={style.image}>
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={style.circleImgLeft}
              source={require('../../../assets/images/bottomCircle.png')}
            />

            <Image
              style={style.circleImg}
              source={require('../../../assets/images/bottomCircle.png')}
            />
          </View> */}
          <Text style={style.bottomText}>
            By Registering, I agree to MobiMed
          </Text>
          <Text style={[style.bottomText, style.subText]}>
            Terms & Conditions
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
