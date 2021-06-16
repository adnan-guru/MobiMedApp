import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  bgColor: {
    backgroundColor: '#E5E5E5',
  },
  hrLine: {
    borderColor: 'rgba(238, 238, 238, 1)',
    borderWidth: 1,
    width: 335,
    marginTop: 20,
    alignSelf: 'center',
  },

  title: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.03,
    color: 'rgba(106, 106, 106, 1)',
    marginTop: 20,
  },
  paragraphView: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 15,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
    marginLeft: 16,
  },
  addHistoryCard: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'grey',
  },
  icon: {
    marginTop: 15,
    alignSelf: 'center',
  },
  addHistoryCardText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: 0.03,
    color: 'rgba(154, 154, 154, 1)',
    marginTop: 5,
    alignSelf: 'center',
  },
});
