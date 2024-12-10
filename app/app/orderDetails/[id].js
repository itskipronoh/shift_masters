import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import axios from 'axios';
import { BaseURI } from '../../api';

const ViewOrdersDetails = () => {
  const { id } = useLocalSearchParams();

  const [order, setOrder] = useState(null);
  const getOrder = async (id) => {
    try {
      const response = await axios.get(`${BaseURI}/viewOrder/${id}`);
      const data = response.data?.order;
      setOrder(data);
    } catch (error) {
      console.log(error);
      setOrder(null);
    }
  };

  useEffect(() => {
    getOrder(id);
  }, [id]);

  if (!order) {
    return (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#BF9000',
          },
        }}
      />
      <View style={styles.orderContainer}>
        <Text style={styles.customerName}>Order Details</Text>
        <Text style={styles.addressText}>Status: {order.status}</Text>
        <Text style={styles.addressText}>Created At: {new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.addressText}>Updated At: {new Date(order.updatedAt).toLocaleString()}</Text>
        
        <View style={styles.addressContainer}>
          <View style={[styles.dot, { backgroundColor: 'green' }]} />
          <Text style={styles.addressText}>
            From: <Text style={styles.addressTextFrom}>{order.pickupLocation} ({order.pickupLocationType})</Text>
          </Text>
        </View>
        
        <View style={styles.addressContainer}>
          <View style={[styles.dot, { backgroundColor: 'red' }]} />
          <Text style={styles.addressText}>
            To: <Text style={styles.addressTextTo}>{order.DestinationLocation} ({order.DestinationLocationType})</Text>
          </Text>
        </View>
        
        <Text style={styles.addressText}>
          Estimated Fare: <Text style={[styles.fareAmountText, { color: 'red' }]}>{order.selectedTeam.wage}/.KSHs</Text>
        </Text>
        
        <Text style={styles.addressText}>Team: {order.selectedTeam.name} (Rating: {order.selectedTeam.rating})</Text>
        
        <Text style={styles.customerName}>Items:</Text>
        {order.items.map(item => {
          return (
            <View key={item._id} style={styles.itemContainer}>
              <Text style={styles.addressText}>Name: {item.name}</Text>
              <Text style={styles.addressText}>Description: {item.description}</Text>
              <Text style={styles.addressText}>Quantity: {item.quantity}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
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
  itemContainer: {
    backgroundColor: '',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ViewOrdersDetails;
