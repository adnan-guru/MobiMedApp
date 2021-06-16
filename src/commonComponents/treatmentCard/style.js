import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  treatmentCard: {
    width: '99%',
    height: 245,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderLeftWidth: 5,
  },
  cardLeftImg: {
    position: 'absolute',
  },
  treatmentCardText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.5,
    letterSpacing: 0.03,
    color: 'rgba(106, 106, 106, 1)',
    marginTop: 15,
    marginLeft: 15,
  },
  treatmentCardSubText: {
    color: 'rgba(154, 154, 154, 1)',
  },
  dateView: {
    width: 223,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  medicineRow: {
    width: 271,
  },
  treatmentCardParaText: {
    marginTop: 5,
    fontSize: 12,
  },
});
