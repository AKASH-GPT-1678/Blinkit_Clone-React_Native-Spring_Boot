import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { Mydata } from '@/assets/image';
import { Image } from 'react-native';
export default function AllProducts() {
  return (
    <View className='flex-row flex-wrap  gap-3 mt-4 ml-4
   '>

      {/* <View className='w-[110px] h-[170px]  flex-row flex-wrap border-2 border-black ml-5
    '>
  
    

   
     

    </View> */}
      {/* 
    <FlatList className='w-[110px] h-[170px]  flex-row flex-wrap border-2 border-black ml-5' numColumns={2} 
    data={Mydata} keyExtractor={(item , index) => index.toString()} 
    renderItem={({ item }) => <Image source={[{ uri: item }]} style={{ width: 50, height: 50 }} />}> 

    </FlatList> */}
      <View className='w-[120px] h-[170px]  flex-row flex-wrap  gap-1 align-items-center bg-gray-300 justify-center relative rounded-xl '>
        {Mydata.map((item, index) => (
          <View className='bg-white p-1 ml-0.5 rounded-xl flex items-center mt-2
' style={{ width: 50, height: 50 }}>
            <Image key={index} source={{ uri: item }} style={{ width: 40, height: 40, borderRadius: 10 }} />
          </View>



        ))}
        <View className='absolute top-[105px] flex items-center justify-center w-[70px] h-[14px] rounded-2xl border-1 bg-gray-300'>
          <Text className='text-xs'>Fruits</Text>
       
        </View>
           <Text className='mt-2 font-bold'>Fruits and Juices</Text>
      </View>
        <View className='w-[120px] h-[170px]  flex-row flex-wrap  gap-1 align-items-center bg-gray-300 justify-center relative rounded-xl '>
        {Mydata.map((item, index) => (
          <View className='bg-white p-1 ml-0.5 rounded-xl flex items-center mt-2
' style={{ width: 50, height: 50 }}>
            <Image key={index} source={{ uri: item }} style={{ width: 40, height: 40, borderRadius: 10 }} />
          </View>



        ))}
        <View className='absolute top-[105px] flex items-center justify-center w-[70px] h-[14px] rounded-2xl border-1 bg-gray-300'>
          <Text className='text-xs'>Fruits</Text>
       
        </View>
           <Text className='mt-2 font-bold'>Fruits and Juices</Text>
      </View>
        <View className='w-[120px] h-[170px]  flex-row flex-wrap  gap-1 align-items-center bg-gray-300 justify-center relative rounded-xl '>
        {Mydata.map((item, index) => (
          <View className='bg-white p-1 ml-0.5 rounded-xl flex items-center mt-2
' style={{ width: 50, height: 50 }}>
            <Image key={index} source={{ uri: item }} style={{ width: 40, height: 40, borderRadius: 10 }} />
          </View>



        ))}
        <View className='absolute top-[105px] flex items-center justify-center w-[70px] h-[14px] rounded-2xl border-1 bg-gray-300'>
          <Text className='text-xs'>Fruits</Text>
       
        </View>
           <Text className='mt-2 font-bold'>Fruits and Juices</Text>
      </View>

    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    flexDirection: 'column',
    flex: 1
  },
  text: {
    fontSize: 16,

    margin: 50
  },
});
