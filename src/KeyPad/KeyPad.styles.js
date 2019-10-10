import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  //
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'stretch'
  },
  //
  rowOf3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  part1Of3: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  digitWrapper: {
    width: 75,
    height: 75,
    textAlign: 'center',
    borderRadius: 75,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff' //DCF8C6
  },
  digitStyle: {
    fontSize: 45,
    color: '#000000',
    textAlign: 'center'
  },
  iconStyle: {},
  sendStyle: {}
})
export default styles
