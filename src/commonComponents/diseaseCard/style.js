import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  diseaseCard: {
    width: '100%',
    height: 166,
    backgroundColor: '#EE4A5E',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  contantView: {
    marginHorizontal: 15,
  },
  contantTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.03,
    color: '#FFFFFF',
    marginTop: 10,
    height: 25,
  },
  contantSubTitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.03,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 16,
  },
  contantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 5,
  },
  cardHrLine: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    marginTop: 10,
  },
  para: {
    marginTop: 10,
    lineHeight: 20,
  },
});
