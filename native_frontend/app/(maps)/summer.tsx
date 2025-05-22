import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { products } from '@/components/mydata'
import { ScrollView } from 'react-native'
const Summer = () => {
  return (
    <View>
      <Text>Summer</Text>
      {/* <ReuseProductView data={products} slice={3} heading1={'Summer'} heading2={'New Arrivals'} /> */}

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
        overflowX: 'scroll',
        cursor: 'pointer',
      }} >
        <ReuseProductView data={products} slice={11} heading1={'Summer'} heading2={'New Arrivals'} />



      </ScrollView>




      <View className='flex flex-row gap-3 p-3'>
        <Pressable  style={{width: 190, height: 100 , backgroundColor: '#f7dc6f', flex : 1 , alignItems : 'center' , justifyContent: 'center'}}>
       <Image source={{uri :'https://storage.googleapis.com/management_324/MyImages/Summer/golf.avif'}}  style={{width: 80, height: 60}}/>
       </Pressable>
         <Pressable  style={{width: 190, height: 100 , backgroundColor: '#f7dc6f' , alignItems : 'center' , justifyContent: 'center'}}>
       <Image source={{uri :'https://storage.googleapis.com/management_324/MyImages/Summer/golf.avif'}}  style={{width: 80, height: 60}}/>
       </Pressable> 
      </View>
    </View>
  )
}

export default Summer

const styles = StyleSheet.create({})