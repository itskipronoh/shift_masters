import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CustomersScreen = () => {
  const customers = [
    { id: 1, name: 'John Doe', phone: '1234567890', gender: 'male', hasUnreadMessages: true },
    { id: 2, name: 'Jane Smith', phone: '9876543210', gender: 'female', hasUnreadMessages: false },
    // Add more customer data as needed
  ];

  const handleCallCustomer = (phone) => {
    // Code to initiate a phone call using the provided phone number
  };

  const handleChatCustomer = (customer) => {
    navigation.navigate('Chats', { customer });
  };
const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {customers.map((customer) => (
        <View key={customer.id} style={styles.customerContainer}>
          <View style={styles.customerInfo}>
            <Icon
              name={customer.gender === 'male' ? 'gender-male' : 'gender-female'}
              color="#bf9000"
              size={24}
            />
            <Text style={styles.customerName}>{customer.name}</Text>
            {customer.hasUnreadMessages && <View style={styles.notificationDot} />}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleChatCustomer(customer)}>
              <Icon name="chat" color="#bf9000" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCallCustomer(customer.phone)}>
              <Icon name="phone" color="#bf9000" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  customerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bf9000',
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  customerName: {
    marginLeft: 10,
    fontSize: 16,
  },
  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomersScreen;
