import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { getAllOrders, getAllUsers } from '../../api';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getAllOrders();
      if (response.error) {
        console.error('Error:', response.error);
        return;
      }

      if (response && response.orders) {
        setOrders(response.orders);
      }
    };

    const fetchUsers = async () => {
      const response = await getAllUsers();
      if (response.error) {
        console.error('Error:', response.error);
        return;
      }

      if (response) {
        setUsers(response);
      }
    };

    fetchOrders();
    fetchUsers();
  }, []);

  const handleGenerateReport = async () => {
    const doc = new jsPDF();
    const userTableColumn = ['Name', 'Email', 'ID Number', 'Phone', 'Role'];
    const userTableRows = [];

    users.forEach((user) => {
      const userData = [
        user.name,
        user.email,
        user.idNumber,
        user.phone,
        user.role,
      ];
      userTableRows.push(userData);
    });

    doc.autoTable({
      head: [userTableColumn],
      body: userTableRows,
      startY: 20,
    });
    doc.text('User Report', 14, 15);

    const orderTableColumn = [
      'User',
      'Pickup Location',
      'Destination Location',
      'Status',
      'Created At',
    ];
    const orderTableRows = [];

    orders.forEach((order) => {
      const orderData = [
        order.userOrder,
        order.pickupLocation,
        order.DestinationLocation,
        order.status,
        new Date(order.createdAt).toLocaleString(),
      ];
      orderTableRows.push(orderData);
    });

    doc.autoTable({
      head: [orderTableColumn],
      body: orderTableRows,
      startY: doc.lastAutoTable.finalY + 10,
    });
    doc.text('Order Report', 14, doc.lastAutoTable.finalY + 5);

    const pdfOutput = doc.output('datauristring');
    const pdfUri = `${FileSystem.documentDirectory}report_${new Date().toISOString()}.pdf`;

    await FileSystem.writeAsStringAsync(pdfUri, pdfOutput, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const callback = downloadProgress => {
      const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      console.log(`Download progress: ${progress * 100}%`);
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      pdfUri,
      FileSystem.documentDirectory + `report_${new Date().toISOString()}.pdf`,
      {},
      callback
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/wal1.png')} />
      <View style={styles.container2}>
        <Pressable
          style={({ pressed }) => [
            styles.button3,
            pressed && { opacity: 1.8, backgroundColor: '#987200' },
          ]}
          onPress={() => {
            router.push('LabourOrders');
          }}
        >
          <Text style={styles.textbutton3}> Orders Details for Labour </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button4,
            pressed && { opacity: 1.8, backgroundColor: '#987200' },
          ]}
          onPress={() => {
            router.push('DriverOrders');
          }}
        >
          <Text style={styles.textbutton4}> Orders Details for Driver </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button4,
            pressed && { opacity: 1.8, backgroundColor: '#987200' },
          ]}
          onPress={() => handleGenerateReport()}
        >
          <Text style={styles.textbutton4}> Generate Report </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 0,
    flex: 1,
    height: '50%',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    resizeMode: 'center',
    height: '120%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: -185,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60%',
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
    marginTop: -190,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 15,
    backgroundColor: '#BF9000',
    marginTop: 10,
    marginBottom: 10,
  },
  textbutton1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#BF9000',
    marginTop: 10,
    marginBottom: 10,
  },
  textbutton2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 12,
    backgroundColor: '#BF9000',
  },
  textbutton3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button4: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 53,
    borderRadius: 12,
    backgroundColor: '#BF9000',
    marginTop: 30,
  },
  textbutton4: {
    fontSize: 16,
    width: '100%',
    fontWeight: 'bold',
    color: 'black',
  },
});
