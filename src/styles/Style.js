import
{
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  primaryFullBG: {
    width:'100%',
    height: '100%',
    backgroundColor: '#005070'
  },  
  whiteBG: {
    width:'100%',
    height: '100%',
    backgroundColor: '#fff'
  }, 
  primaryBtn: {
    backgroundColor: '#ff69b9',
    padding: 20,
    borderRadius: 40,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#fff'
  },
  welcomeTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    color: '#fff'
  },
  welcomeText: {
    marginLeft: 20, 
    marginRight: 20,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#fff'
  },
  unlockInput: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
    marginRight: 20,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 30
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  profileItem: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16
  },
  profileField: {
    fontSize: 14,
    color: '#000',
    lineHeight: 30,
  },
  profileValue: {
    lineHeight: 30,
    color: '#15607D',
    fontSize: 16,
    fontWeight: '600'
  }
});