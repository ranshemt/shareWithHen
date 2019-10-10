import React, { Component } from 'react'
import { Text, View } from 'react-native'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: {
        name: 'Israel',
        code: 972
      }
    }
  }
  render() {
    return (
      <View>
        <Text>About screen</Text>
      </View>
    )
  }
}
export default About
