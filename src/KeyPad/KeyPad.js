import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import S from './KeyPad.styles'
import KeyPadActions from './KeyPad.act'

const mapStateToProps = ({ KeyPadReducer, CountriesReducer }) => ({
  rawInput: KeyPadReducer.rawInput,
  countryCode: CountriesReducer.countryCode
})
const mapDispatchToProps = dispatch => ({
  actions: {
    KeyPadActions: bindActionCreators(KeyPadActions, dispatch)
  }
})

const KeyPad = props => {
  return (
    <View style={S.container}>
      <View style={S.rowOf3}>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('1')}
          >
            <Text style={S.digitStyle}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('2')}
          >
            <Text style={S.digitStyle}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('3')}
          >
            <Text style={S.digitStyle}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={S.rowOf3}>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('4')}
          >
            <Text style={S.digitStyle}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('5')}
          >
            <Text style={S.digitStyle}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('6')}
          >
            <Text style={S.digitStyle}>6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={S.rowOf3}>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('7')}
          >
            <Text style={S.digitStyle}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('8')}
          >
            <Text style={S.digitStyle}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('9')}
          >
            <Text style={S.digitStyle}>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={S.rowOf3}>
        <View style={S.part1Of3}></View>
        <View style={S.part1Of3}>
          <TouchableOpacity
            style={S.digitWrapper}
            onPress={() => props.actions.KeyPadActions.onDigit('0')}
          >
            <Text style={S.digitStyle}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={S.part1Of3}></View>
      </View>
      <View style={S.rowOf3}>
        <View style={S.part1Of3}>
          <Icon
            name="content-copy"
            size={45}
            color="#000000"
            onPress={() => props.actions.KeyPadActions.onClipboardPressed()}
          />
        </View>
        <View style={S.part1Of3}>
          <Icon
            name="send-circle"
            size={90}
            color="#075E54"
            onPress={() =>
              props.actions.KeyPadActions.formatThenSend(props.rawInput, props.countryCode)
            }
          />
        </View>
        <View style={S.part1Of3}>
          <Icon
            name="backspace-outline"
            size={45}
            color="#000000"
            onPress={() => props.actions.KeyPadActions.onDelete()}
            onLongPress={() => props.actions.KeyPadActions.onLongDelete()}
          />
        </View>
      </View>
    </View>
  )
}
KeyPad.propTypes = {
  actions: PropTypes.object,
  rawInput: PropTypes.string,
  countryCode: PropTypes.string
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyPad)
