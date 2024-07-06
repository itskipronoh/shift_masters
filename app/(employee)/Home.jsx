import { router } from 'expo-router';
import { Text, View, StyleSheet, Image, Pressable, TextInput} from 'react-native';
const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/wal1.png')}
      />
      <View style={styles.container2}>
      <Pressable style={({pressed}) => [
              styles.button3,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => {router.push('LabourOrders');}}>
        <Text style={styles.textbutton3}> Orders Details for Labour </Text> 
      </Pressable>
       <Pressable style={({pressed}) => [
              styles.button4,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={() => {router.push('(driver)/DriverOrders');}}>
        <Text style={styles.textbutton4}> Orders Details for Driver </Text> 
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
    paddingHorizontal: 50,
    borderRadius: 12,
    backgroundColor:'#BF9000',
  },
  textbutton3:{
    fontSize: 16,
    //lineHeight: 21,
    fontWeight: 'bold',
    //letterSpacing: 0.25,
    color: 'black',
  },
  button4:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 53,
    borderRadius: 12,
    backgroundColor:'#BF9000',
    marginTop:30,
  },
  textbutton4:{
    fontSize: 16,
    //lineHeight: 21,
    fontWeight: 'bold',
    //letterSpacing: 0.25,
    color: 'black',
  },

});