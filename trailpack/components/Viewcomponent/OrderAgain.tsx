import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'


interface Props {
  category: string
};
type Product = {
  id: number;
  name: string;
  image: string;
  quantity: string;
  rating: number;
  deliveryTime: string;
  price: number;
  recipe?: string;
};



export default function OrderAgain({ category }: Props) {

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
    <View>

      <Text>{category}</Text>

      <FlatList
        data={products}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className='flex flex-row gap-5 w-[130px]  p-1' key={item.id}>
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
  );
};

const styles = StyleSheet.create({});



