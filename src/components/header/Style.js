import
{
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#005070',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 0, 
        right: 0,
        color: '#fff',
        fontSize: 18,
        paddingTop: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    search: {
        position: 'absolute',
        right: 10,
        padding: 10,
        bottom: 3
    },
    searchBack: {
        position: 'absolute',
        left: 10,
        padding: 10,
        bottom: 3
    },
    searchInput: {
        position: 'absolute',
        left: 50,
        bottom: 10,
        top: 40,
        right: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        color: '#fff'
    }
});