import * as React from "react";
import { useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";

const Home = () => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/ff.png")} />
      <View style={styles.container2}>
        <View style={styles.heading}>
          <Text style={styles.textheading}>
            ORDER PLACED!!! {"\n"}
            {"\n"} Your OrderID is<Text style={styles.orderId}> 355KJL975</Text>{" "}
            {"\n"}
            {"\n"}{" "}
            <Text style={styles.message}>
              Team Owner or Driver will make contact with you shortly! Thanks!!!
            </Text>
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.button1,
            pressed && { opacity: 1.8, backgroundColor: "#987200" },
          ]}
        >
          <Text style={styles.textbutton1}> Contact Team Owner </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button2,
            pressed && { opacity: 1.8, backgroundColor: "#987200" },
          ]}
          onPress={() => {
            router.push("VehicleData");
          }}
        >
          <Text style={styles.textbutton2}> Contact Driver </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button3,
            pressed && { opacity: 1.8, backgroundColor: "#987200" },
          ]}
          onPress={() => {
            router.push("Home");
          }}
        >
          <Text style={styles.textbutton3}> Return To Home Page </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    //justifyContent: 'center',
    padding: 0,
    flex: 1,
    height: "50%",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    resizeMode: "center",
    height: "100%",
    width: "160%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: -185,
  },
  container2: {
    alignItems: "center",
    //justifyContent: 'center',
    width: "100%",
    height: "60%",
    display: "flex",
    flex: 1,
    backgroundColor: "#000000",
    marginTop: -190,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  textheading: {
    marginTop: 30,
    color: "red",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  orderId: {
    color: "#33FFF9",
    fontWeight: "bold",
  },
  message: {
    color: "#4CFF33",
    fontWeight: "bold",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 57,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: "#BF9000",
    marginTop: 60,
    marginBottom: 10,
  },
  textbutton1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    //letterSpacing: 0.25,
    color: "black",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: "#BF9000",
    marginTop: 10,
    marginBottom: 10,
  },
  textbutton2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    //letterSpacing: 0.25,
    color: "black",
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: "#BF9000",
    marginTop: 10,
    marginBottom: 10,
  },
  textbutton3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  titleContainer: {
    flexDirection: "coloumn",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#8B0000",
  },
});
