import
{
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 80,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
  },  
  nameContainer: {
    flex: 1
  },
  profileImg: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 10
  },
  unreadText: {
    marginTop: 10,
    backgroundColor: '#ff69b9',    
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    borderRadius: 20
  },
  name: {
    fontWeight: '600',
    lineHeight: 30,
    fontSize: 16
  },
  message: {
    lineHeight: 30,
    fontWeight: '400',
    fontSize: 14,
    color: '#444'
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    color: '#444'
  }
  
});