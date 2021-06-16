import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  covidImg1: {
    marginTop: 20,
    alignSelf: 'center',
  },

  checkUpCard: {
    backgroundColor: 'rgba(238, 74, 94, 1)',
    height: 130,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  checkCardIcon: {
    marginTop: 15,
    marginLeft: 15,
  },
  checkCardText: {
    marginTop: 15,
    marginLeft: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22.5,
    letterSpacing: 0.03,
    color: 'rgba(255, 255, 255, 1)',
  },
  checkCardText2: {
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 14,
    fontWeight: '500',
    width: 215,
  },
  checkCardIcon2: {
    marginTop: 90,
    marginLeft: -16,
  },

  stepsTitle: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.75,
    letterSpacing: 0.03,
    color: '#2A2A2A',
    marginLeft: 20,
    marginTop: 25,
  },
});
