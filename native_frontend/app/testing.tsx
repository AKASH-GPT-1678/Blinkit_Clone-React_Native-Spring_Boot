import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Catoulogue from '@/components/Viewcomponent/Catoulogue'
import BottomIcons from '@/components/Viewcomponent/BottomIcons'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import CategoryMap from '@/components/Viewcomponent/CategoryMap'
const Testing = () => {
  const KeyUrl = 'https://storage.googleapis.com/management_324/MyImages/chilli.png';




  const items = [
    { id: 1, name: "Masala & Spices", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 2, name: "Sweets & Snacks", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 3, name: "Chilli & Peppers", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 4, name: "Frozen Foods", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 5, name: "Meat & Poultry", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 7, name: "All Items", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 8, name: "Atta & Flour", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" },
    { id: 9, name: "Dairy Products", image: "https://storage.googleapis.com/management_324/MyImages/chilli.png" }
  ];


  const items2 = [
    { id: 1, name: "Classic Salted Chips", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 2, name: "Spicy Potato Wafers", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 3, name: "Tangy Tomato Crisps", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 4, name: "Creamy Cheese Bites", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 5, name: "Herb & Garlic Fries", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 6, name: "Crunchy Snack Mix", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 7, name: "Sweet Chilli Twists", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 8, name: "Barbeque Potato Pop", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 9, name: "Classic Cola Drink", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" },
    { id: 10, name: "Lemon Soda Splash", image: "https://storage.googleapis.com/management_324/MyImages/potato.png" }
  ];







  return (
    <View>


      <BottomIcons />
      {/* 
      <ScrollView>
  
      <CategoryMap category='Grocery & Kitchens' data={items} slice={8} />
      <CategoryMap category='Snacks and Drinks' data={items2} slice={8} />
      <CategoryMap category='Household Essentials' data={items2} slice={8} />
      </ScrollView> */}
      <FlatList
        data={[{ key: 'Grocery & Kitchens', data: items }, { key: 'Snacks and Drinks', data: items2 }, { key: 'Household Essentials', data: items2 }]}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryMap category={item.key} data={item.data} slice={8} />
        )}
      />




    </View>
  )
}

export default Testing

const styles = StyleSheet.create({})