import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { ScrollView } from 'react-native'
import { audio_accessories, brush_data, mixers, trimmers } from '@/components/tempdat'
import { power_bank } from '@/components/tempdat'
import { premium_iphone } from '@/components/tempdat'
import WithbackgroundView from '@/components/Viewcomponent/withbackgroundView'
const Electronics = () => {
  const electronics = [
    {
      id: 301,
      name: "Amazon Echo (4th Gen)",
      image: "https://storage.googleapis.com/management_324/electronics/amazon%20echo.avif",
      quantity: "1 unit",
      deliveryTime: "10-20 minutes",
      price: 7999,
      specialTag: "Smart Assistant",
      rating: 4.7
    },
    {
      id: 302,
      name: "Ambrane Wired Earphones",
      image: "https://storage.googleapis.com/management_324/electronics/ambrane%20wirephone.avif",
      quantity: "1 pair",
      deliveryTime: "15-25 minutes",
      price: 499,
      specialTag: "Budget Audio",
      rating: 4.2
    },
    {
      id: 303,
      name: "boAt BassHeads 100",
      image: "https://storage.googleapis.com/management_324/electronics/boat%20basshead.avif",
      quantity: "1 pair",
      deliveryTime: "20-30 minutes",
      price: 599,
      specialTag: "Deep Bass",
      rating: 4.5
    }
  ]

  const crazyDeals = [
    {
      id: 304,
      name: "Portronics Wireless Mouse",
      image: "https://storage.googleapis.com/management_324/electronics/portronics%20mouse.avif",
      quantity: "1 unit",
      deliveryTime: "10-20 minutes",
      price: 699,
      specialTag: "Ergonomic Design",
      rating: 4.3
    },
    {
      id: 305,
      name: "TP-Link USB Wi-Fi Adapter",
      image: "https://storage.googleapis.com/management_324/electronics/tp%20link%20usb.avif",
      quantity: "1 unit",
      deliveryTime: "15-25 minutes",
      price: 899,
      specialTag: "High-Speed Connectivity",
      rating: 4.4
    },
    {
      id: 306,
      name: "SanDisk 32GB Pen Drive",
      image: "https://storage.googleapis.com/management_324/electronics/sandisk.avif",
      quantity: "1 unit",
      deliveryTime: "20-30 minutes",
      price: 499,
      specialTag: "Portable Storage",
      rating: 4.6
    }
  ]


  return (
    <View>

      <ScrollView>
        <ReuseProductView data={electronics} heading1='Top Deals' slice1={0} slice2={3} />


        <ReuseProductView data={crazyDeals} heading1='For a Productive WorkSpace' slice1={0} slice2={3} />


        <ReuseProductView data={brush_data} heading1='Switch to effortless brushing' slice1={0} slice2={3} />


        <ReuseProductView data={premium_iphone} heading1='Premiun finds for you' slice1={0} slice2={3} />


        <ReuseProductView data={power_bank} heading1='Never run out of battery' slice1={0} slice2={6} />

        <WithbackgroundView data={electronics} slice1={0} slice2={3} heading1={'Top Deals'} bgUrl='https://pub-static.fotor.com/assets/bg/bf9a415f-b758-4c0d-a820-334370772ec3.jpg' />

        <ReuseProductView data={power_bank} heading1='Blend it your way' slice1={0} slice2={6} />
        <WithbackgroundView data={electronics} slice1={0} slice2={3} heading1={'Trending Near you'} bgUrl='https://img.freepik.com/free-vector/purple-watercolour-background-corners_78370-1873.jpg?semt=ais_hybrid&w=740' />

        <WithbackgroundView data={electronics} slice1={0} slice2={3} heading1={'New at Your Store'} bgUrl='https://t4.ftcdn.net/jpg/02/18/33/91/360_F_218339121_ccjmORrhzwbWU8faKS3AR93OUAplHU2j.jpg' />
        <ReuseProductView data={trimmers} heading1='Awesom
        e Trimmers' slice1={0} slice2={6} />
         <ReuseProductView data={mixers} heading1='Awesome Trimmers' slice1={0} slice2={6} />




        <ReuseProductView data={audio_accessories} heading1='Best Audio acccesories for you' slice1={0} slice2={6} />

      </ScrollView>

    </View>
  )
}

export default Electronics

const styles = StyleSheet.create({})