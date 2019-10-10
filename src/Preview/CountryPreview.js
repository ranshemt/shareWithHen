import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import CountriesActions from '../Countries/Countries.act'
import S from './Preview.styles'

const mapStateToProps = ({ CountriesReducer }) => ({
  countryCode: CountriesReducer.countryCode,
  localizeCountryCode: CountriesReducer.localizeCountryCode,
  countryCallingCode: CountriesReducer.countryCallingCode,
  emojiFlag: CountriesReducer.emojiFlag,
  countryName: CountriesReducer.countryName
})
const mapDispatchToProps = dispatch => ({
  actions: {
    CountriesActions: bindActionCreators(CountriesActions, dispatch)
  }
})

const CountryPreview = props => {
  return (
    <TouchableOpacity
      style={S.containerCountry}
      onPress={() => props.actions.CountriesActions.onPriviewClick()}
    >
      <View style={S.titleRow}>
        <Text style={S.title}>{props.countryCode}</Text>
        <Icon style={S.openArrow} name="chevron-down" size={15} color="#000000" />
      </View>
      <View style={S.selectRow}>
        <Text style={S.flag}>{props.emojiFlag}</Text>
        <Text style={S.code}>+{props.countryCallingCode}</Text>
      </View>
    </TouchableOpacity>
  )
}
CountryPreview.propTypes = {
  actions: PropTypes.object,
  countryCode: PropTypes.string,
  emojiFlag: PropTypes.string,
  countryCallingCode: PropTypes.string
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryPreview)
