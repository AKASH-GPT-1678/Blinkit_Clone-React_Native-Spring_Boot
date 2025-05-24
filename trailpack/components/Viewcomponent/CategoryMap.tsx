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
    slice2 : number
    bgColor? : string
    
}

export default function CategoryMap({category , data ,slice, slice2 , bgColor}: Props) {
  return (
    <View>
    <View>
        <Text className='text-2xl font-bold p-2 mb-2'>{category}</Text>
    </View>
    <View className='flex flex-row flex-wrap gap-2 mt-5 mb-10' >
            {data.slice(slice , slice2).map((item , index) => (
              <View key={index} className='flex flex-col mx-3 gap-2 w-[110px] h-[130px] rounded-2xl'>
                <View className='border-2  w-full h-[90px]  flex items-center justify-center p-2 rounded-2xl' style={{ backgroundColor: bgColor }}>
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