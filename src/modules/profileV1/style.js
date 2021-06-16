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
  mainView: {
    marginHorizontal: 20,
  },
  headerIcon: {
    width: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  title: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.03,
    color: '#2A2A2A',
  },
  heading: {
    // marginLeft: 20,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.03,
    color: 'rgba(154, 154, 154, 1)',
    width: 235,
    height: 44,
  },
  icon: {
    marginLeft: 20,
    marginTop: 4,
    width: 15,
    height: 15,
  },
  hrLine: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 26,
  },
  card: {
    width: '100%',
    height: 130,
    backgroundColor: '#0ABAB5',
    borderRadius: 15,
    marginTop: 20,
  },
  MailIcon: {
    marginTop: 20,
    marginLeft: 20,
  },
  nextIcon: {
    marginTop: 15,
  },
  cardText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.5,
    letterSpacing: 0.03,
    marginTop: 21,
    marginLeft: 5,
    height: 20,
    color: 'rgba(255, 255, 255, 1)',
  },
  nextText: {
    marginTop: 15,
  },
  cardRow: {
    flexDirection: 'row',
  },
  ErrorIcon: {
    position: 'absolute',
    right: 20,
  },
  detailCard: {
    width: '100%',
    height: 161,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  detailCardIcon: {
    marginTop: 20,
  },
  detailCardText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22.5,
    marginTop: 20,
    marginLeft: 10,
    color: 'rgba(0, 0, 0, 1)',
    height: 23,
  },

  detailCardText2: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    marginLeft: 10,
    color: 'rgba(154, 154, 154, 1) ',
  },
  detailCardLine: {
    position: 'absolute',
    left: '50%',
    top: 20,
  },
  detailCardLine2: {
    position: 'absolute',
    top: 80,
    width: '100%',
  },
  detailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailRowMargin: {
    flexDirection: 'row',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
