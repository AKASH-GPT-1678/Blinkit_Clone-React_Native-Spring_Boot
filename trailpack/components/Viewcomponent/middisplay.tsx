import { FlatList, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'


type data = {
    imageUrl: string
    title: string
    link?: string
}
export interface Crops {
    heading: string
    data: data[]
    bgColor?: string
}

export default function MidDisplay({ heading, data, bgColor }: Crops) {
    return (
        <View>
            <View className='flex flex-row'>
                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}  // ✅ safer and correct
                    renderItem={({ item , index }) => (

                        <View className='flex flex-row gap-10' key={index}>
                              <View>
                        <View className={`flex flex-col m-2 ${bgColor} backdrop-brightness-200 items-center justify-center  rounded-2xl`} style={{width: 120 , height : 100}}>
                         <Image source={{uri : item.imageUrl}} style={{width:70, height:60}} />
                            
                          
                                
                            </View>
                               <Text className='text-sm w-[100px] ml-5'>{item.title}</Text>
                         </View>
                      
                         </View>
                    )}
                >
                

                </FlatList>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})