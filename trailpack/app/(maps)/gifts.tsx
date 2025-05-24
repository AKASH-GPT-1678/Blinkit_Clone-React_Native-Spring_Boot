import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Scroll from '@/components/Viewcomponent/Scroll'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { earphonesItems, giftPlants, giftProps, kidsToys, newElectronics, newHomeGiftItems, perfumeGift, topGiftpicks, trendingGifts } from '@/components/tempdat'
import CategoryMap from '@/components/Viewcomponent/CategoryMap'
import WithbackgroundView from '@/components/Viewcomponent/withbackgroundView'
import LastFooter from '@/components/Viewcomponent/lastfooter'

const Gifts = () => {
    return (
        <>
            <Stack.Screen name="gifts" options={{ headerShown: false }} />
            <ScrollView>
                <CategoryMap data={giftProps.data} category={'Gift Plants'} slice={0} slice2={6} bgColor='#ca2c0a' />


                <ReuseProductView data={giftPlants} slice1={0} slice2={6} heading1={'Gift Plants'} />

                <ReuseProductView data={topGiftpicks} slice1={0} slice2={3} heading1={'Top Pick for you'} />
                <ReuseProductView data={newHomeGiftItems} slice1={0} slice2={6} heading1='Gift for new homes' heading2='Explore all' />\
                <ReuseProductView data={perfumeGift} slice1={0} slice2={6} heading1={'Top Pick for you'} />

                <ReuseProductView data={earphonesItems} slice1={0} slice2={6} heading1={'Deal on earphones and earbuds'} />
                <ReuseProductView data={newElectronics} slice1={0} slice2={6} heading1={'Perfect gift for tech lovers '} heading2='Explore the lateste tech products ' />


                <WithbackgroundView data={kidsToys} slice1={0} slice2={6} heading1={'Toys and Gift for little ones'} bgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2pIOK6DANg2ObbfxdSvSYAoVrQvofck1JQ&s' />
                <ReuseProductView data={trendingGifts} slice1={0} slice2={6} heading1={'Trending Gifts'} />

                <LastFooter/>
            </ScrollView>


        </>
    )
}

export default Gifts

const styles = StyleSheet.create({})