import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
  },
  head: {
    marginTop: 10,
    fontWeight: 'normal',
    fontSize: 28,
    color: '#0F1096',
    fontFamily: 'TitilliumWeb-Bold',
  },
  list: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
  },
  listin: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  author: {
    color: 'grey',
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    marginBottom: 10,
  },
  arrow: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
