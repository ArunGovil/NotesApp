import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  title: {
    alignItems: 'center',
    width: '100%',
  },
  head: {
    fontSize: 40,
    marginTop: '30%',
    fontWeight: 'normal',
    fontFamily: 'TitilliumWeb-Bold',
  },
  subhead: {
    fontWeight: 'normal',
    fontFamily: 'TitilliumWeb-Regular',
  },
  btns: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  add: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  elem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btxt: {
    fontFamily: 'TitilliumWeb-Bold',
    paddingLeft: 15,
    color: '#1257D1',
  },
  imgs: {
    alignItems: 'center',
  },
  img: {
    resizeMode: 'center',
  },
});

export default styles;
