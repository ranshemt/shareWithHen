import React from 'react'
import { Text, View } from 'react-native'
import S from './Header.styles'

const Header = () => {
  return (
    <View style={S.headerPadding}>
      <Text style={S.headerText}>instant WhatsApp</Text>
      <Text style={S.description}>Don't save - just send!</Text>
    </View>
  )
}
export default Header
