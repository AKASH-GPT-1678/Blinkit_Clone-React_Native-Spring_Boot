import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { babyToys, Diaper, kidLightningitems, kidsfoodItems, trendingItems } from '@/components/tempdat'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { babyCareItems } from '@/components/tempdat'
import CategoryMap from '@/components/Viewcomponent/CategoryMap'
import Scroll from '@/components/Viewcomponent/Scroll'
import WithbackgroundView from '@/components/Viewcomponent/withbackgroundView'
import { Stack } from 'expo-router'
import LastFooter from '@/components/Viewcomponent/lastfooter'
const Kids = () => {
  return (

    <>
        <Stack.Screen name="kids" options={{ headerShown: false }} />


      <ScrollView>
        <ReuseProductView data={Diaper} slice1={0} slice2={6} heading1={'Top Picks'} heading2='Get Whatever you desire' />
        <CategoryMap data={babyCareItems} category={'Baby Care'} slice={0} slice2={3} bgColor='#d0f1ef' />
        <CategoryMap data={babyCareItems} category={'Feeding essentials'} slice={3} slice2={6} bgColor='#d0f1ef' />
        <CategoryMap data={babyCareItems} category={'Body Skin & face care'} slice={6} slice2={9} bgColor='#d0f1ef' />
        <CategoryMap data={babyCareItems} category={'Hygiene and grooming'} slice={9} slice2={12} bgColor='#d0f1ef' />
        <ReuseProductView data={babyToys} slice1={0} slice2={9} heading1={'Toys and Gift for little ones'} />
        <WithbackgroundView data={trendingItems} slice1={0} slice2={6} heading1={'Trending near you'} bgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2pIOK6DANg2ObbfxdSvSYAoVrQvofck1JQ&s' />
        <ReuseProductView data={babyToys} slice1={0} slice2={9} heading1={'Toys and Gift for little ones'} />
        <WithbackgroundView data={trendingItems} slice1={0} slice2={6} heading1={'New at your store'} heading2='Explore all the newly added items' bgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_AdOxxNCz0WhqKoGGna-GJYZtrmUpO9yjQ&s' />
        <WithbackgroundView data={kidLightningitems} slice1={0} slice2={6} heading1={'Lightning Deals'} heading2='Explroe all the deals around you' bgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_AdOxxNCz0WhqKoGGna-GJYZtrmUpO9yjQ&s' />
        <ReuseProductView data={kidsfoodItems} slice1={0} slice2={6} heading1={'Kids food and Nutrition'} />
        <LastFooter />


      </ScrollView>
    
    </>
  )
}

export default Kids

const styles = StyleSheet.create({})