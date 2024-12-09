import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import PendingOrders from '../../pages/employee/PendingOrdersLabour';
import CompletedOrders from '../../pages/employee/CompletedOrdersLabour';
import ViewOrderDetails from '../../pages/employee/ViewOrderDetails';
import TrackingOrder from '../../pages/employee/TrackingOrder';
const LabourOrders = () => {
  // const navigation = useNavigation();
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
            ) /*tabBarBadge: 'New',*/,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Tracking'
          component={TrackingOrder}
          options={{
            title: 'Order Tracking',
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name='local-shipping' color={color} size={18} /> 
            ) /*tabBarBadge: 'New',*/,
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
          name='Details'
          component={ViewOrderDetails}
          options={{
            title: 'Order Details',
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='bars' size={18} color={color} /> 
            ) ,
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

export default LabourOrders;
