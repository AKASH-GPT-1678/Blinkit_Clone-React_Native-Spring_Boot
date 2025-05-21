import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'

import { SignedOut } from '@clerk/clerk-react'
import { Button } from '@react-navigation/elements';
import { SignOutButton } from './signout'
const Login = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });


  const onPress = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
     
    } catch (err) {
      console.error("OAuth error:", err);
    }
  };

  const SignnOut  = async () =>{
    const signout = await SignedOut;
    

  }

  

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

     <SignOutButton/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})