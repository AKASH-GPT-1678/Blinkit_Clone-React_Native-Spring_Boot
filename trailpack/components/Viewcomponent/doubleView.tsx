import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'


type data = {
    image: string
    name: string
    solution: string

}
interface Props {
    data: data[]


}
  export const problemImages = [
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/acne.jpg",
            name: "Acne",
            solution: "Use salicylic acid cleansers and niacinamide serums to reduce breakouts."
        },
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/dandruff.jpg",
            name: "Dandruff",
            solution: "Opt for anti-dandruff shampoos with zinc pyrithione or ketoconazole."
        },
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/frizzy.jpg",
            name: "Frizzy Hair",
            solution: "Tame it with leave-in conditioners and silicone-based serums."
        },
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/hairfall.webp",
            name: "Hair Fall",
            solution: "Strengthen with biotin-rich oils and caffeine-infused hair tonics."
        },
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/pigmentation.jpg",
            name: "Pigmentation",
            solution: "Target with vitamin C serums and gentle chemical exfoliants."
        },
        {
            image: "https://storage.googleapis.com/management_324/skincare/problems/sun%20protection.avif",
            name: "Sun Protection",
            solution: "Daily use of SPF 50 broad-spectrum sunscreens is essential."
        }
    ];
const DoubleView = ({ data }: Props) => {
  

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                // horizontal={true}
                contentContainerStyle={
                    {
                       overflowX : 'scroll'
                    }
                }
                
                renderItem={({ item }) =>

                    <View style={{flex : 1,  flexDirection: 'row', width : 350 }}>
                        <Image source={{ uri: item.image }} width={70} height={100} />

                        <View className='flex flex-col'>
                            <Text>{item.name}</Text>
                            <Text>{item.solution}</Text>
                        </View>

                    </View>
                }
            />

        </View>
    )
}

export default DoubleView

const styles = StyleSheet.create({})