import { StyleSheet, Text, View , Button , TouchableOpacity, SafeAreaView } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import React from 'react'

import { Redirect, router } from 'expo-router';
// import data from '@/components/Viewcomponent/wallet.data';
import { data } from '@/components/Viewcomponent/wallet.data';
import WalletRender from '@/components/walletrender';
import { setactiveCategory, setUserData } from './redux/slice';
// import asyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-expect-error
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Stack } from 'expo-router';
import { useAppDispatch , useAppSelector, UserState } from './redux/slice';

const Wallet = () => {
 
    const arrowSize = useSharedValue(30);
    const dispathch = useAppDispatch();
    const user = useAppSelector((state => state.usersave.activeCategory));

    const settingSize = 35;


    return (
        <>
   
       <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaView>
        <View>
          

            <View style={{ backgroundColor: 'none', height: 100 }}>
               <View style={styles.mapping}>
              
                    <Icon name="arrow-back" size={35} color="black" style={styles.iconStyle} onPress={() => router.back()} />
                    <Icon2 name="setting" size={settingSize} color="black" style={styles.iconStyle} />
              
                    
                    </View>
                 
                   
               
            </View>
                <View style={{ alignItems: 'center'  , backgroundColor : '#f9e79f' , marginHorizontal: 15}}>

                       <View style={{ alignItems: 'center'  , flexDirection:'column'}}>
                        <Icon name="wallet" size={90} color="black" />
                        <Text  style={{ fontSize: 35, fontWeight: 'bold' }}>blinkit</Text>
                        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>MONEY</Text>
                    
                       </View>
                    </View>
             








                
                    <FlatList
                    data={data}
                    renderItem={({ item }) => React.createElement(WalletRender, { item })}
                    keyExtractor={(item) => item.id}

                  
                    
                    > 

                     </FlatList>


                     <TouchableOpacity  style={{ alignItems: 'center' , margin:10 , backgroundColor : '#0cb364' , height:50, justifyContent :'center' }}>
                          <Button
                     title='Add Money'
                     color={'#0cb364'}
                   

                     
                     >

                     </Button>


                     </TouchableOpacity>

                     <TouchableOpacity onPress={()=> dispathch(setactiveCategory('Arhges'))}>
                        <Text>Click</Text>

                     </TouchableOpacity>
                     <Text>{user}</Text>
                     <Text></Text>


                   
                  

        </View>
      
      
        </SafeAreaView>
       
         </>
    )
}

export default Wallet

const styles = StyleSheet.create({
    mapping: {
        flex: 1,
        // position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#f9e79f',

        // position : 'absolute'
    },
    iconStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#eaeae5',
        borderRadius: 50,
        padding: 8
    }

})