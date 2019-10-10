import React from 'react'
import { View, Modal, FlatList, Text, TouchableOpacity, TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import COUNTRIES from '../Assets/countriesList'
import S from './Countries.styles'
import CountriesActions from './Countries.act'

const mapStateToProps = ({ CountriesReducer }) => ({
  showList: CountriesReducer.showList
})
const mapDispatchToProps = dispatch => ({
  actions: {
    CountriesActions: bindActionCreators(CountriesActions, dispatch)
  }
})

const Countries = props => {
  return (
    <Modal
      visible={props.showList}
      animationType={'slide'}
      transparent
      onRequestClose={() => props.actions.CountriesActions.onClose()}
    >
      <View style={S.container}>
        <FlatList
          data={COUNTRIES}
          keyExtractor={item => item.countryCode}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={S.countryRow}
              activeOpacity={1}
              stickyHeaderIndices={[0]}
              onPress={() => props.actions.CountriesActions.onListChoose(item)}
            >
              <View style={S.flagContainer}>
                <Text style={S.flag}>{item.emojiFlagCode}</Text>
              </View>
              <View style={S.nameContainer}>
                <Text style={S.info}>{item.name}</Text>
              </View>
              <View style={S.codeContainer}>
                <Text style={S.info}>+ {item.callingCode}</Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={S.separatorStyle} />}
          ListHeaderComponent={() => (
            <View style={S.headerContainer}>
              <View style={S.searchBox}>
                <TextInput
                  style={S.searchInput}
                  keyboardType="default"
                  autoCapitalize={'none'}
                  placeholder="search countries"
                />
                <Icon
                  name="magnify"
                  size={32}
                  color="#a9a9a9"
                  onPress={() => props.actions.CountriesActions.onClose()}
                />
              </View>
            </View>
          )}
          stickyHeaderIndices={[0]}
        />
      </View>
    </Modal>
  )
}

Countries.propTypes = {
  actions: PropTypes.object,
  showList: PropTypes.bool
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries)
