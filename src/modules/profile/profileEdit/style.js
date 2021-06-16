import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFF',
  },
  header: {
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  imageView: {
    marginHorizontal: 20,
  },
  backArrow: {
    marginTop: 15,
    marginLeft: 20,
  },
  hrLine: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
  profileImage: {
    resizeMode: 'cover',
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginTop: 15,
  },
  imageText: {
    fontWeight: '400',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 14.06,
    letterSpacing: 0.03,
    color: 'rgba(154, 154, 154, 1)',
  },
  cameraImg: {
    width: 20,
    height: 21,
    alignSelf: 'center',
    marginTop: 39,
  },
  dropDownView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
