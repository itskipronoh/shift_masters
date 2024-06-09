import * as React from 'react';
import { Text, View,Button, StyleSheet,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HOME from './Home';
import Orders from './Orders';
import RequiredOrderDetails from './RequiredOrderDetails';
import SetPickupLocation from './SetPickUpLocation';
import SetDestinationLocation from './SetDestinationLocation';
import SelectTeams from './SelectTeams';
import ViewTeam from './ViewTeam';
import OrderPlaced from './OrderPlaced';
import SignOut from './SignOut';
export default function DrawerContainer(navigation) {
  const Drawer = createDrawerNavigator();
  const showHiddenScreen = false;
  return (
      <Drawer.Navigator screenOptions={{ drawerPosition: 'left' }} initialRouteName="HOME">
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
          <Drawer.Screen name='Orders' component={Orders} options={{
          title:"Orders",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Set Pickup Location' component={SetPickupLocation} options={{
          title:"Set Pickup Location",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Set Destination Location' component={SetDestinationLocation} options={{
          title:"Set Destination Location",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Required Order Details' component={RequiredOrderDetails} options={{
          title:"Item Details Required",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Select-Team' component={SelectTeams} options={{
          title:"Select Team",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='View Team' component={ViewTeam} options={{
          title:"View Moving Team",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='Order Placed' component={OrderPlaced} options={{
          title:"Order Placed Successfully",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { display: 'none' },
          //title: null,
          //drawerIcon: () => null,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
         <Drawer.Screen name='Team SignOut' component={SignOut} options={{
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