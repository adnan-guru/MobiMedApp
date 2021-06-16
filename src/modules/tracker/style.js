import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  backIcon: {
    marginTop: 15,
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 18.75,
    letterSpacing: 0.03,
    textAlign: 'center',
    marginTop: 15,
    height: 19,
  },
  points: {
    flexDirection: 'row',
    marginHorizontal: 21,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  activeTaxt: {
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0.03,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 7,
  },
  activeTaxtView: {
    width: 69,
    height: 29,
    backgroundColor: '#EE4A5E',
    borderRadius: 550,
  },
  pointsText: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    color: 'rgba(154, 154, 154, 1)',
    width: 69,
    height: 29,
  },
  progressBar: {
    height: 240,
    alignSelf: 'center',
    marginTop: 25,
  },
});
