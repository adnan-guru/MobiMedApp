import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  card: {
    width: '100%',
    height: 147,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  cardContantView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    marginTop: 15,
  },
  cardText: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 15,
    lineHeight: 17.5,
    letterSpacing: 0.03,
    color: 'rgba(58, 58, 58, 1)',
    height: 18,
    marginLeft: 5,
  },
  cardSubText: {
    fontSize: 10,
    lineHeight: 12.5,
    marginTop: 0,
    marginLeft: 5,
    color: 'rgba(154, 154, 154, 1)',
  },
  cardDotImage: {
    marginTop: 15,
  },
  crossImage: {
    marginTop: 14,
    marginRight: 10,
  },
  cardSecoundText: {
    fontSize: 10,
    lineHeight: 12.5,
    marginTop: 10,
    // marginLeft: 15,
    color: 'rgba(154, 154, 154, 1)',
  },
  hrLine: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 15,
    marginTop: 10,
  },
  secoundTitle: {
    marginTop: 10,
  },
  cardSecoundSubText: {
    fontSize: 10,
    lineHeight: 12.5,
    textAlign: 'center',
    color: 'rgba(154, 154, 154, 1)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  secoundRow: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
});
