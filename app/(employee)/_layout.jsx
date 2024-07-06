import * as React from "react";
import { Drawer } from "expo-router/drawer";
export default function EmployeeLayout() {
  const showHiddenScreen = true;
  return (
    <Drawer screenOptions={{ drawerPosition: "left" }} initialRouteName="Home">
      <Drawer.Screen
        name="ProfileAccount"
        options={{
          title: "Profile Account",
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
      {showHiddenScreen && (
        <Drawer.Screen
          name="LabourOrders"
          options={{
            title: "Orders Details for Labour",
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
      )}
      {showHiddenScreen && (
        <Drawer.Screen
          name="DriverOrders"
          options={{
            title: "Orders Details for Driver",
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
      )}
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
}
