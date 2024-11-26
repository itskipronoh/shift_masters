import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Linking, Alert } from 'react-native';
import { useGlobalContext } from '../../context/GlobalProvider';
import { router } from 'expo-router';
import axios from 'axios';
import { BaseURI } from '../../api';

const OrdersRequestComponent = () => {
  const [orders, setOrders] = useState([]);
  const { endpoint } = useGlobalContext();

  const getAllOrders = async () => {
    try {
      const response = await axios.get(`${BaseURI}/orders`);

      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };
  getAllOrders();

  useEffect(() => {}, []);

  const handleAcceptOrder = async (order) => {
    try {
      const response = await fetch(`${endpoint}/updateOrderStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: order.orderId,
          status: 'accepted',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to accept the order');
      }

      const responseData = await response.json();
      console.log('Order accepted:', responseData);
      // Optional: Refresh orders or update state to reflect the change
    } catch (error) {
      console.error('Error accepting order:', error);
      alert('Could not accept the order. Please try again.');
    }
  };

  const handleCancelOrder = async (order) => {
    try {
      const response = await fetch(`${endpoint}/updateOrderStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: order.orderId,
          status: 'canceled',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to cancel the order');
      }

      const responseData = await response.json();
      console.log('Order canceled:', responseData);
      // Optional: Refresh orders or update state to reflect the change
    } catch (error) {
      console.error('Error canceling order:', error);
      alert('Could not cancel the order. Please try again.');
    }
  };

  const makePhoneCall = (phoneNumber) => {
    if (!phoneNumber) {
      Alert.alert('Phone number not available');
      return;
    }

    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((error) => {
      console.error('Error making phone call:', error);
      Alert.alert(
        'Unable to make the call. Please check your device settings.'
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {orders &&
          orders.map((order, index) => (
            <View style={styles.orderContainer} key={index}>
              <Text style={styles.customerName}>{order?.userOrder}</Text>
              <View style={styles.addressContainer}>
                <View style={[styles.dot, { backgroundColor: 'green' }]} />
                <Text style={styles.addressText}>
                  From:{' '}
                  <Text style={styles.addressTextFrom}>
                    {order?.pickupLocation}
                  </Text>
                </Text>
              </View>
              <View style={styles.addressContainer}>
                <View style={[styles.dot, { backgroundColor: 'red' }]} />
                <Text style={styles.addressText}>
                  To:{' '}
                  <Text style={styles.addressTextTo}>
                    {order?.DestinationLocation}
                  </Text>
                </Text>
              </View>
              <Text style={styles.addressText}>
                Estimated Fare:{' '}
                <Text style={[styles.fareAmountText, { color: 'red' }]}>
                  {order?.selectedTeam?.wage}/.KSHs
                </Text>
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAcceptOrder(order)}
                >
                  <Text style={styles.buttonText}>Accept Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleCancelOrder(order)}
                >
                  <Text style={styles.buttonText}>Cancel Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push('ViewOrderDetails')}
                >
                  <Text style={styles.buttonText}>View Order Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    makePhoneCall;
                  }}
                >
                  <Text style={styles.buttonText}>Contact Customer</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

        {!orders && (
          <View>
            <Text>No Orders Available</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

OrdersRequestComponent.navigationOptions = {
  screenOptions: {
    tabBarActiveTintColor: '#bf9000',
    tabBarInactiveTintColor: 'grey',
    tabBarStyle: {
      display: 'flex',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF9000',
  },
  scrollViewContent: {
    padding: 20,
  },
  orderContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  customerName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'yellow',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  addressTextFrom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  addressTextTo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  fareAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#BF9000',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrdersRequestComponent;
