import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 5,
    borderColor: 'rgba(153, 153, 153, 1)',
    backgroundColor: '#F8F8F8',
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    flexDirection: 'row',
  },

  mailIcon: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 10,
  },
  inputLine: {
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  inputPlaceholder: {
    marginLeft: 10,
    width: '100%',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17.5,
    letterSpacing: 1,
  },
});
