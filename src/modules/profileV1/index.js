import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {style} from './style.js';
import ProfileCard from '../../commonComponents/profileCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Profile({navigation}) {
  const data = [
    {
      title: 'Heart Rate',
      subTitle: '75bmp',
      icon: require(`../../assets/icons/favorite_24px.png`),
      graphIcon: require(`../../assets/icons/Vector3.png`),
      color: 'rgba(238, 74, 94, 1)',
    },
    {
      title: 'Sleeping Time',
      subTitle: '8 hrs/day',
      icon: require(`../../assets/icons/brightness_3_24px.png`),
      graphIcon: require(`../../assets/icons/Group57.png`),
      color: 'rgba(3, 24, 96, 1)',
    },
    {
      title: 'Water',
      subTitle: '7 cups/day',
      icon: require(`../../assets/icons/directions_run_24px.png`),
      graphIcon: require(`../../assets/icons/Group58.png`),
      color: 'rgba(0, 133, 255, 1)',
    },
    {
      title: 'Training Time',
      subTitle: '45 hrs/week',
      icon: require(`../../assets/icons/brightness_3_24px.png`),
      graphIcon: require(`../../assets/icons/Group59.png`),
      color: 'rgba(239, 115, 25, 1)',
    },
  ];
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <View style={style.mainView}>
        <View style={style.headerIcon}>
          <Image source={require('../../assets/icons/Group9.png')} />
          <Image source={require('../../assets/icons/Group86.png')} />
        </View>
        <View style={style.row}>
          <Image source={require('../../assets/images/image12.png')} />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReadyForScan')}>
              <Text style={style.title}>Smith Brown</Text>
            </TouchableOpacity>
            <View style={style.row}>
              <Image
                style={style.icon}
                source={require('../../assets/icons/location.png')}
              />
              <Text style={style.heading}>
                110 Commerce St, Hinesburg, VT, 05461
              </Text>
            </View>
          </View>
        </View>
        <View style={style.hrLine} />
        <View style={style.card}>
          <View style={style.cardRow}>
            <Image
              style={style.MailIcon}
              source={require('../../assets/icons/mail.png')}
            />
            <Text style={style.cardText}>smith.brown@gmail.com</Text>
          </View>
          <View style={style.cardRow}>
            <Image
              style={[style.MailIcon, style.nextIcon]}
              source={require('../../assets/icons/mobile.png')}
            />
            <Text style={[style.cardText, style.nextText]}>1 202 555 0191</Text>
            <Image
              style={style.ErrorIcon}
              source={require('../../assets/icons/error.png')}
            />
          </View>
          <View style={style.cardRow}>
            <Image
              style={[style.MailIcon, style.nextIcon]}
              source={require('../../assets/icons/birth.png')}
            />
            <Text style={[style.cardText, style.nextText]}>
              15 Aug 1994 - 27 Y/O
            </Text>
          </View>
        </View>
        <View style={style.detailCard}>
          <View style={{marginHorizontal: 20}}>
            <View style={style.detailView}>
              <View style={style.row}>
                <Image
                  style={style.detailCardIcon}
                  source={require('../../assets/icons/nature_people_24px.png')}
                />
                <View>
                  <Text style={style.detailCardText}>183 cm</Text>
                  <Text style={style.detailCardText2}>Growth</Text>
                </View>
              </View>
              <Image
                style={style.detailCardLine}
                source={require('../../assets/icons/Rectangle87.png')}
              />
              <Image
                style={style.detailCardLine2}
                source={require('../../assets/icons/Rectangle88.png')}
              />
              <View style={{flexDirection: 'row', marginRight: 20}}>
                <Image
                  style={style.detailCardIcon}
                  source={require('../../assets/icons/fitness_center_24px.png')}
                />
                <View>
                  <Text style={style.detailCardText}>84 Kg</Text>
                  <Text style={style.detailCardText2}>Weight</Text>
                </View>
              </View>
            </View>
            <View style={style.detailView}>
              <View style={style.detailRowMargin}>
                <Image
                  style={style.detailCardIcon}
                  source={require('../../assets/icons/timer_24px.png')}
                />
                <View>
                  <Text style={style.detailCardText}>90 - 120</Text>
                  <Text style={style.detailCardText2}>Blood Pressure</Text>
                </View>
              </View>

              <View style={style.detailRowMargin}>
                <Image
                  style={style.detailCardIcon}
                  source={require('../../assets/icons/place_24px.png')}
                />
                <View>
                  <Text style={style.detailCardText}>AB+</Text>
                  <Text style={style.detailCardText2}>Blood Type</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.profileCard}>
        {data.map(item => {
          return <ProfileCard item={item} />;
        })}
      </View>
      <View style={style.hrLine} />
    </ScrollView>
  );
}
