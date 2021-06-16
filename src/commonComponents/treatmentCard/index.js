import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {style} from './style.js';
export default function TreatmentCard({item}) {
  const leftBorderColor = {
    borderLeftColor: item.color || 'black',
  };
  return (
    <ScrollView style={style.container}>
      <View style={[style.treatmentCard, leftBorderColor]}>
        <View style={style.dateView}>
          <Text style={style.treatmentCardText}>Date:</Text>
          <Text style={[style.treatmentCardText, style.treatmentCardSubText]}>
            15/07/2020
          </Text>
        </View>
        <View style={style.dateView}>
          <Text style={style.treatmentCardText}>Disease:</Text>
          <Text style={[style.treatmentCardText, style.treatmentCardSubText]}>
            Knee Injury
          </Text>
        </View>
        <View style={style.dateView}>
          <Text style={style.treatmentCardText}>Treatment Doctor:</Text>
          <Text style={[style.treatmentCardText, style.treatmentCardSubText]}>
            Dr. Rita Leite
          </Text>
        </View>
        <View style={[style.dateView, style.medicineRow]}>
          <Text style={style.treatmentCardText}>Medicines:</Text>
          <Text style={[style.treatmentCardText, style.treatmentCardSubText]}>
            standard dummye
          </Text>
        </View>
        <View>
          <Text style={style.treatmentCardText}>Additional Information:</Text>
          <Text style={[style.treatmentCardText, style.treatmentCardParaText]}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s when an unknown printer took a galley of type.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
