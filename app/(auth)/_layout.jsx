import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Sign In As",
            headerStyle: {
              backgroundColor: "#BF9000",
              textAlign: "center",
            },
            headerTintColor: "#000000",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="signInAsCustomer"
          options={({ navigation }) => ({
            title: "Customer Sign In",
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.replace("/(auth)")}
                style={{ marginLeft: 10 }}
              >
                <Text style={{ color: "#333" }}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="signInAsTeam"
          options={({ navigation }) => ({
            title: "Team Sign In",
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.replace("/(auth)")}
                style={{ marginLeft: 10 }}
              >
                <Text style={{ color: "#000000" }}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="signInAsEmployee"
          options={() => ({
            title: "Employee Sign In",
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.replace("/(auth)")}
                style={{ marginLeft: 10 }}
              >
                <Text style={{ color: "#000000" }}>Go Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="signUpAsCustomer"
          options={{
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="forgotPassword"
          options={{
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="signUpAsTeam"
          options={{
            headerStyle: {
              backgroundColor: "#BF9000",
            },
            headerTitleAlign: "center",
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
