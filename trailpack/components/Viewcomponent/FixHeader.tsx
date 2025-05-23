import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { router } from 'expo-router';
import { setCatoulogueMode } from '@/app/redux/slice';
import { useAppDispatch , useAppSelector } from '@/app/redux/slice';
import { ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Category from '@/app/Category';
import { TextInput } from 'react-native';
export default function FixHeader() {

    const dispatch = useAppDispatch();
    const image = {uri : 'https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=612x612&w=0&k=20&c=bqPHaI4d3ghIbLIwtbTDPxV8QQ2pIN2mbCfzLb7gucQ='}
  return (<>

  <ImageBackground  source={image}>
    
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
                        <FontAwesome5
                          name="wallet"
                          size={30}
                          color="#c9cb33"
                          style={{ rounded: 10 }}
    
                        />
                      </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, backgroundColor: 'gray', padding: 10, borderRadius: 50 }}>
                      <Pressable onPress={() => router.push('/testing')}>
                        <FontAwesome5
                          name="user-alt"
                          size={30}
                          color="black"
    
                        />
                      </Pressable>
                    </View>
    
    
    
                  </View>
    
    
    
                </View>
              </View>
           
              <View>
                <TextInput placeholder='Search' style={{ borderWidth: 2, margin: 5 }} />
    
              </View>
    
              <Category />
              </ImageBackground>
              </>
    
   
  )
}


const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'column',
  },
  subtopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
   
  }
})