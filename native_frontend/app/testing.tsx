import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Catoulogue from '@/components/Viewcomponent/Catoulogue'
import BottomIcons from '@/components/Viewcomponent/BottomIcons'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import OrderAgain from '@/components/Viewcomponent/OrderAgain'
import CategoryMap from '@/components/Viewcomponent/CategoryMap'
import PrintCompo from '@/components/Viewcomponent/PrintCompo'
import ReuseProductView from '@/components/Viewcomponent/reuseproductview'
import { Stack } from 'expo-router'
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
    const products = [
    { id: 1, name: "Amul Full Cream Milk", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "1 Litre", rating: 4.5, deliveryTime: "1 day", price: 110 },
    { id: 2, name: "Tata Salt Iodized", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "1 kg", rating: 4.7, deliveryTime: "2 days", price: 120 },
    { id: 3, name: "Aashirvaad Atta", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "5 kg", rating: 4.6, deliveryTime: "1 day", price: 240 },
    { id: 4, name: "MDH Chana Masala", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "100 g", rating: 4.4, deliveryTime: "1 day", price: 130 },
    { id: 5, name: "Kissan Tomato Ketchup", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "500 g", rating: 4.3, deliveryTime: "2 days", price: 150 },
    { id: 6, name: "Parle-G Biscuits Pack", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "800 g", rating: 4.8, deliveryTime: "1 day", price: 100 },
    { id: 7, name: "Fortune Soya Oil", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "1 Litre", rating: 4.5, deliveryTime: "1 day", price: 170 },
    { id: 8, name: "Maggi Instant Noodles", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "6 Pack", rating: 4.9, deliveryTime: "Same Day", price: 140 },
    { id: 9, name: "Haldiram's Bhujia", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "400 g", rating: 4.7, deliveryTime: "1 day", price: 180 },
    { id: 10, name: "Aloo (Potato)", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "2 kg", rating: 4.2, deliveryTime: "Same Day", price: 120, recipe: "Aloo Tikki, Aloo Paratha, Dum Aloo" },
    { id: 11, name: "Onion", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "2 kg", rating: 4.3, deliveryTime: "Same Day", price: 130 },
    { id: 12, name: "Mother Dairy Paneer", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "200 g", rating: 4.6, deliveryTime: "1 day", price: 170 },
    { id: 13, name: "Nestle Dahi (Curd)", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "400 g", rating: 4.4, deliveryTime: "1 day", price: 120 },
    { id: 14, name: "Catch Black Pepper", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "100 g", rating: 4.5, deliveryTime: "2 days", price: 160 },
    { id: 15, name: "Amul Butter", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "500 g", rating: 4.9, deliveryTime: "1 day", price: 240 },
    { id: 16, name: "Everest Garam Masala", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "100 g", rating: 4.6, deliveryTime: "2 days", price: 130 },
    { id: 17, name: "Tropicana Orange Juice", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "1 Litre", rating: 4.3, deliveryTime: "1 day", price: 150 },
    { id: 18, name: "Britannia Cheese Cubes", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "200 g", rating: 4.6, deliveryTime: "1 day", price: 180 },
    { id: 19, name: "Red Chilli Powder", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "200 g", rating: 4.2, deliveryTime: "2 days", price: 140 },
    { id: 20, name: "Tomato", image: "https://storage.googleapis.com/management_324/MyImages/potato.png", quantity: "1 kg", rating: 4.4, deliveryTime: "Same Day", price: 100, recipe: "Tomato Curry, Rasam, Tomato Chutney" }
  ];








  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View>


      {/* <BottomIcons />
      <OrderAgain category='Grocery & Kitchens' /> */}
      {/* <Catoulogue /> */}
      <CategoryMap data={items} slice={3} category='Grocery & Kitchens'/>
  







    </View>
    </>
  )
}

export default Testing

const styles = StyleSheet.create({})