import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { activeBottomTab, useAppSelector } from '@/app/redux/slice';
import { useAppDispatch } from '@/app/redux/slice';
useAppSelector
export default function BottomIcons() {
    const [active, setActive] = React.useState("home");
    const dispatch = useAppDispatch();
    const activetab = useAppSelector((state) => state.usersave.bottomTab);

    useEffect(() => {
        dispatch(activeBottomTab(active));
        
    }, [active])

    return (
      
<View className="flex-row w-full justify-between items-center px-4 border-2 border-black">
  <TouchableOpacity
    className={`flex flex-col p-5 ${active === 'home' ? 'border-t-4 border-black' : ''}`}
    onPress={() => setActive('home')}
  >
    <Feather name="home" size={40} color="black" />
    <Text>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    className={`flex flex-col p-5 ${active === 'Order Again' ? 'border-t-4 border-black' : ''}`}
    onPress={() => setActive('Order Again')}
  >
    <Feather name="shopping-bag" size={40} color="black" />
    <Text>ReOrder</Text>
  </TouchableOpacity>

  <TouchableOpacity
    className={`flex flex-col p-5 ${active === 'categories' ? 'border-t-4 border-black' : ''}`}
    onPress={() => setActive('categories')}
  >
    <FontAwesome name="delicious" size={40} color="black" />
    <Text>Category</Text>
  </TouchableOpacity>

  <TouchableOpacity
    className={`flex flex-col p-5 ${active === 'print' ? 'border-t-4 border-black' : ''}`}
    onPress={() => setActive('print')}
  >
    <AntDesign name="printer" size={40} color="black" />
    <Text>Print</Text>
  </TouchableOpacity>

  <TouchableOpacity
    className={`flex flex-col p-5 ${active === 'profile' ? 'border-t-4 border-black' : ''}`}
    onPress={() => setActive('profile')}
  >
    <FontAwesome5 name="user-alt" size={40} color="black" />
    <Text>Profile</Text>
  </TouchableOpacity>
</View>

       
    )
}

const styles = StyleSheet.create({})