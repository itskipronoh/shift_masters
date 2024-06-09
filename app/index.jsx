import { router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
export default function GetStarted({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/HOUSE-MOVERS-LOGO.png')}
      />
      <Image style={styles.pic1} source={require('../assets/Pic-1.png')} />
      <Text style={styles.text1}> HOUSE MOVERS </Text>
      <Text style={styles.text2}>We provide you they<Text style={styles.text3}>Best & Fast </Text>moving services </Text>
      <Pressable style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => router.push('/(auth)')}>
        <Text style={styles.textbutton}> GET STARTED </Text> 
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  pic1: {
    marginTop: -25,
    padding: 0,
    width: 364,
    height: 309,
  },
  text1: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF9000',
    textAlign: 'center',
  },
  text2: {
    textAlign: 'center',
    fontSize: 12,
  },
  text3: {
    fontWeight: 'bold',
    color: '#BF9000',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    padding: 10,
    backgroundColor:'#BF9000',
    marginTop:10,
  },
  textbutton:{
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});
