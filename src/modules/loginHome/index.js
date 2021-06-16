import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';

export default function LoginHome({navigation}) {
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <View style={style.subHeaderView}>
        <Text style={style.dateText}>Thursday, 20 Aug</Text>
        <Text style={[style.dateText, style.nameText]}>Hi, Smith Brown</Text>
        <Text style={style.text}>Hope you’re well today!</Text>
        <View style={style.hairline} />
        <View style={style.forgotView}>
          <Text style={style.forgotText}>Don’t Forget</Text>
          <Text style={style.clearText}>Clear</Text>
        </View>
        <View style={style.meetMainView}>
          <View style={style.meetFirstView}>
            <View style={style.meetSecoundView}>
              <Image
                style={style.meetIcon}
                source={require('../../assets/icons/loginHomeIcon.png')}
              />
              <Text style={style.meetText}>Meet Louis Peterson</Text>
            </View>
            <View>
              <Text style={style.meetTime}>9:00AM</Text>
            </View>
          </View>
        </View>
        <View style={style.hairline} />
        <View>
          <Text style={style.fListTitle}>Health Hub</Text>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={style.meetCardView}>
          <View style={style.meetCard}>
            <Image
              style={style.meetCardIcon}
              source={require('../../assets/icons/meetIcon.png')}
            />
            <View style={style.cardHairline} />
            <Text style={style.cardText}>Tracker</Text>
          </View>
          <View style={[style.meetCard, style.meetcard2]}>
            <Image
              style={style.meetCardIcon}
              source={require('../../assets/icons/meetIcon2.png')}
            />
            <View style={style.cardHairline} />
            <Text style={style.cardText}>Insurance</Text>
          </View>
        </View>
        <View style={[style.meetCardView, style.meetcardView2]}>
          <View style={style.meetCard}>
            <Image
              style={[style.meetCardIcon, style.qrIcon]}
              source={require('../../assets/icons/meetQR.png')}
            />
            <View style={style.cardHairline} />
            <Text style={style.cardText}>Share Profile</Text>
          </View>
          {/* <View style={[style.meetCard, style.meetcard2]}>
            <Image
              style={style.meetCardIcon}
              source={require('../../assets/icons/meetIcon2.png')}
            />
            <View style={style.cardHairline} />
            <Text style={style.cardText}>Insurance</Text>
          </View> */}
        </View>
      </ScrollView>
      <Text style={[style.fListTitle, {marginLeft: 20}]}>Check-up</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={style.checkUpView}>
          <View style={style.checkUpCard}>
            <Image
              style={style.checkCardIcon}
              source={require('../../assets/icons/virus.png')}
            />
            <View>
              <Text style={[style.cardText, style.checkCardText]}>
                Covid-19
              </Text>
              <Text style={[style.forgotText, style.checkCardText2]}>
                Questionnaire
              </Text>
            </View>
            <Image
              style={style.checkCardIcon2}
              source={require('../../assets/icons/nextArrow.png')}
            />
          </View>
          <View style={[style.checkUpCard, style.checkUpCard2]}>
            <Image
              style={style.checkCardIcon}
              source={require('../../assets/icons/virus.png')}
            />
            <View>
              <Text style={[style.cardText, style.checkCardText]}>
                Covid-19
              </Text>
              <Text style={[style.forgotText, style.checkCardText2]}>
                Sympton Checker
              </Text>
            </View>
            <Image
              style={[style.checkCardIcon2, style.left]}
              source={require('../../assets/icons/nextArrow.png')}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
