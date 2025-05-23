import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { products } from './mydata'
import ReuseProductView from './reuseproductview'
export default function Scroll() {
  return (
    <View>
            <ScrollView
             
            
            
            >
{/*     
              <ReuseProductView data={products} slice1={} heading1={'Summer'} heading2={'New Arrivals'} />
              <ReuseProductView data={products} slice={7} heading1={'Summer'} heading2={'New Arrivals'} /> */}
    
    
    
    
            </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})