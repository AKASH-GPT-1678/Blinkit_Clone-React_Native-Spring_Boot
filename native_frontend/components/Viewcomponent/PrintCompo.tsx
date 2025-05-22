import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
///security
export default function PrintCompo() {
  return (
    <View className='bg-amber-50'>
      <View className='flex flex-col justify-center items-center'>
        <Text className='text-5xl font-bold p-2 mt-5'>Print Store</Text>
        <Text>Blinkit ensures secure prints at every stage</Text>
      </View>

      <View className='flex flex-row m-5 border-1  h-[150px] bg-white rounded-xl'>
       <View className='flex flex-col w-[60%] m-2 mt-5'>
        <Text style={{fontSize:20 , fontWeight:'bold'}}>Documents</Text>
        <Text>We ra ebringing the magic of instant Document delivery to you super soon</Text>
        </View>
        <View>
            <Image source={require("../../assets/print.webp")}  style={{width : 120 , height : 80 , marginTop : 5}}/>

        </View>
 
      </View>


      <View className='flex flex-col'>
        <View className='flex flex-row items-center justify-center gap-24'>
            <View >
                <MaterialIcons name="security" size={50} color="#eac013" />
                
            </View>
            <View>
                <MaterialCommunityIcons name="cellphone-charging" size={50} color="#eac013" />
            </View>
              <View>
                <Entypo name="arrow-bold-down" size={50} color="#eac013"  />
            </View>
          
          


        </View>a
        <View className='flex flex-row items-center justify-center gap-10 mt-2  ml-2
        '>

            <View className='flex flex-col items-center justify-center'>
           <Text className='text-lg font-bold'>Safe & Secure</Text>
           <Text>Data is deleted </Text>
           <Text>after printing</Text>
           </View>
               <View className='flex flex-col items-center justify-center'>
           <Text className='text-lg font-bold'>Fast Delivery</Text>
           <Text>Get Printouts </Text>
           <Text>in Minutes</Text>
           </View>
               <View className='flex flex-col items-center justify-center'>
           <Text className='text-lg font-bold'>Lowest Prices</Text>
           <Text>Printing Started</Text>
           <Text>at $3 </Text>
           </View>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})