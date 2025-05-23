import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { products } from '@/components/Viewcomponent/mydata'
import { ScrollView } from 'react-native'
import { Stack } from 'expo-router'
import MidDisplay from '@/components/Viewcomponent/middisplay'
import { sampleProps } from '@/components/Viewcomponent/mydata'
import { SummerMemory } from '@/components/Viewcomponent/mydata'
import { Gardening } from '@/components/Viewcomponent/mydata'
import { Icecrem } from '@/components/Viewcomponent/mydata'
const Summer = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View>

        <View className='h-[100px]'>

        </View>




        <ScrollView>
          <View>
            <ReuseProductView data={products} slice1={0} slice2={3} heading1={'Unwind with your creative side '} heading2='Get drawing bookscolours & more' />


            <ReuseProductView data={products} slice1={3} slice2={9} heading1={'JUST FUN NO SCREENS '} heading2='Get Whatever you desire' bgUrl='https://pub-static.fotor.com/assets/bg/bf9a415f-b758-4c0d-a820-334370772ec3.jpg' />

            <ReuseProductView data={products} slice1={3} slice2={9} heading1={'Make Your vacations more playful'} />
            <ReuseProductView data={SummerMemory} slice1={0} slice2={3} heading1={'Make Sleepovers fun and memorable'} />

            <MidDisplay data={sampleProps.data} heading='Helelo' />

            <ReuseProductView data={Gardening} slice1={0} slice2={6} heading1={'The Joy of Gardening & growing'} heading2='Get plants, watering cans and more' />


            <ReuseProductView data={Icecrem} slice1={0} slice2={6} heading1={'Make Sleepovers fun and memorable'} />
          </View>
          <View>
            <View className='flex flex-col  p-3 h-[200px] mt-10
            '>
              <Text className='text-4xl font-semibold ' style={{fontSize : 40 , fontWeight : 'bold'}}>Blinkit india's ❤️</Text>
              <Text style={{fontSize : 40 , fontWeight : 'bold'}}>last minute app</Text>




            </View>

          </View>





        </ScrollView>








      </View>
    </>
  )
}

export default Summer

const styles = StyleSheet.create({})