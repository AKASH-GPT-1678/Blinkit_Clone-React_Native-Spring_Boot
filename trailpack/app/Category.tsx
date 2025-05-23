import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { setUserData, useAppDispatch, useAppSelector } from '@/app/redux/slice';
import { setactiveCategory } from '@/app/redux/slice';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Redirect, router } from 'expo-router';
// ✅ Use Expo Vector Icons
import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
enum names {
  summer = 'summer',
  electronics = 'electronics',
  beauty = 'beauty',
  decor = 'decor',
  kids = 'kids',
  gifts = 'gifts',
  premium = 'premium',



}
export default function Category() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.usersave.activeCategory);
  const user = useAppSelector((state) => state.usersave.name);

  const handleClick = (category: names) => {
    dispatch(setactiveCategory(category));
    router.push(`/(maps)/${category}`);
  };

  return (
    <Provider store={store}>
      <View>



        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 25,
          overflowX: 'scroll',
          cursor: 'pointer',
        }

        }>
          <TouchableOpacity
            style={{ padding: 5, justifyContent: 'center' }}
            onPress={() => dispatch(setactiveCategory('All'))}
          >
            <Entypo name="shopping-basket" size={40} color="black" style={{ cursor: 'pointer' }} />
            <Text>All</Text>
          </TouchableOpacity>

          <Pressable onPress={() => handleClick(names.summer)}>
            <Ionicons name="partly-sunny" size={40} color="black" />
            <Text>Summer</Text>
          </Pressable>

          <TouchableOpacity onPress={() => handleClick(names.electronics)}>
            <MaterialIcons name="electric-bolt" size={40} color="black" />
            <Text>Electric</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleClick(names.beauty)}>
            <Entypo name="sweden" size={40} color="black" />
            <Text>Beauty</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>handleClick(names.decor)}>
            <MaterialCommunityIcons name="lamp" size={40} color="black" />
            <Text>Decor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClick(names.kids)}>
            <MaterialIcons name="child-care" size={40} color="black" />
            <Text>Kids</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleClick(names.gifts)}>
            <AntDesign name="gift" size={40} color="black" />
            <Text>Gift</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleClick(names.premium)}>
            <FontAwesome name="diamond" size={40} color="black" />
            <Text>Premium</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </Provider>
  );
}

const styles = StyleSheet.create({});
