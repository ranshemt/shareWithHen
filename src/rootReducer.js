import { combineReducers } from 'redux'
import KeyPadReducer from './KeyPad/KeyPad.red'
import CountriesReducer from './Countries/Countries.red'

export default combineReducers({
  KeyPadReducer,
  CountriesReducer
})
