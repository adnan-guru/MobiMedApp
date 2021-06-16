import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  covidHeader: {
    width: '100%',
    height: 89,
    backgroundColor: 'rgba(10, 186, 181, 1)',
  },
  headerImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    marginTop: 15,
    marginLeft: 20,
  },
  textView: {
    marginHorizontal: 20,
    marginTop: -40,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    fontStyle: 'normal',
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 22.5,
    height: 23,
  },
  card: {
    width: '100%',
    height: 117,
    borderRadius: 15,
    backgroundColor: '#FFEECC',
    marginTop: 19,
  },
  mainView: {
    marginHorizontal: 20,
  },
  cardText: {
    marginTop: 30,
    marginLeft: 30,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.5,
    letterSpacing: 0.03,
    color: 'rgba(58, 58, 58, 1)',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 22,
    letterSpacing: 0.03,
    color: 'rgba(255, 122, 0, 1)',
    marginTop: 12,
    marginLeft: 30,
  },
  para: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.03,
    color: 'rgba(154, 154, 154, 1)',
    height: 66,
    width: '100%',
    marginTop: 20,
  },
  hrLine: {
    borderWidth: 1,
    borderColor: 'rgba(238, 238, 238, 1)',
    marginTop: 20,
  },
  pointsView: {
    flexDirection: 'row',
  },
  pointsTitle: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.75,
    letterSpacing: 0.03,
    color: 'rgba(42, 42, 42, 1)',
    marginTop: 20,
  },
  pointstext: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    height: 44,
    marginLeft: 10,
    width: 309,
    marginTop: 20,
    color: '#6A6A6A',
  },
  doneImg: {
    marginTop: 25,
  },
  button: {
    marginTop: 41,
    marginBottom: 79,
  },
});
