import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  //
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  pattern: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  //Parts
  containerHeader: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#075E54'
  },
  containerPreview: {
    flex: 2,
    justifyContent: 'center'
  },
  previewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderBottomColor: '#C0C0C0',
    borderWidth: 1,
    marginHorizontal: 15
  },
  containerKeypad: {
    flex: 7
  }
})
export default styles
