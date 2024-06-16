import * as React from 'react';
import { Text, View,Button, StyleSheet,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileAccount from './ProfileAccount';
import HOME from "./Home";
import LabourOrders from './LabourOrders';
import DriverOrders from './DriverOrders';
import SignOut from './SignOut';
export default function DrawerContainer(navigation) {
  const Drawer = createDrawerNavigator();
  const showHiddenScreen = true;
  return (
      <Drawer.Navigator screenOptions={{ drawerPosition: 'left' }} initialRouteName="HOME">
         <Drawer.Screen name='Profile Account' component={ProfileAccount} options={{
          title:"Profile Account",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name='HOME' component={HOME} options={{
          title:"Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
           {showHiddenScreen && (
          <Drawer.Screen name='Order Details for Labour' component={LabourOrders} options={{
            title: 'Orders Details for Labour',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          // drawerLabel: () => null,
          // drawerIcon: () => null,
          // drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>)}
           {showHiddenScreen && (
          <Drawer.Screen name='Order Details for Driver' component={DriverOrders} options={{
            title: 'Orders Details for Driver',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          // drawerLabel: () => null,
          // drawerIcon: () => null,
          // drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>)}
          <Drawer.Screen name='Employee SignOut' component={SignOut} options={{
          title:"Sign Out",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      </Drawer.Navigator>
  );
//          <Drawer.Screen name='Profile Account' component={ProfileAccount} options={{
        //   title:"Profile Account",
        //   gestureEnabled: true,
        //   gestureDirection: 'horizontal',
        //   headerTitleAlign: "center",
        //   headerStyle: {
        //     backgroundColor: '#BF9000',
        //   },
        //   headerTintColor: '#000000',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },}}/>
        
        //   <Drawer.Screen name='Vehicle Data' component={VehicleData} options={{
        //   title:"Vehicle Data",
        //   gestureEnabled: true,
        //   gestureDirection: 'horizontal',
        //   headerTitleAlign: "center",
        //   headerStyle: {
        //     backgroundColor: '#BF9000',
        //   },
        //   headerTintColor: '#000000',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },}}/>
        //   <Drawer.Screen name='Employee Data' component={EmployeeData} options={{
        //   title:"Employee Data",
        //   gestureEnabled: true,
        //   gestureDirection: 'horizontal',
        //   headerTitleAlign: "center",
        //   headerStyle: {
        //     backgroundColor: '#BF9000',
        //   },
        //   headerTintColor: '#000000',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },}}/>
        //   <Drawer.Screen name='Orders' component={Orders} options={{
        //   title:"Orders",
        //   gestureEnabled: true,
        //   gestureDirection: 'horizontal',
        //   headerTitleAlign: "center",
        //   headerStyle: {
        //     backgroundColor: '#BF9000',
        //   },
        //   headerTintColor: '#000000',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },}}/>














}
// {showHiddenScreen && (
//           <Drawer.Screen name='Track Order' component={TrackOrder} options={{
//             title: 'Tracking Your Order',
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//            headerRight: () => (
//               <TouchableOpacity onPress={() => navigation.replace('Orders')} style={{marginRight: 10}}>
//                 <Text style={{color: '#000000'}}>Go Back</Text>
//               </TouchableOpacity>
//             ),}}/>)}
//           {showHiddenScreen && (
//           <Drawer.Screen name='View Order Details' component={ViewOrderDetails} options={{
//             title: 'View Order Details',
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {   
//             fontWeight: 'bold',
//           },}}/>)}
//           <Drawer.Screen name='Chats' component={Chats} options={{
//           title:"Chats",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>