import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MyDrinks } from '@/assets/drinks'
import { Image } from 'react-native'
import { IndividualDrinks } from '@/assets/drinks'
import { Button } from 'react-native'
import { setCatoulogueMode } from '@/app/redux/slice'
import { useAppDispatch } from '@/app/redux/slice'
export default function Catoulogue() {
    const dispatch = useAppDispatch();
    return (

        <>
            <Stack.Screen options={{ headerShown: false }} />

            <SafeAreaView>
                <View >

                    <View className='h-full w-full'>

                        <TouchableOpacity onPress={() => dispatch(setCatoulogueMode())}>
                            <View style={{ backgroundColor: '#f9e79f', height: 120 }}>
                                {/* Your content */}
                            </View>
                        </TouchableOpacity>


                        <View style={{ backgroundColor: 'white', height: "100%" }}>
                            <View className='fixed border-2 border-black rounded-t-xl'>
                                <Text className='text-2xl font-bold p-2 mb-2'>Drinks Juices & More</Text>
                            </View>

                            <View className='flex flex-row h-full w-full  '>
                                <View className='w-[90px]  h-full flex-col gap-5 p-4'>
                                    {MyDrinks.map((item, index) => (
                                        <View key={index}>
                                            <View className={`${item.bgColor} flex-row justify-center items-center `} style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: item.bgColor }}>

                                                <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 10 }} />
                                            </View>

                                            <Text className='text-sm font-bold'>{item.name}</Text>


                                        </View>


                                    ))}

                                </View>
                                <View className='w-full  h-full'>
                                    <View className='flex flex-row flex-wrap gap-2 items-center p-2 relative'>


                                        {IndividualDrinks.map((item, index) => (
                                            <View key={index} style={{ width: 150, height: 280, borderRadius: 10, backgroundColor: 'white' }}>
                                                <View className='bg-gray-100 flex items-center' >

                                                    <Image source={{ uri: item.image }} style={{ width: 130, height: 170, borderRadius: 10, marginTop: 20 }} />

                                                    <Pressable className='absolute top-[80%] z-50 right-1 h-[40px] w-[80px] border-4 border-green-500 bg-white p-1 rounded-xl flex items-center justify-center'>
                                                        <Text className=' font-bold flex justify-center align-middle text-xl text-green-500'>ADD</Text>

                                                    </Pressable>


                                                </View>

                                                <View className='flex flex-col gap-1 p-2'>
                                                    <View className='flex flex-row gap-1 xs:text-xs-tiny '>
                                                        <Text className='bg-gray-100'>{item.ml}</Text>
                                                        <Text className='bg-gray-100'>{item.name}</Text>

                                                    </View>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                                        {item.name}
                                                    </Text>
                                                    <Text className='font-bold text-xl'>
                                                        ${item.price}
                                                    </Text>



                                                </View>


                                            </View>
                                        ))}
                                    </View>




                                </View>
                            </View>



                        </View>


                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({})