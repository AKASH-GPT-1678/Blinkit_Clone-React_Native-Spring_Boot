import { StyleSheet, Text, View  , TouchableOpacity} from 'react-native'
import React from 'react'
import { SignIn } from "@clerk/clerk-react";
import { SignInButton } from '@clerk/clerk-react';
const User = () => {
  return (
    <View>
      <SignInButton mode="modal" />
   



     

    </View>
  )
}

export default User

const styles = StyleSheet.create({})