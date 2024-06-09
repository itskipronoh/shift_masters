import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViewOrdersDetails = ({ route }) => {
  const [orders, setOrders] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [roll, setroll] = useState('');
  const [driverList, setDriverList] = useState([]);
  const [labourList, setLabourList] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null); 
  const [selectedLabours, setSelectedLabours] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/viewteam', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        const driverList = data.Driver.map((driver) => ({
          id: driver._id,
          roll: driver.D_roll,
          name: driver.D_name,
          phone: driver.D_phone,
          cnic: driver.D_cnic,
        }));
        const labourList = data.labour.map((labour) => ({
          id: labour._id,
          roll: labour.L_roll,
          name: labour.L_name,
          phone: labour.L_phone,
          cnic: labour.L_cnic,
        }));
        setDriverList(driverList);
        setLabourList(labourList);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    const fetchOrderData = async () => {
      try {
        const fdata = {
          id: route.params.orderId,
        };

        const response = await fetch('http://127.0.0.1:3000/vieworders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata),
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchTeamData();
    fetchOrderData();
  }, [route.params.orderId]);

 
  const handleSeletedlabour = (employee) => {
    const isAlreadySelected = selectedLabours.some((labour) => labour.id === employee.id);
    if (isAlreadySelected) {
      const updatedLabours = selectedLabours.filter((labour) => labour.id !== employee.id);
      setSelectedLabours(updatedLabours);
    } else {
      setSelectedLabours([...selectedLabours, employee]);
    }
  };

  const handleSelectedDriver = (employee) => {
    // Check if a driver is already selected
    if (selectedDriver) {
      console.log('A driver is already selected');
      alert('You can only select one driver');
      return;
    }
    setSelectedDriver(employee);
  };

  const handleAddEmployee = () => {
    if (!selectedDriver && selectedLabours.length === 0) {
      console.log('No driver or labour is selected');
      alert('Please select a driver or at least one labour');
      return;
    }
    console.log(order.orderId);
    const data = {
      orderId: order.orderId,
      selectedDriver: selectedDriver,
      selectedLabours: selectedLabours,
    };
  
    // Send the data to the server using a POST request
    fetch('http://127.0.0.1:3000/updateOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Order updated:', responseData);
        // Handle any success actions or navigation after successfully updating the order
      })
      .catch((error) => {
        console.error('Error updating order:', error);
        // Handle any error actions, e.g., show an error message to the user
      });

  };
  
  const order = {
    customer: {
      name: orders.orderDetails?.userDetails?.name,
      email: orders.orderDetails?.userDetails?.email,
      phoneNumber: orders.orderDetails?.userDetails?.phone,
    },
    addresses: {
      from: orders.orderDetails?.fromLocations,
      to: orders.orderDetails?.toLocations,
    },
    orderItems: orders.orderDetails?.itemsDetails || [],
    orderId: orders._id,
    orderStatus: orders.status,
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Details</Text>
          <Text style={[styles.orderStatus, styles.blueText]}>
            Order Status: {order.orderStatus}
          </Text>
          <Text style={[styles.orderId, styles.redText]}>
            Order ID: {order.orderId}
          </Text>
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
        
        {orders.status === 'addEmployee' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Driver List</Text>
            {driverList.map((driver) => (
              <View style={styles.employeeCard} key={driver.id}>
                <Text style={styles.employeeName}>Name: {driver.name}</Text>
                <Text style={styles.employeePhone}>Phone#: {driver.phone}</Text>
                <Text style={styles.employeeCnic}>CNIC: {driver.cnic}</Text>
                <Text style={styles.employeeroll}>Roll: {driver.roll}</Text>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={[
                    styles.deleteButton,
                    selectedDriver && selectedDriver.id === driver.id
                      ? { backgroundColor: 'gray' }
                      : null,
                  ]}
                  onPress={() => handleSelectedDriver(driver)}
                  disabled={selectedDriver && selectedDriver.id !== driver.id}
                >
                  <Text style={styles.buttonText}>
                    {selectedDriver && selectedDriver.id === driver.id
                      ? 'Selected'
                      : 'Select'}
                  </Text>
                </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {orders.status === 'addEmployee' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Labour List</Text>
            {labourList.map((labour) => (
              <View style={styles.employeeCard} key={labour.id}>
                <Text style={styles.employeeName}>Name: {labour.name}</Text>
                <Text style={styles.employeePhone}>Phone#: {labour.phone}</Text>
                <Text style={styles.employeeCnic}>CNIC: {labour.cnic}</Text>
                <Text style={styles.employeeroll}>Roll: {labour.roll}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={[
                      styles.deleteButton,
                      selectedLabours.some((selectedLabour) => selectedLabour.id === labour.id)
                        ? { backgroundColor: 'gray' }
                        : null,
                    ]}
                    onPress={() => handleSeletedlabour(labour)}
                  >
                    <Text style={styles.buttonText}>
                      {selectedLabours.some((selectedLabour) => selectedLabour.id === labour.id)
                        ? 'Selected'
                        : 'Select'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
        {orders.status === 'addEmployee' && (
          <TouchableOpacity style={styles.addButton} onPress={handleAddEmployee}>
          <Text style={styles.buttonText}>Add Employee</Text>
          </TouchableOpacity>
        )}
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
  employeeCard: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#bf9000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  employeeName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  employeePhone: {},
  employeeCnic: {},
  employeeroll: {},
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
  },
  addButton: {
    backgroundColor: '#bf9000',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    marginTop : 10,
    marginBottom : 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default ViewOrdersDetails;
