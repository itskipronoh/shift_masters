import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,Pressable, TouchableOpacity } from 'react-native';
export default function SignInAs({navigation}) {
  const [signInType, setSignInType] = useState('');

  const handleSignIn = (type) => {
    setSignInType(type);
    // Perform sign in logic based on the selected type
    // For demonstration purposes, we'll just console log the selected type
    console.log('Sign in as:', type);
  };
  //gohar here
  //gohar qqeqw
  //gohar 1122
  //asfa

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/HOUSE-MOVERS-LOGO.png')}
      />
      <Image style={styles.pic1} source={require('../assets/Pic-1.png')} />
      <Pressable
        style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]}
        onPress={() => {navigation.replace('Customer Sign In');}}>
        <Text style={styles.buttonText}>Sign In as Customer</Text>
      </Pressable>

      <Pressable
        style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]}
        onPress={() => {navigation.replace('Team Sign In');}}>
        <Text style={styles.buttonText}>Sign In as Teams</Text>
      </Pressable>

      <Pressable
       style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]}
        onPress={() => {navigation.replace('Employee Sign In');}}>
        <Text style={styles.buttonText}>Sign In as Employee</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo:{
    resizeMode: 'center',
    height: 177,
    width: 250,
    marginTop: -35,
  },
  pic1:{
    marginTop: -25,
    padding: 0,
    width: 364,
    height: 309,
  },
 button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: 300,
    padding: 10,
    backgroundColor:'#BF9000',
    marginTop:15,
  },
  buttonText: {
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});