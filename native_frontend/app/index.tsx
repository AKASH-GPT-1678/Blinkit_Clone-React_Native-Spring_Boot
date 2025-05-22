import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, router, Stack } from 'expo-router'
import { TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllProducts from '@/components/Viewcomponent/AllProducts';
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from '@/app/Category';
import store from './redux/store';
import { Mydata } from '@/assets/image';
import BottomIcons from '@/components/Viewcomponent/BottomIcons';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux'
import { setCatoulogueMode, useAppDispatch, useAppSelector } from './redux/slice';
import { Provider } from 'react-redux';
import Catoulogue from '@/components/Viewcomponent/Catoulogue';
import FixHeader from '@/components/Viewcomponent/FixHeader';
// import Category from '@/components/Category'
const Index = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state => state.usersave.activeCategory));
  const user = useAppSelector((state => state.usersave.name));
  const CatoulogueMode = useAppSelector((state => state.usersave.catoLogueMode));






  return (
    <>
      <Provider store={store}>

        <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaView className='relative h-full'>




             {CatoulogueMode ? <View><Catoulogue /></View> : null}





          <View className='absolute bottom-0'>
            <BottomIcons/>

          </View>


        </SafeAreaView>
      </Provider>

    </>

  )
}

export default Index

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'column',
  },
  subtopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2
  }
})