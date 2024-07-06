import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import OrdersRequest from '../../pages/team/OrdersRequests';
import PendingOrders from '../../pages/team/PendingOrders';
import CompletedOrders from '../../pages/team/OrdersCompleted';
import TrackingOrder from '../../pages/team/TrackOrder';
import OrderDetails from '../../pages/team/ViewOrderDetails';
import Chats from '../../pages/team/Chats';

const Tab = createBottomTabNavigator();

const OrdersScreen = () => {
return (
<NavigationContainer independent={true}>
<Tab.Navigator
screenOptions={{
tabBarActiveTintColor: '#bf9000',
tabBarInactiveTintColor: 'grey',
tabBarStyle: { backgroundColor: 'white', display: 'flex' },
tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
}}
>
<Tab.Screen
name="Requests"
component={OrdersRequest}
options={{
tabBarIcon: ({ color, size }) => (
<MaterialIcons name="shopping-cart" color={color} size={24} />
),
tabBarBadge: 2,
headerShown: false,
}}
/>
<Tab.Screen
name="Pending"
component={PendingOrders}
options={{
tabBarIcon: ({ color, size }) => (
<MaterialIcons name="history" color={color} size={24} />
),
tabBarBadge: 'New',
headerShown: false,
}}
/>
<Tab.Screen
name="Completed"
component={CompletedOrders}
options={{
tabBarIcon: ({ color, size }) => (
<AntDesign name="checkcircle" size={24} color={color} />
),
headerShown: false,
}}
/>
<Tab.Screen
name="Tracking"
component={TrackingOrder}
options={{
title: 'Order Tracking',
tabBarButton: () => null,
tabBarIcon: ({ color, size }) => (
<MaterialIcons name="local-shipping" color={color} size={18} />
),
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
<Tab.Screen
name="Details"
component={OrderDetails}
options={{
title: 'Order Details',
tabBarButton: () => null,
tabBarIcon: ({ color, size }) => (
<AntDesign name="bars" size={18} color={color} />
),
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
<Tab.Screen
name="Chats"
component={Chats}
options={{
tabBarButton: () => null,
tabBarIcon: ({ color, size }) => (
<MaterialIcons name="comment" size={18} color={color} />
),
tabBarBadge: 1,
headerShown: false,
}}
/>
</Tab.Navigator>
</NavigationContainer>
);
};

export default OrdersScreen;