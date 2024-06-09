import React from 'react';
import { View, ScrollView, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const PendingOrdersScreen = () => {
  const orders = [
    {
      id: '1234',
      customerName: 'John Doe',
      from: '123 Main St',
      to: '456 Elm St',
      status: 'Pending',
    },
    // {
    //   id: '5678',
    //   customerName: 'Jane Smith',
    //   from: '789 Oak St',
    //   to: '321 Pine St',
    //   status: 'Pending',
    // },
    // Add more orders as needed
  ];
const navigation = useNavigation();
  return (
     
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
        <ScrollView contentContainerStyle={styles.ordersContainer}>
          {orders.map((order, index) => (
            <View style={styles.orderContainer} key={index}>
              <Text style={styles.customerName}>{order.customerName}</Text>
              <View style={styles.detailsContainer}>
                <View style={[styles.dot, { backgroundColor: 'green' }]} />
                <Text style={styles.addressText}>From : <Text style={styles.addressTextFrom}>{order.from}</Text></Text>
              </View>
              <View style={styles.detailsContainer}>
                <View style={[styles.dot, { backgroundColor: 'red' }]} />
                <Text style={styles.addressText}>To: <Text style={styles.addressTextTo}>{order.from}</Text></Text>
              </View>
              <Text style={[styles.orderIdText, { color: 'white' }]}>Order ID: <Text style={{ color: '#0000FF' }}>{order.id}</Text></Text>
              <Text style={[styles.orderIdText, { color: 'white' }]}>Order Status: <Text style={{ color: '#00FFFF' }}>{order.status}</Text></Text>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#bf9000' }]} 
                      onPress={() => {navigation.navigate('Tracking');}}>
                  <Text style={[styles.buttonText, { color: 'black' }]}>
                    Track Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#bf9000' }]}
                      onPress={() => {navigation.navigate('Details');}}>
                  <Text style={[styles.buttonText, { color: 'black' }]}>
                    View Order Details
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
});

export default PendingOrdersScreen;
