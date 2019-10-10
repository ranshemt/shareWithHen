import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as RNLocalize from 'react-native-localize'

import S from './Home.styles'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import NumberPreview from '../Preview/NumberPreview'
import CountryPreview from '../Preview/CountryPreview'
import KeyPad from '../KeyPad/KeyPad'
import CountriesActions from '../Countries/Countries.act'

const mapStateToProps = ({ CountriesReducer }) => ({
  countryCode: CountriesReducer.countryCode,
  localizeCountryCode: CountriesReducer.localizeCountryCode
})
const mapDispatchToProps = dispatch => ({
  actions: {
    CountriesActions: bindActionCreators(CountriesActions, dispatch)
  }
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const localizeCountryCode = RNLocalize.getCountry()
    this.props.actions.CountriesActions.onHomeMount(localizeCountryCode)
  }
  render() {
    return (
      <View style={S.container}>
        <ImageBackground
          source={require('../Assets/pattern.jpg')}
          style={S.pattern}
          resizeMode="cover"
        >
          <Countries />
          <View style={S.containerHeader}>
            <Header />
          </View>
          <View style={S.containerPreview}>
            <View style={S.previewBox}>
              <CountryPreview />
              <NumberPreview />
            </View>
          </View>
          <View style={S.containerKeypad}>
            <KeyPad />
          </View>
        </ImageBackground>
      </View>
    )
  }
}
Home.propTypes = {
  actions: PropTypes.object,
  countryCode: PropTypes.string,
  localizeCountryCode: PropTypes.string
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
