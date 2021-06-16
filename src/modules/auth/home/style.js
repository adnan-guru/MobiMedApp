import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  logo: {
    marginTop: 74,
    alignSelf: 'center',
  },
  text: {
    marginTop: 20,
    height: 21,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.09,
    alignSelf: 'center',
    color: 'rgba(102, 102, 102, 1)',
    alignItems: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  mobileImg: {
    height: 180,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonView: {
    paddingHorizontal: 30,
    marginTop: 67,
  },
  registerButton: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderColor: '#EE4A5E',
    borderWidth: 1,
    marginTop: 30,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    // transform: [{rotate: '-5deg'}],
  },
  circleImgLeft: {
    marginTop: 143,
    transform: [{rotate: '80deg'}],
    position: 'absolute',
  },
  bottomText: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16.25,
    color: 'rgba(255, 255, 255, 0.82)',
    marginTop: 168,
    textAlign: 'center',
  },
  subText: {
    fontSize: 15,
    lineHeight: 18,
    marginTop: 5,
  },
});
