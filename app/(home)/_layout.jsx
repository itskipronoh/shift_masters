import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const HomeLayout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          title: "Orders",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="SetPickUpLocation"
        options={{
          title: "Set Pickup Location",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="SetDestinationLocation"
        options={{
          title: "Set Destination Location",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="RequiredOrderDetails"
        options={{
          title: "Item Details Required",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="SelectTeams"
        options={{
          title: "Select Team",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="ViewTeam"
        options={{
          title: "View Moving Team",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="OrderPlaced"
        options={{
          title: "Order Placed Successfully",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="SignOut"
        options={{
          title: "Sign Out",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#BF9000",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer>
  );
};

export default HomeLayout;
