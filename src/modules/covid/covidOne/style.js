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
  paraView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  para: {
    width: '100%',
    height: 96,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.03,
    color: 'rgba(42, 42, 42, 1)',
  },
  hrLine: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
