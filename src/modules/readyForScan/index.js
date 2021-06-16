import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {style} from './style.js';
import CovidHeader from '../../commonComponents/covidHeader';
import headerImg from '../../assets/icons/reply_24px.png';
// import Signature from 'react-native-signature-canvas';
import TreatmentCard from '../../commonComponents/treatmentCard';
import DiseaseCard from '../../commonComponents/diseaseCard';
export default function Tracker({navigation}) {
  const data = [
    {
      // dateText: 'Date:',
      // dateSubText: '15/07/2020',
      // diseaseText: 'Disease:',
      // diseaseSubText: 'Knee Injury',
      // treatmentText: 'Treatment Doctor:',
      // treatmentSubText: 'Dr. Rita Leite',
      // medicines: 'Medicines:',
      // medicinesSubText: 'standard dummye',
      // additionalText: 'Additional Information:',
      // additionalSubText:
      //   'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type.',
      color: 'rgba(10, 186, 181, 1)',
    },
    {
      // dateText: 'Date:',
      // dateSubText: '15/07/2020',
      // diseaseText: 'Disease:',
      // diseaseSubText: 'Knee Injury',
      // treatmentText: 'Treatment Doctor:',
      // treatmentSubText: 'Dr. Rita Leite',
      // medicines: 'Medicines:',
      // medicinesSubText: 'standard dummye',
      // additionalText: 'Additional Information:',
      // additionalSubText:
      //   'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type.',
      color: 'rgba(238, 74, 94, 1)',
    },
    {
      // dateText: 'Date:',
      // dateSubText: '15/07/2020',
      // diseaseText: 'Disease:',
      // diseaseSubText: 'Knee Injury',
      // treatmentText: 'Treatment Doctor:',
      // treatmentSubText: 'Dr. Rita Leite',
      // medicines: 'Medicines:',
      // medicinesSubText: 'standard dummye',
      // additionalText: 'Additional Information:',
      // additionalSubText:
      //   'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type.',
      color: 'rgba(10, 186, 181, 1)',
    },
  ];
  const cardData = [
    {
      title: 'Osteoporosis',
      subTitle: '12/07/2020',
      paragraphTitle: 'Ongoning Treatment',
      color: 'rgba(238, 74, 94, 1)',
    },
    {
      title: 'Heart Defect',
      subTitle: '12/07/2020',
      paragraphTitle: 'Incurable',
      color: 'rgba(10, 186, 181, 1)',
    },
  ];
  return (
    <ScrollView style={style.container}>
      <View style={style.header} />
      <CovidHeader
        title="Share information"
        onPress={() => navigation.navigate('Profile')}
        img={headerImg}
      />
      <View style={style.mainView}>
        <View style={style.titleRow}>
          <Text style={style.title}>Smith Brown</Text>
          <Image source={require('../../assets/icons/Group9.png')} />
        </View>
        <View style={style.buttonRow}>
          <View style={style.qrButton}>
            <Image
              style={style.qrButtonImg}
              source={require('../../assets/icons/qr.png')}
            />
            <TouchableOpacity onPress={() => navigation.navigate('QrScan')}>
              <Text style={style.qrButtonText}>Show QR Code</Text>
            </TouchableOpacity>
          </View>
          <View style={style.printButton}>
            <Image
              style={[style.qrButtonImg, style.printButtonImg]}
              source={require('../../assets/icons/printer.png')}
            />
            <Text style={[style.qrButtonText, style.printButtonText]}>
              Print
            </Text>
          </View>
        </View>
        <View style={style.serviceCard}>
          <View style={style.serviceCardContant}>
            <View>
              <View style={style.serviceTitleRow}>
                <Text style={style.serviceTitle}>Date of Service:</Text>
                <Image
                  style={[style.qrButtonImg, style.printButtonImg]}
                  source={require('../../assets/icons/edit.png')}
                />
              </View>
              <View style={style.serviceView}>
                {/* <Text style={style.serviceText}>15/07/2020</Text> */}
                <TextInput
                  style={style.serviceText}
                  placeholder="15/07/2020"
                  placeholderTextColor="rgba(58, 58, 58, 1)"
                />
              </View>
            </View>
          </View>
          <View style={style.serviceCardContant}>
            <View>
              <Text style={[style.serviceTitle, style.margin]}>
                Physician/Facility Details:
              </Text>
              <View style={style.serviceView}>
                {/* <Text style={style.serviceText}>Dr. Rita Leite</Text> */}
                <TextInput
                  style={style.serviceText}
                  placeholder="Dr. Rita Leite"
                  placeholderTextColor="rgba(58, 58, 58, 1)"
                />
              </View>
            </View>
            <View>
              <Text style={[style.serviceTitle, style.margin]}>Signature</Text>
              <View style={[style.serviceView, style.signatureView]}>
                {/* <Signature /> */}
              </View>
            </View>
          </View>
        </View>
        <View style={style.hrLine} />
        <Text style={style.contactCardTitle}>General Info</Text>
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
          <View style={style.cardRow}>
            <Image
              style={[style.MailIcon, style.nextIcon]}
              source={require('../../assets/icons/serviceLocation.png')}
            />
            <Text style={[style.cardText, style.nextText]}>
              110 Commerce St, Hinesburg, VT, 05461
            </Text>
          </View>
        </View>
        <View style={style.hrLine} />

        <Text style={[style.contactCardTitle, style.medicalInfoTitle]}>
          Medical Info
        </Text>
        <View style={style.medicalInfoCard}>
          <View style={style.medicalInfoContactView}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(7).png')}
              />
              <Text style={style.medicalInfoText}>Growth:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>183 cm</Text>
          </View>
          <View style={[style.medicalInfoContactView, style.weightView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(8).png')}
              />
              <Text style={style.medicalInfoText}>Weight:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>83 Kg</Text>
          </View>

          <View style={[style.medicalInfoContactView, style.bloodView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(9).png')}
              />
              <Text style={style.medicalInfoText}>Blood Pressure:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>90 - 120</Text>
          </View>
          <View style={[style.medicalInfoContactView, style.bloodTypeView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(10).png')}
              />
              <Text style={style.medicalInfoText}>Blood Type:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>AB+</Text>
          </View>
          <View style={[style.medicalInfoContactView, style.heartView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(11).png')}
              />
              <Text style={style.medicalInfoText}>Heart Rate:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>75 bmp</Text>
          </View>
          <View style={[style.medicalInfoContactView, style.sleepingView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(12).png')}
              />
              <Text style={style.medicalInfoText}>Sleeping Time:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>8hrs/day</Text>
          </View>
          <View style={[style.medicalInfoContactView, style.waterView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(13).png')}
              />
              <Text style={style.medicalInfoText}>Water:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>
              7 cups/day
            </Text>
          </View>
          <View style={[style.medicalInfoContactView, style.trainingView]}>
            <View style={style.medicalInfoRow}>
              <Image
                style={style.medicalInfoIcon}
                source={require('../../assets/icons/Group12(14).png')}
              />
              <Text style={style.medicalInfoText}>Training Time:</Text>
            </View>
            <Text style={[style.medicalInfoText, style.subText]}>
              45 hrs/week
            </Text>
          </View>
        </View>
        <View style={style.hrLine} />
        <Text style={[style.contactCardTitle, style.medicalInfoTitle]}>
          Treatment History
        </Text>
        {data.map(item => {
          return <TreatmentCard item={item} />;
        })}
        <View style={style.hrLine} />
        <Text style={[style.contactCardTitle, style.medicalInfoTitle]}>
          Diseases
        </Text>
        {cardData.map(item => {
          return <DiseaseCard item={item} />;
        })}
      </View>
    </ScrollView>
  );
}
