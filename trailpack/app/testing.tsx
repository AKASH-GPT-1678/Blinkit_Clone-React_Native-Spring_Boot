
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
// import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
// import { products } from '@/components/mydata'
import { ScrollView } from 'react-native'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { Stack } from 'expo-router'
import { sampleProps } from '@/components/Viewcomponent/mydata'
import Ratings from '@/components/Viewcomponent/ratings'
import MidDisplay from '@/components/Viewcomponent/middisplay'
export default function Tesing() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>Summer</Text>
        
            {/* <ReuseProductView data={products} slice={11} heading1={'Summer'} heading2={'New Arrivals'} /> */}

     
         <Ratings rating={4}/>
         <MidDisplay data={sampleProps.data}  heading='Helelo'/>


        <View className='flex flex-row gap-3 p-3'>
          <Pressable style={{ width: 190, height: 100, backgroundColor: '#f7dc6f', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: 'https://storage.googleapis.com/management_324/MyImages/Summer/golf.avif' }} style={{ width: 80, height: 60 }} />
          </Pressable>
          <Pressable style={{ width: 190, height: 100, backgroundColor: '#f7dc6f', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: 'https://storage.googleapis.com/management_324/MyImages/Summer/golf.avif' }} style={{ width: 80, height: 60 }} />
          </Pressable>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({})