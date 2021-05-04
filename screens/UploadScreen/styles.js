import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  head: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'TitilliumWeb-Bold',
    marginTop: 10,
    color: '#0F1096',
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },
  titleinput: {
    marginBottom: 20,
    paddingLeft: 10,
    fontFamily: 'TitilliumWeb-Regular',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  subinput: {
    marginBottom: 20,
    paddingLeft: 10,
    fontFamily: 'TitilliumWeb-Regular',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 0,
  },
  nameinput: {
    marginBottom: 20,
    paddingLeft: 10,
    fontFamily: 'TitilliumWeb-Regular',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  addpdf: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  img: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E2E5DE',
  },
  txt: {
    fontFamily: 'TitilliumWeb-Bold',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  upld: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  aindicator: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  indic: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
