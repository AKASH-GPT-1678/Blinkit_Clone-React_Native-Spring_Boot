import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-expect-error
import Icon2 from 'react-native-vector-icons/AntDesign'
export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
};

const WalletRender : React.FC<{ item: Feature }>= ({item}) => {
    return (
 <View style={{ height: 100, borderWidth: 1, marginHorizontal: 15, marginVertical: 5 }}>
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Icon
        name={item.icon}
        size={50}
        color="black"
        style={{
          backgroundColor: item.bgColor,
          width: 70,
          height: 70,
          padding: 10
        }}
      />
      <View style={{ flexDirection: 'column', padding: 5 , width: 300  }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' , }}>{item.title}</Text>
        <Text style={{ fontSize: 14 , padding: 5 }}>{item.description}</Text>
      </View>
    </View>
  </View>
    )
}

export default WalletRender

const styles = StyleSheet.create({})