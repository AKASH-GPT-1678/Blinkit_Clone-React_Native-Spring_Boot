import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
    rating : number
}

export default function Ratings({rating} : Props) {
   
  return (
    <View className='flex flex-row'>
      {[...Array(5)].map((_, i) => (
        <FontAwesome
          key={i}
          name={i <  rating ? 'star' : 'star-o' }
          
          size={10}
          
          color={i < rating ? '#eac013' : undefined}
        />
      ))}
      {/* <FontAwesome name='star-half-empty' size={10} color={'#eac013'}/> */}
    </View>
  )
}

const styles = StyleSheet.create({})