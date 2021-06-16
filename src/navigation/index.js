import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import First from '../modules/v1';
import Home from '../modules/auth/home';
import Login from '../modules/auth/login';
import Register from '../modules/auth/register';
import ForgotPassword from '../modules/auth/forgotPassword';
import UpdatePassword from '../modules/auth/updatePassword';
import LoginHome from '../modules/loginHome';
import Tracker from '../modules/tracker';
import Covid19 from '../modules/covid/covid19';
import CovidOne from '../modules/covid/covidOne';
import CovidTwo from '../modules/covid/covidTwo';
import ProfileV1 from '../modules/profileV1';
import ReadyForScan from '../modules/readyForScan';
import QrScan from '../modules/qrScan';
import ProfileEdit from '../modules/profile/profileEdit';
import BasicInfo from '../modules/profile/basicInfo';
import MedicalInfo from '../modules/profile/medicalInfo';
import TreatmentHistory from '../modules/profile/treatmentHistory';
import AboutInsurance from '../modules/insurance/aboutInsurance';
import ActiveInsurance from '../modules/insurance/activeInsurance';
import AddInsurance from '../modules/insurance/addInsurance';
import NewInsurance from '../modules/insurance/newInsurance';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

//stack screens
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="v1" component={First} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="updatePassword" component={UpdatePassword} />
        <Stack.Screen name="loginHome" component={LoginHome} />
        <Stack.Screen name="Tracker" component={Tracker} />
        <Stack.Screen name="covid" component={Covid19} />
        <Stack.Screen name="CovidOne" component={CovidOne} />
        <Stack.Screen name="CovidTwo" component={CovidTwo} />
        <Stack.Screen name="Profile" component={ProfileV1} />
        <Stack.Screen name="ReadyForScan" component={ReadyForScan} />
        <Stack.Screen name="QrScan" component={QrScan} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="BasicInfo" component={BasicInfo} />
        <Stack.Screen name="MedicalInfo" component={MedicalInfo} />
        <Stack.Screen name="TreatmentHistory" component={TreatmentHistory} />
        <Stack.Screen name="AboutInsurance" component={AboutInsurance} />
        <Stack.Screen name="ActiveInsurance" component={ActiveInsurance} />
        <Stack.Screen name="AddInsurance" component={AddInsurance} />
        <Stack.Screen name="Insurance" component={NewInsurance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigator;

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginHome} />
      <Tab.Screen name="Settings" component={Tracker} />
      <Tab.Screen name="Back" component={UpdatePassword} />
    </Tab.Navigator>
  );
}
