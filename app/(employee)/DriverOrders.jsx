import React from 'react';
import { View, ScrollView, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from Expo vector icons library
import { AntDesign } from '@expo/vector-icons';
import PendingOrders from '../../pages/employee/PendingOrdersDriver';
import CompletedOrders from '../../pages/employee/CompletedOrdersDriver';
import ViewOrderDetails from '../../pages/employee/ViewOrderDetails';
import TrackingOrder from '../../pages/employee/TrackingOrder';
const DriverOrders = () => {
  //const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
     
    <NavigationContainer independent={true}>
    <Tab.Navigator
      shifting={true}
      tabBarOptions={{
        activeTintColor: '#bf9000',
        inactiveTintColor: 'grey',
        style: { backgroundColor: '#bf9000' },
        labelStyle: { fontSize: 12 , fontWeight: 'bold' },
      }}
    >
      <Tab.Screen name="Pending Orders" component={PendingOrders} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={24} /> // Replace with your custom icon or remove the icon to hide it
          ),tabBarBadge: 'New',
          headerShown: false }}/>
      <Tab.Screen name="Completed Orders" component={CompletedOrders} options={{ tabBarIcon: ({ color, size }) => (
            <AntDesign name="checkcircle" size={24} color={color} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: false }}/>
      <Tab.Screen name="Tracking" component={TrackingOrder} options={{title: 'Order Tracking',tabBarStyle: { display: 'none' }, tabBarButton: () => null, tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-shipping" color={color} size={18} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: {
            backgroundColor: '#8c6a00',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
          fontWeight: 'bold',
      }, }}/>  
      <Tab.Screen name="Details" component={ViewOrderDetails} options={{ title: 'Order Details',tabBarStyle: { display: 'none' }, tabBarButton: () => null, tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" size={18} color={color} /> // Replace with your custom icon or remove the icon to hide it
          ),/*tabBarBadge: 'New',*/
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: {
            backgroundColor: '#8c6a00',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
          fontWeight: 'bold',
      }, }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};


export default DriverOrders;
