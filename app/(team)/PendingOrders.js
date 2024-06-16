import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const PendingOrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();
  // useEffect(() => {
  //   fetch('http://127.0.0.1:3000/viewpendingorders', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       const orderslist = data.map((order) => ({
  //         id: order._id,
  //         userName: order.orderDetails.userDetails && order.orderDetails.userDetails.name ? order.orderDetails.userDetails.name : 'N/A',
  //         fromAddress: order.orderDetails.fromLocations,
  //         toAddress: order.orderDetails.toLocations,
  //         fareAmount: order.orderDetails.setfair,
  //         orderStatus: order.status,
  //       }));

  //       setOrders(orderslist);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching orders:', error);
  //     });
  // }, []);



  return (
     
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
        <ScrollView contentContainerStyle={styles.ordersContainer}>
        {orders.map((order, index) => (
          <View style={styles.orderContainer} key={index}>
            <Text style={styles.customerName}>{order.userName}</Text>
            <View style={styles.addressContainer}>
              <View style={[styles.dot, { backgroundColor: 'green' }]} />
              <Text style={styles.addressText}>
                From: <Text style={styles.addressTextFrom}>{order.fromAddress}</Text>
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <View style={[styles.dot, { backgroundColor: 'red' }]} />
              <Text style={styles.addressText}>
                To: <Text style={styles.addressTextTo}>{order.toAddress}</Text>
              </Text>
            </View>
            <Text style={styles.addressText}>
              Estimated Fare: <Text style={[styles.fareAmountText, { color: 'red' }]}>{order.fareAmount}/.Rupees</Text>
            </Text>
            <Text style={styles.addressText}>
              Status: <Text style={[styles.fareAmountText, { color: 'white' }]}>{order.orderStatus}</Text>
            </Text>
              <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#bf9000' }]} 
                    onPress={() => {navigation.navigate('Tracking');}}>
                <Text style={[styles.buttonText, { color: 'black' }]}>
                  Track Order
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#bf9000' }]}
                    onPress={() => {
                      navigation.navigate('Details', { orderId: order.id });
                      }}>
                <Text style={[styles.buttonText, { color: 'black' }]}>
                  View Order Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#bf9000' }]}
                    onPress={() => {navigation.navigate('Chats');}}>
                <Text style={[styles.buttonText, { color: 'black' }]}>
                  Contact Customer
                </Text>
              </TouchableOpacity>
              </View>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf9000',
  },
  rectangleContainer: {
    flex: 1,
    backgroundColor: '#BF9000',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  ordersContainer: {
    paddingBottom: 20,
  },
  orderContainer: {
    backgroundColor: 'black',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  customerName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  addressText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  addressTextFrom:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  addressTextTo:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  orderIdText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  buttonsContainer: {
    flexDirection: 'colomn',
  },
  button: {
    backgroundColor: '#bf9000',
    borderRadius: 5,
    paddingVertical: 8,
    justifyContent:'Center',
    alignItems:'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign:'center',
    fontWeight: 'bold',
  },
  employeeName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5
  },
});

export default PendingOrdersScreen;
