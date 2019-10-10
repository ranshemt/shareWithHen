import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import S from './Preview.styles'

const mapStateToProps = ({ KeyPadReducer }) => ({
  rawInput: KeyPadReducer.rawInput
})

const NumberPreview = props => {
  return (
    <View style={S.containerNumber}>
      <Text style={S.textNumber}>{props.rawInput}</Text>
    </View>
  )
}
NumberPreview.propTypes = {
  rawInput: PropTypes.string
}
export default connect(
  mapStateToProps,
  () => ({})
)(NumberPreview)
