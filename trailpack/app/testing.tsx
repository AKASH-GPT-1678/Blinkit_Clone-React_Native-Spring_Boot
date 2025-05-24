
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import { products } from '@/components/Viewcomponent/mydata'
import { ScrollView } from 'react-native'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { Stack } from 'expo-router'
import { sampleProps } from '@/components/Viewcomponent/mydata'
import Ratings from '@/components/Viewcomponent/ratings'
import MidDisplay from '@/components/Viewcomponent/middisplay'
import WithbackgroundView from '@/components/Viewcomponent/withbackgroundView'
export default function Tesing() {
  return (
  
   
      <View>
           <Stack.Screen options={{ headerShown: false }} />
        <Text>Summer</Text>
        

     
         <Ratings rating={4}/>
         <WithbackgroundView data={products} slice1={0} slice2={3} heading1={'Summer'} heading2={'New Arrivals'} bgUrl='data:image/jpeg;base64,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' />
          <Image source={require('./planting.png')}  width={10} height={10 } style={{backgroundColor:'red'}}  className='bg-red-800'/>
      </View>
    
  )
}


const styles = StyleSheet.create({})