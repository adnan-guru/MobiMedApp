import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImg: {
    width: '100%',
    height: 300,
    marginTop: -20,
  },
  backarrow: {
    width: 32,
    height: 16,
    marginTop: 74,
    marginLeft: 15,
  },
  headerCircle: {
    position: 'absolute',
    right: -20,
    width: 130,
    height: 130,
    top: -10,
  },
  personIcon: {
    width: 80,
    height: 80,
    marginTop: 4,
    alignSelf: 'center',
  },
  loginLogo: {
    marginTop: 20,
    alignSelf: 'center',
  },
  logoView: {
    height: 43,
  },
  inputsView: {
    marginHorizontal: 30,
  },
  logoText: {
    // fontFamily: 'Roboto',
    height: 21,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.09,
    color: 'rgba(102, 102, 102, 1)',
    marginTop: 10,
    textAlign: 'center',
  },
  inputTitle: {
    // fontFamily:'Quicksand'
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 3,
    height: 20,
    marginTop: 72,
    textAlign: 'center',
    color: 'rgba(51, 51, 51, 1)',
  },

  inputTop: {
    marginTop: 10,
  },

  button: {
    marginTop: 30,
  },
  bottomTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 31,
  },
  bottomText: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17.5,
    textAlign: 'center',
    color: 'rgba(102, 102, 102, 1)',
    width: 80,
  },
  bottomTextLine: {
    height: 20,
  },
});
