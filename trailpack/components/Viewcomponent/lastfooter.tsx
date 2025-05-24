import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LastFooter() {
  return (
    <View className='flex flex-col h-[200px]  w-full '>



        <View className=' p-10  '>

        <Text className='text-3xl text-gray-400 font-bold'>India's last</Text>
        <Text className='text-3xl text-gray-400 font-bold'>minute app ❤️</Text>
        </View>

        <Text className='ml-10 text-2xl font-bold text-gray-400'>
            blink it
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({})
