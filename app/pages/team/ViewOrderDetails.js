import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import axios from 'axios';
import { BaseURI } from '../../api';

const ViewOrdersDetails = () => {
  const route = useRoute();
  const { id } = route.params;

  const [order, setOrder] = useState([]);

  const getOrder = async (id) => {
    try {
      const response = await axios.get(`${BaseURI}/orders/${id}`);

      const data = response.json();

      setOrder(data);
    } catch (error) {
      console.log(error);
      setOrder([]);
    }
  };

  useEffect(() => {
    getOrder();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.orderContainer}>
        <Text style={styles.customerName}>{order?.userOrder}</Text>
        <View style={styles.addressContainer}>
          <View style={[styles.dot, { backgroundColor: 'green' }]} />
          <Text style={styles.addressText}>
            From:{' '}
            <Text style={styles.addressTextFrom}>{order?.pickupLocation}</Text>
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
      </View>
    </View>
  );
};

ViewOrdersDetails.navigationOptions = {
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

export default ViewOrdersDetails;
