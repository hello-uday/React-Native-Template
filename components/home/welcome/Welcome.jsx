import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, icons,images,SIZES } from '../../../constants';
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <Text style={{
        paddingLeft:80,
        color:"#C1C0C8"
      }}>Welcome Back</Text>

      <Text style={{
        paddingLeft:80,
        fontSize: 30,
        color:"#F3F4F8"
      }}
      // USER PROFILE PHOTO Name
      >Hi User</Text>
    </View>
  )
}

export default Welcome