import React, {useState} from 'react';
// import ModalDropdown from 'react-native-modal-dropdown';

import {
  View,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
import {style} from './style.js';
import image from '../../../assets/images/image12.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
const data = [
  {
    key: 0,
    title: 'Basic Info',
  },
  {
    key: 1,
    title: 'Medical Info',
  },
  {
    key: 2,
    title: 'Treatment History Details',
  },
];
function DropDown(params) {
  return <Text style={{color: 'red', marginTop: 300}}>hgfdshjgfdsa</Text>;
}
export default function EditProfile({navigation}) {
  const [isDetailView, setisDetailView] = useState(false);
  const [active, setActive] = useState(null);

  const ctaHandler = index => {
    if (!isDetailView) {
      setActive(index);
      setisDetailView(true);
    }

    setActive(null);
    setisDetailView(false);
  };

  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="light-content" translucent={true} />
      <View style={style.header} />

      <View style={style.imageView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={style.backArrow}
            source={require('../../../assets/icons/blackBackArrow.png')}
          />
        </TouchableOpacity>
        <ImageBackground style={style.profileImage} source={image}>
          <TouchableOpacity onPress={() => navigation.navigate('BasicInfo')}>
            <Image
              style={style.cameraImg}
              source={require('../../../assets/icons/cameraIcon.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={style.imageText}>Edit Profile Picture</Text>
        <View style={style.hrLine} />
      </View>

      {data.map((item, index) => {
        return (
          <View>
            <View style={style.dropDownView}>
              <Text>{item.title}</Text>
              {isDetailView ? (
                <TouchableOpacity onPress={() => ctaHandler(index)}>
                  <Image
                    style={style.dropDownArrow}
                    source={require('../../../assets/icons/dropDownIcon.png')}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => ctaHandler(index)}>
                  <Image
                    style={style.dropDownArrow}
                    source={require('../../../assets/icons/dropDownIcon.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            {isDetailView && active === index && <DropDown />}
          </View>
        );
      })}
    </ScrollView>
  );
}
