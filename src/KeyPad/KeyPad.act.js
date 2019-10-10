import { ON_DIGIT, ON_DELETE, ON_LONG_DELETE, ON_PASTE, ON_SEND } from './KeyPad.act.types'
import { Clipboard, Linking } from 'react-native'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const onDigit = digit => ({
  type: ON_DIGIT,
  payload: { digit }
})

const onDelete = () => ({
  type: ON_DELETE
})
const onLongDelete = () => ({
  type: ON_LONG_DELETE
})

const onPaste = pastedData => ({
  type: ON_PASTE,
  payload: { pastedData }
})

const onClipboardPressed = () => async dispatch => {
  const pastedData = await Clipboard.getString()
  dispatch(onPaste(pastedData.replace(/\D/g, '')))
}

const onSend = composedNumber => ({
  type: ON_SEND,
  payload: {
    composedNumber
  }
})

const formatThenSend = (rawInput, countryCode) => async dispatch => {
  try {
    let phoneNumber = undefined
    phoneNumber = parsePhoneNumberFromString(rawInput, countryCode)
    const composedNumber =
      'https://wa.me/' + phoneNumber.countryCallingCode + phoneNumber.nationalNumber
    dispatch(onSend(composedNumber))
    Linking.openURL(composedNumber)
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  onDigit,
  onDelete,
  onLongDelete,
  onClipboardPressed,
  formatThenSend
}
