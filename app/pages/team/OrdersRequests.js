import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Linking, Alert } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';
import { BaseURI } from '../../api';

const OrdersRequestComponent = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const response = await axios.get(`${BaseURI}/orders`);

      const data =
        response.data.orders &&
        response.data.orders.filter((item) => item.status === 'pending');

      setOrders(data);
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const handleAcceptOrder = async (orderId) => {
    try {
      if (!orderId) {
        throw new Error('Order ID is missing');
      }

      const response = await axios.post(`${BaseURI}/updateOrderStatus`, {
        id: orderId,
        status: 'accepted'
      });

      if (response.data) {
        setOrders(orders.filter((o) => o._id !== orderId));
        Alert.alert('Success', 'Order has been accepted successfully!');
      }
    } catch (error) {
      console.error('Error accepting order:', error);
      Alert.alert('Error', 'Could not accept the order. Please try again.');
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      if (!orderId) {
        throw new Error('Order ID is missing');
      }

      const response = await axios.post(`${BaseURI}/updateOrderStatus`, {
        id: orderId,
        status: 'cancelled'
      });

      if (response.data) {
        setOrders(orders.filter((o) => o._id !== orderId));
        Alert.alert('Success', 'Order has been canceled successfully!');
      }
    } catch (error) {
      console.error('Error canceling order:', error);
      Alert.alert('Error', 'Could not cancel the order. Please try again.');
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
      <FlatList
        data={orders}
        keyExtractor={(order, index) => index.toString()}
        contentContainerStyle={styles.scrollViewContent}
        renderItem={({ item: order }) => (
          <View style={styles.orderContainer}>
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
                onPress={() => handleAcceptOrder(order._id)}
              >
                <Text style={styles.buttonText}>Accept Order</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCancelOrder(order._id)}
              >
                <Text style={styles.buttonText}>Cancel Order</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => makePhoneCall(order?.phoneNumber)}
              >
                <Text style={styles.buttonText}>Contact Customer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
            }}
          >
            <Text>No Orders Available</Text>
          </View>
        )}
      />
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
