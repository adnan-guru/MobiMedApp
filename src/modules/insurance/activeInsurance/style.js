import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: 'rgba(10, 186, 181, 1)',
    height: 44,
  },
  contantView: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20,
    height: 19,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.75,
    letterSpacing: 0.03,
    color: 'rgba(42, 42, 42, 1)',
  },
  button: {
    width: 94,
    height: 34,
    borderColor: '#0ABAB5',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    backgroundColor: '#FFFFFF',
  },
  buttonTitle: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17.5,
    letterSpacing: 0.03,
    color: 'rgba(10, 186, 181, 1)',
    textAlign: 'center',
    marginTop: 8,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hrLine: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 20,
  },
});
