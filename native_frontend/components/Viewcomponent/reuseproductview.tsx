import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, FlatList, Image } from 'react-native'

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
    slice: number
    heading1: string
    heading2?: string

    data: Item[]
}
export default function ReuseProductView({ data: products, slice, heading1, heading2 }: Props) {

    const product = products.slice(0, slice);
    return (
        <View>
            <View className='flex flex-col'>
                <Text className='text-2xl font-bold p-2'>{heading1}</Text>
                <Text className='text-lg font-bold p-2'>{heading2}</Text>
            </View>

            <FlatList
                data={product}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View className='flex flex-row gap-5 w-[130px]  p-1' key={index}>
                        <View className='flex flex-col w-[120px] h-[200px] bg-orange-100 mx-2 mt-4 ml-2 '>
                            <Image
                                source={{ uri: item.image }}
                                className='h-[100px] w-[120px] mt-1 mb-1 rounded-xl relative'
                                resizeMode='cover'
                            />
                            <Pressable className='text-sm font-semibold p-1 w-[50%] absolute top-24 right-0 border-2 border-green-600'>
                                <Text className='font-extrabold text-green-600 ml-3'>ADD</Text>
                            </Pressable>

                            <View className='flex flex-col text-sm ml-2'>
                                <Text className='text-sm'>{item.quantity}</Text>
                                <Text className='text-sm'>{item.name}</Text>
                                <Text className='text-sm'>{item.deliveryTime}</Text>
                                <Text className='text-sm'>{item.price}</Text>
                            </View>
                        </View>
                    </View>

                )}

                ListFooterComponent={() => <View style={{ height: 100 }} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({})