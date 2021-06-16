import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  basiCInfoView: {
    marginHorizontal: 20,
    // marginTop: 100,
  },
  detailView: {
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 52,

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
  hrLine: {
    borderColor: '#EEEEEE',
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
  icon: {
    marginTop: 18,
    marginLeft: 16,
  },
  arrowIcon: {
    marginTop: 25,
    marginRight: 17,
  },
  detailText: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 17.5,
  },
});
