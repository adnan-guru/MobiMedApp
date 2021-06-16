import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {style} from './style.js';
import HeaderImg from '../../assets/images/headerSvg.png';
export default function Header(props) {
  return (
    <View>
      <ImageBackground source={HeaderImg} style={style.headerImg}>
        <View>
          <TouchableOpacity onPress={props.onPress && props.onPress}>
            <Image
              style={style.backarrow}
              source={require('../../assets/icons/backArrow.png')}
            />
          </TouchableOpacity>
          <Image
            style={style.headerCircle}
            source={require('../../assets/images/headerCircle.png')}
          />
          <Image
            style={style.personIcon}
            source={
              props.icon
                ? props.icon
                : require('../../assets/icons/personIcon.png')
            }
          />
        </View>
      </ImageBackground>
      <View style={style.logoView}>
        <Image
          style={style.loginLogo}
          source={require('../../assets/images/loginLogo.png')}
        />
      </View>
      <Text style={style.logoText}>Your medical history your way!</Text>
      <Text style={style.inputTitle}>
        {props.inputTitle && props.inputTitle}
      </Text>
    </View>
  );
}
