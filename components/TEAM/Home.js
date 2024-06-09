import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Pressable, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Home = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/wal1.png')}
      />
      <View style={styles.container2}>
      <Pressable style={({pressed}) => [
              styles.button1,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => {navigation.navigate('Vehicle Data');}}>
        <Text style={styles.textbutton1}> Vehicle Data </Text> 

      </Pressable>
     <Pressable style={({pressed}) => [
              styles.button2,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => {navigation.navigate('Employee Data');}}>
        <Text style={styles.textbutton2}> Employee Data </Text> 
      </Pressable>
       <Pressable style={({pressed}) => [
              styles.button3,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => {navigation.navigate('Orders');}}>
        <Text style={styles.textbutton3}> Orders </Text> 
      </Pressable>
      </View>
    </View>
  )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 0,
    flex: 1,
    height:'50%',
    backgroundColor: "#FFFFFF",
  },
  logo:{
    resizeMode: 'center',
    height: "120%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    marginTop: -185,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:'60%',
    display:'flex',
    flex: 1,
    backgroundColor: "#000000",
    marginTop:-190,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
   button1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor:'#BF9000',
    marginTop:10,
    marginBottom:10,
  },
  textbutton1:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  button2:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 15,
    elevation: 3,
    backgroundColor:'#BF9000',
    marginTop:10,
    marginBottom:10,
  },
  textbutton2:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  button3:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 103,
    borderRadius: 15,
    elevation: 3,
    backgroundColor:'#BF9000',
    marginTop:10,
  },
  textbutton3:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

});