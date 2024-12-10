import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PendingOrders from '../../pages/team/PendingOrders';
import CompletedOrders from '../../pages/team/OrdersCompleted';
import ViewOrderDetails from '../../pages/team/ViewOrderDetails';

const DriverOrders = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        shifting={true}
        tabBarOptions={{
          activeTintColor: '#bf9000',
          inactiveTintColor: 'grey',
          style: { backgroundColor: '#bf9000' },
          labelStyle: { fontSize: 12, fontWeight: 'bold' },
        }}
      >
        <Tab.Screen
          name='Pending Orders'
          component={PendingOrders}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name='history' color={color} size={24} />
            ),
            tabBarBadge: 'New',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Completed Orders'
          component={CompletedOrders}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='checkcircle' size={24} color={color} /> 
            ) ,
            headerShown: false,
          }}
        />

        <Tab.Screen
          name='Details'
          component={ViewOrderDetails}
          options={{
            title: 'Order Details',
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='bars' size={18} color={color} /> ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#8c6a00',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default DriverOrders;
