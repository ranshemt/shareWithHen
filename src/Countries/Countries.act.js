import { ON_HOME_MOUNT, ON_PREVIEW_CLICK, ON_CLOSE, ON_LIST_CHOOSE } from './Countries.act.types'
import COUNTRIES from '../Assets/countriesList'

const onHomeMount = localizeCountryCode => ({
  type: ON_HOME_MOUNT,
  payload: {
    localizeCountryCode,
    countryName: COUNTRIES.filter(
      country => !country.countryCode.localeCompare(localizeCountryCode)
    )[0].name,
    countryCode: localizeCountryCode,
    countryCallingCode: COUNTRIES.filter(
      country => !country.countryCode.localeCompare(localizeCountryCode)
    )[0].callingCode,
    emojiFlag: COUNTRIES.filter(
      country => !country.countryCode.localeCompare(localizeCountryCode)
    )[0].emojiFlagCode
  }
})

const onPriviewClick = () => ({
  type: ON_PREVIEW_CLICK
})
const onClose = () => ({
  type: ON_CLOSE
})

const onListChoose = item => {
  return {
    type: ON_LIST_CHOOSE,
    payload: {
      ...item
    }
  }
}
// const onListChoose = item => ({
//     type: ON_LIST_CHOOSE,
//     payload: {
//       ...item
//     }
//   })

export default {
  onHomeMount,
  onPriviewClick,
  onClose,
  onListChoose
}
