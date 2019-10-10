import { ON_DIGIT, ON_DELETE, ON_LONG_DELETE, ON_PASTE, ON_SEND } from './KeyPad.act.types'

const initialState = {
  rawInput: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_DIGIT:
      return {
        rawInput: state.rawInput + action.payload.digit
      }
    case ON_DELETE: {
      return {
        rawInput: state.rawInput.slice(0, -1)
      }
    }
    case ON_LONG_DELETE: {
      return {
        rawInput: ''
      }
    }
    case ON_PASTE: {
      return {
        rawInput: action.payload.pastedData
      }
    }
    case ON_SEND: {
      return {
        ...state,
        composedNumber: action.payload.composedNumber
      }
    }
    default:
      return state
  }
}
