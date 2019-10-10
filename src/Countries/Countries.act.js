import {
  ON_HOME_MOUNT,
  ON_PREVIEW_CLICK,
  ON_CLOSE,
  ON_LIST_CHOOSE,
  ON_TYPE_SEARCH
} from './Countries.act.types'
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

const onPreviewClick = () => ({
  type: ON_PREVIEW_CLICK
})
const onClose = () => ({
  type: ON_CLOSE
})

const onListChoose = item => ({
  type: ON_LIST_CHOOSE,
  payload: {
    ...item
  }
})

const onTypeSearch = query => {
  console.log(`searching: ${query}`)
  const searchResults = COUNTRIES.filter(country => {
    const searchableString = country.name.toUpperCase()
    const queryUpperCase = query.toUpperCase()
    return searchableString.indexOf(queryUpperCase) > -1
  })
  return {
    type: ON_TYPE_SEARCH,
    payload: {
      searchResults,
      searchQuery: query
    }
  }
}

export default {
  onHomeMount,
  onPreviewClick,
  onClose,
  onListChoose,
  onTypeSearch
}
