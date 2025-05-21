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




          <View style={styles.topHeader}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 2, marginRight: 2 }}>
              Blinkit in



            </Text>
            <Pressable onPress={()=>dispatch(setCatoulogueMode())}>
              <Text>Togglke</Text>

            </Pressable>
            <View style={styles.subtopHeader}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 2, marginRight: 2 }}>8 minutes</Text>
                <Text>Panchsheel Nagar , Thane West</Text>

              </View>

              <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', gap: 10, backgroundColor: 'gray', padding: 10, borderRadius: 50 }}>
                  <Pressable onPress={() => router.push('/wallet')}>
                    <Icon
                      name="wallet"
                      size={30}
                      color="#c9cb33"
                      style={{ rounded: 10 }}

                    />
                  </Pressable>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, backgroundColor: 'gray', padding: 10, borderRadius: 50 }}>
                  <Pressable onPress={() => router.push('/testing')}>
                    <Icon
                      name="user-alt"
                      size={30}
                      color="black"

                    />
                  </Pressable>
                </View>



              </View>



            </View>
          </View>
          {CatoulogueMode ? <View><Catoulogue /></View> : null}
          <View>
            <TextInput placeholder='Search' style={{ borderWidth: 2, margin: 5 }} />

          </View>

          <Category />




          <ScrollView>
            <AllProducts />
          </ScrollView>

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