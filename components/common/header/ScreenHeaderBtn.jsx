import React from 'react'
import { View, Text, Touchable } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style = {styles.btnImg(dimension)}
        borderRadius={50}
        
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn