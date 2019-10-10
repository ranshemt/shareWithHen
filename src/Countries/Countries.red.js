import { ON_HOME_MOUNT, ON_PREVIEW_CLICK, ON_CLOSE, ON_LIST_CHOOSE } from './Countries.act.types'

const initialState = {
  countryCode: 'IL',
  countryName: 'Israel',
  localizeCountryCode: '',
  countryCallingCode: '972',
  emojiFlag: '',
  showList: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_HOME_MOUNT:
      return {
        ...state,
        localizeCountryCode: action.payload.localizeCountryCode,
        countryCode: action.payload.localizeCountryCode,
        countryCallingCode: action.payload.countryCallingCode,
        emojiFlag: action.payload.emojiFlag,
        countryName: action.payload.countryName
      }
    case ON_PREVIEW_CLICK:
      return {
        ...state,
        showList: true
      }
    case ON_CLOSE:
      return {
        ...state,
        showList: false
      }
    case ON_LIST_CHOOSE:
      return {
        ...state,
        countryCode: action.payload.countryCode,
        countryCallingCode: action.payload.callingCode,
        countryName: action.payload.name,
        emojiFlag: action.payload.emojiFlagCode,
        showList: false
      }
    default:
      return state
  }
}
