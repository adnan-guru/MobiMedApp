import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  statusBar: {
    backgroundColor: 'rgba(10, 186, 181, 1)',
    height: 44,
  },
  hrLine: {
    borderColor: 'rgba(238, 238, 238, 1)',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  buttonView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    height: 140,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.41,
    letterSpacing: 0.03,
    color: 'rgba(106, 106, 106, 1)',
    marginTop: 15,
    marginLeft: 15,
  },
  cardHrLine: {
    marginTop: 15,
  },
});
