import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BeautyHeader from '@/components/Viewcomponent/beautyHeader'
import { Stack } from 'expo-router'
import Catoulogue from '@/components/Viewcomponent/Catoulogue'
import CategoryMap from '@/components/Viewcomponent/CategoryMap'
import { beautyProducts, iceCreamData, lorealProducts, nailProducts } from '@/components/tempdat'
import Scroll from '@/components/Viewcomponent/Scroll'
import { ScrollView } from 'react-native'
import { aroma } from '@/components/tempdat'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import DoubleView, { problemImages } from '@/components/Viewcomponent/doubleView'
const Beauty = () => {


  return (
    <>
      <Stack.Screen name="beauty" options={{ headerShown: false }} />


      <View>
    
      </View>

      <ScrollView>
            <BeautyHeader />
        
        <CategoryMap data={beautyProducts} category={'Skincare'}slice={0} slice2={iceCreamData.data.length} bgColor='#e79fd6'/>
            <ReuseProductView data={lorealProducts} slice1={0} slice2={3} heading1={'Favourites by L`Oreal Paris'} heading2={'Sponsored'}/>

               <ReuseProductView data={nailProducts} slice1={0} slice2={nailProducts.length} heading1={'Buy 2, get 1 free on nail paints'} heading2={'Sponsored'}/>
               <DoubleView data={problemImages}/>
      </ScrollView>
    

    </>
  )
}

export default Beauty

const styles = StyleSheet.create({})