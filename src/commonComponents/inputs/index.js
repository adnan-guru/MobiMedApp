import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {style} from './style.js';

export default function Inputs(props) {
  return (
    <View>
      <View style={style.input}>
        <Image
          style={style.mailIcon}
          source={
            props.icon ? props.icon : require('../../assets/icons/mdi_lock.png')
          }
        />
        <Image
          style={style.inputLine}
          source={require('../../assets/images/inputLine.png')}
        />
        <TextInput
          style={style.inputPlaceholder}
          placeholderTextColor="rgba(153, 153, 153, 1)"
          placeholder={props.placeholder && props.placeholder}
        />
      </View>
    </View>
  );
}
