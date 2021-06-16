import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  arrow: {
    width: 32,
    height: 16,
    marginTop: 59,
    marginLeft: 15,
  },
  title: {
    marginTop: 59,
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 27,
    letterSpacing: 0.03,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  Img: {
    alignSelf: 'center',
    marginTop: 50,
  },
  imageText: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22,
  },
  qrImage: {
    alignSelf: 'center',
    marginTop: 10,
  },
  imageSubText: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.03,
    lineHeight: 17.5,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 10,
    textAlign: 'center',
  },
  qrImageRow: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: 30,
  },
});
