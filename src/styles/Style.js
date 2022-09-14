import
{
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    width:'100%',
    height: '100%',
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:50
  },
  flexView: {
    flex:1,
  },
  marginNormal: {
    marginTop: 300
  },
  primaryBtn: {
    backgroundColor: '#231352',
    padding: 20,
    borderRadius: 20,
    
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff'
  },
  inputLabel: {
    marginBottom:5
  },
  inputView: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#123498',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40
  }
});