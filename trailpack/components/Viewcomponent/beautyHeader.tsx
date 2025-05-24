import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { headbeauty } from '../tempdat'
const newImages = [
  {
    image: "https://storage.googleapis.com/management_324/skincare/beauty/wishcare.jpg"
  },
  {
    image: "https://storage.googleapis.com/management_324/skincare/beauty/papa%20nails.webp"
  },
  {
    image: "https://storage.googleapis.com/management_324/skincare/beauty/loral%20paris.webp"
  }
];


const BeautyHeader = () => {
  const totalItems = newImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {


    const scrollFlatlist = () => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: currentIndex,
          animated: true,
        });


        setCurrentIndex((prevIndex) =>
          prevIndex + 1 < totalItems ? prevIndex + 1 : 0
        );
      }
    };

    const intervalId = setInterval(scrollFlatlist, 1000); // scroll every 1 second

    return () => clearInterval(intervalId);
  }, [currentIndex, headbeauty.length]);



  return (
    <View>


      <FlatList
        data={headbeauty}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: '#f0f0f0',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10
        }}
        renderItem={({ item, index }) => (
          <View
            key={index}
            className="inline-flex p-1 rounded-2xl border-2 border-blue-500 bg-pink-100"
            style={{ marginRight: 10 }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 100, margin: 10 }}
            />
          </View>
        )}
      />
      <FlatList
        data={newImages}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          // paddingVertical: 5,
          backgroundColor: '#f0f0f0',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10
        }}
        renderItem={({ item, index }) => (

          <Image
            source={{ uri: item.image }}
            style={{ width: 200, height: 200, margin: 10, borderRadius: 20 }}
            key={index}
          />
          // </View>
        )}
      />



    </View>
  )

}
export default BeautyHeader

const styles = StyleSheet.create({})