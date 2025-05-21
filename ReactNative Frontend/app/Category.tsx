import { StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollViewBase } from 'react-native'
import React, { use } from 'react'
import { setUserData, useAppDispatch, useAppSelector } from '@/app/redux/slice'
import { setactiveCategory } from '@/app/redux/slice';
import { Provider } from 'react-redux';
import store from './redux/store';
//@ts-ignore
import Icon from 'react-native-vector-icons/Entypo';
//@ts-ignore
import Icon1 from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Icon2 from 'react-native-vector-icons/MaterialIcons';
//@ts-ignore
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import Icon4 from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Icon5 from 'react-native-vector-icons/AntDesign';

export default function Category() {

    const dispatch = useAppDispatch();
    const selected = useAppSelector((state => state.usersave.activeCategory));
    const user = useAppSelector((state => state.usersave.name));

    return (

        <Provider store={store}>
        <View>

            <View>
                <Text>Category</Text>
                <Text>Category</Text>
            </View>

            <View style={{ flexDirection: 'row' , alignItems:'center',justifyContent : 'center' , gap : 30 , overflowX: 'scroll'}}>
          

                <TouchableOpacity style={{padding : 5 , justifyContent : 'center'}} onPress={() => dispatch(setactiveCategory('All'))}>

 
                    <Icon name="shopping-basket" size={40} color="black" />
                    <Text>All</Text>
          
                </TouchableOpacity>
          
                    <Pressable   onPress={() => dispatch(setactiveCategory('Summer'))}>
                    <Icon1 name="partly-sunny" size={40} color="black" />
                    <Text>Summer</Text>
                    </Pressable>
              
                <TouchableOpacity onPress={() => dispatch(setactiveCategory('Electric'))}>
                    <Icon2 name="electric-bolt" size={40} color="black" />
                    <Text>Electric</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(setactiveCategory('Beauty'))}>
                    <Icon name="sweden" size={40} color="black" />
                    <Text>Beauty</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(setactiveCategory('Decor'))}>
                    <Icon3 name="lamp" size={40} color="black" />
                    <Text>Decor</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => dispatch(setactiveCategory('Kids'))}>
                    <Icon2 name="child-care" size={40} color="black" />
                    <Text>Kids</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(setactiveCategory('Gift'))}>
                    <Icon5 name="gift" size={40} color="black" />
                    <Text>Gift</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(setactiveCategory('Premium'))}>
                    <Icon4 name="diamond" size={40} color="black" />
                    <Text>Premium</Text>
                </TouchableOpacity>
              
              

            </View>
          




        </View>
        </Provider>
    )
}

const styles = StyleSheet.create({})