import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import { BaseURI } from '../../api';
import { Alert } from 'react-native';

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const response = await axios.get(`${BaseURI}/orders`);

      const data =
        response.data.orders &&
        response.data.orders.filter((item) => item.status === 'accepted');

      setOrders(data);
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };

  const handleCompleteOrder = async (id) => {
    try {
      const response = await fetch(`${BaseURI}/updateOrderStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          status: 'completed',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to accept the order');
      }

      const responseData = await response.json();

      setOrders(orders.filter((o) => o.orderId !== id.orderId));
      Alert.alert('Success', 'Order has been accepted successfully!');
    } catch (error) {
      console.error('Error accepting order:', error);
      Alert.alert('Error', 'Could not accept the order. Please try again.');
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.scrollViewContent}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.customerName}>{item?.userOrder}</Text>
            <View style={styles.addressContainer}>
              <View style={[styles.dot, { backgroundColor: 'green' }]} />
              <Text style={styles.addressText}>
                From:{' '}
                <Text style={styles.addressTextFrom}>
                  {item?.pickupLocation}
                </Text>
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <View style={[styles.dot, { backgroundColor: 'red' }]} />
              <Text style={styles.addressText}>
                To:{' '}
                <Text style={styles.addressTextTo}>
                  {item?.DestinationLocation}
                </Text>
              </Text>
            </View>
            <Text style={styles.addressText}>
              Estimated Fare:{' '}
              <Text style={[styles.fareAmountText, { color: 'red' }]}>
                {item?.selectedTeam?.wage}/.KSHs
              </Text>
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCompleteOrder(item?._id)}
              >
                <Text style={styles.buttonText}>Complete Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => {
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>No Orders Available</Text>
          </View>;
        }}
      />
    </View>
  );
};

PendingOrders.navigationOptions = {
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
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 18,
    color: 'grey',
  },
});

export default PendingOrders;
