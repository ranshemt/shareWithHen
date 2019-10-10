import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countryRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '2%'
  },
  flagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  nameContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  codeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  flag: {
    fontSize: 25
  },
  info: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'left'
  },
  separatorStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE'
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6',
    padding: 12
  },
  searchBox: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  searchInput: {
    fontSize: 20
  }
})
export default styles
