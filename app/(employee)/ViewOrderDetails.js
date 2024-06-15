import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity,KeyboardAvoidingView,ScrollView, Text, View, StyleSheet, Image, Pressable, TextInput} from 'react-native';
import { IconButton } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const LabourOrderDetails = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  navigation.setOptions({
    headerLeft: () => (
    <TouchableOpacity style={styles.titleContainer} onPress={handleGoBack}>
      <IconButton
        icon="arrow-left"
        size={14}
        //onPress={handleGoBack}
        color="#8B0000"
        style={{marginBottom: 0}}
      />
      <Text style={styles.titleText}>Go Back</Text>
    </TouchableOpacity>
  ),
});  

  const order = {
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
    },
    addresses: {
      from: '123 Main St, City A',
      to: '456 Elm St, City B',
    },
    orderItems: [
      {
        name: 'Item 1',
        description: 'Description 1',
        quantity: 2,
      },
      {
        name: 'Item 2',
        description: 'Description 2',
        quantity: 1,
      },
    ],
    orderId: 'ABC123',
    orderStatus: 'Pending',
  };

  return (
   <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Details</Text>
          <Text>Name: {order.customer.name}</Text>
          <Text>Email: {order.customer.email}</Text>
          <Text>Phone Number: {order.customer.phoneNumber}</Text>
          <Text style={[styles.address, styles.fromAddress]}>
            From: {order.addresses.from}
          </Text>
          <Text style={[styles.address, styles.toAddress]}>
            To: {order.addresses.to}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Items</Text>
          {order.orderItems.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text>Name: {item.name}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.orderId, styles.redText]}>
            Order ID: {order.orderId}
          </Text>
          <Text style={[styles.orderStatus, styles.blueText]}>
            Order Status: {order.orderStatus}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf9000',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  address: {
    marginTop: 5,
    color: 'white',
  },
  fromAddress: {
    color: 'green',
  },
  toAddress: {
    color: 'red',
  },
  item: {
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
    marginBottom: 10,
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  orderStatus: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
  titleContainer: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
  },
});

export default LabourOrderDetails;