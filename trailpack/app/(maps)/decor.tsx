import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { FlatList } from 'react-native'
import { deocr_header, keyWashroom, kitchen } from '@/components/tempdat'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import Ratings from '@/components/Viewcomponent/ratings'
import { decoration } from '@/components/tempdat'
import { aroma } from '@/components/tempdat'
import { bedsheets } from '@/components/tempdat'
const Decoration = () => {
  return (
    <>
      <Stack.Screen name="decor" options={{ headerShown: false }} />
      <Text>Hello Mumbai</Text>

      <ScrollView>
        <FlatList data={deocr_header} horizontal={true} renderItem={
          ({ item }) =>
          (
            <View className='flex flex-col w-[120px]  h-[230px] bg-white mx-2  ml-2 '>
              <Image
                source={{ uri: item.image }}
                className='h-[100px] w-[120px] mt-1 mb-1 rounded-xl relative '
                resizeMode='cover'
              />
              <Pressable className='text-sm font-semibold p-1 w-[50%]  absolute top-24 right-2 border-2 border-green-600'>
                <Text className='font-extrabold text-green-600 ml-3 '>ADD</Text>
              </Pressable>

              <View className='flex flex-col text-sm ml-2 mt-3'>
                <Text className='text-xs'>{item.quantity}</Text>
                <Text className='text-sm font-bold'>{item.name}</Text>
                <Text className='text-sm'>{item.deliveryTime}</Text>
                <Text className='text-sm'>
                  <Ratings rating={item.rating} /></Text>
                <Text className='text-sm font-semibold'>र {item.price}</Text>
              </View>
              <Text className='bg-green-100 text-xs w-full absolute bottom-1  text-green-700'> See More Like this </Text>
            </View>
          )
        }>

        </FlatList>


        <ReuseProductView data={decoration} slice1={0} slice2={6} heading1={'Furnish with style'} />
        <ReuseProductView data={decoration} slice1={6} slice2={decoration.length} heading1={'A dream for your little Ones'} />
        <ReuseProductView data={bedsheets} slice1={0} slice2={6} heading1={'Make your bedroom perfect escape'} />

        <ReuseProductView data={aroma} slice1={0} slice2={6} heading1={'Make your bedroom perfect escape'} />

        <ReuseProductView data={kitchen} slice1={0} slice2={6} heading1={'The Heart of every Kitchen'} />



        <ReuseProductView data={keyWashroom} slice1={0} slice2={6} heading1={'The Heart of every Kitchen'} />
        

      </ScrollView>

    </>
  )
}

export default Decoration

const styles = StyleSheet.create({})