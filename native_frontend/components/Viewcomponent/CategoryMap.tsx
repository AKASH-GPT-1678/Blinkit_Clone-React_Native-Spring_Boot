import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

interface Item {
  id: number;
  image: string;
  name: string;

}
interface Props {
    category: string
    data : Item[]
    slice : number
    
}

export default function CategoryMap({category , data , slice}: Props) {
  return (
    <View>
    <View>
        <Text className='text-2xl font-bold p-2 mb-2'>{category}</Text>
    </View>
    <View className='flex flex-row flex-wrap gap-2'>
            {data.slice(0,slice).map((item , index) => (
              <View key={index} className='flex flex-col  gap-2 w-[95px] h-[130px] '>
                <View className='border-2  w-full h-[90px] bg-gray-300 flex items-center justify-center p-2'>
                  <Image source={{ uri: item.image }} className='h-full w-full mt-1 mb-1 rounded-xl' resizeMode='cover' />
    
                </View>
                <Text className='text-center text-sm font-semibold '>
                  {item.name}
                </Text>
    
    
              </View>
              
            ))}
          </View>
        </View>
    // </View>
  )
}

const styles = StyleSheet.create({})