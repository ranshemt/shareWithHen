import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  //
  containerNumber: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 5
  },
  textNumber: {
    fontSize: 27
  },
  //
  containerCountry: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleRow: {
    width: '90%',
    textAlign: 'left',
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 12,
    marginRight: 2
  },
  selectRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flag: {
    fontSize: 25
  },
  code: {
    fontSize: 15,
    paddingLeft: 5
  }
})
export default styles
