import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, FlatList, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Ratings from './ratings'
export type Item = {
    id: number;
    name: string;
    image: string;
    quantity: string;
    rating: number;
    deliveryTime: string;
    price: number;
    specialTag: string
}


interface Props {
    slice1 :number
    slice2: number
    heading1: string
    heading2?: string
    bgUrl ?: string

    data: Item[]
}
export default function WithbackgroundView({ data: products,slice1 ,slice2, heading1 , bgUrl }: Props) {

    const product = products.slice(slice1, slice2);
    return (
        <View className='mt-5'>
                     <ImageBackground
                        source={{ uri: bgUrl }}>
            <View className='flex flex-col '>
                <Text className='text-3xl font-bold ml-3 mt-3
                 '>{heading1}</Text>
          
            </View>

            <FlatList
                data={product}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (

           
                    <View className='flex flex-row gap-10 w-[135px] mt-5  p-1 mb-5' key={index}>
                        <View className='flex flex-col w-[120px]  h-[230px] bg-white mx-2  ml-2 '>
                            <Image
                                source={{ uri: item.image }}
                                className='h-[100px] w-[120px] mt-1 mb-1 rounded-xl relative '
                                resizeMode='cover'
                            />
                            <Pressable className='text-sm font-semibold p-1 w-[50%]  absolute top-24 right-2 border-2 border-green-600'>
                                <Text className='font-extrabold text-green-600 ml-3 '>ADD</Text>
                            </Pressable>

                            <View className='flex flex-col text-sm ml-2 mt-3'>
                                <Text className='text-xs'>{item.quantity}</Text>
                                <Text className='text-sm font-bold'>{item.name}</Text>
                                <Text className='text-sm'>{item.deliveryTime}</Text>
                                <Text className='text-sm'>
                                    <Ratings rating={item.rating} /></Text>
                                <Text className='text-sm font-semibold'>र {item.price}</Text>
                            </View>
                            <Text className='bg-green-100 text-xs w-full absolute bottom-1  text-green-700'> See More Like this </Text>
                        </View>
                    </View>
                 

                )}

            ListFooterComponent={() =>
          
                <View className='h-full  bg-gray-200 p-3 mx-4'>
                    <Text className='ml-36 text-blue-950 font-semibold'>See all products ▶</Text>
                </View>
              
            }
            />
               </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({})