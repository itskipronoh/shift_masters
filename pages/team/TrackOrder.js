import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button,Pressable, Platform } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const TrackingOrder = () => {
  const navigation = useNavigation();

  const [vehicleLocation, setVehicleLocation] = useState(null);
  const [remainingTime, setRemainingTime] = useState('');
  const customerName = 'John Doe';
  const fromAddress = '123 Main St, City A';
  const toAddress = '456 Elm St, City B';
  useEffect(() => {
    // Fetch vehicle location and remaining time data
    // You can use your own logic or API calls here
    // Mock data for demonstration purposes
    const vehicleData = {
      latitude: 37.7749,
      longitude: -122.4194,
    };
    const timeData = '30 minutes';

    setVehicleLocation(vehicleData);
    setRemainingTime(timeData);
  }, []);
  
  const handleGoBack = () => {
    navigation.navigate('Pending');
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
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: vehicleLocation?.latitude || 0,
          longitude: vehicleLocation?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={Platform.OS === 'android' ? 'google' : 'google'}
        showsUserLocation={true}
      >
        {vehicleLocation && (
          <Marker coordinate={vehicleLocation} pinColor="#bf9000" />
        )}
        {/* Polyline representing the route can be added here */}
      </MapView>

      <View style={styles.infoContainer}>
        <Text style={styles.customerName}>{customerName}</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText1}>From : {fromAddress}</Text>
          <Text style={styles.addressText2}>To: {toAddress}</Text>
        </View>
        <Text style={styles.remainingTime}>Your Driver is on the Way it will take maximum {remainingTime}...</Text>
        <Pressable style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
        ]} /*onPress={() => {navigation.replace('');}}*/>
        <Text style={styles.textbutton}> Cancel Order </Text> 
      </Pressable>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: '#000000',
    padding: 13,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  customerName: {
    color: 'yellow',
    fontSize: 24,
    marginBottom: 8,
  },
  addressContainer: {
    marginBottom: 10,
  },
  addressText1: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
  addressText2: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
  remainingTime: {
    color: '#00FFFF',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight:'bold',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    padding: 10,
    backgroundColor:'#BF9000',
    marginTop:10,
  },
  textbutton:{
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
  },
});

export default TrackingOrder;


// <Pressable style={({pressed}) => [
//               styles.button,
//               pressed && {opacity: 1.8, backgroundColor:'#987200'},
//         ]}  onPress={() => {navigation.navigate('Pending');}}>
//         <Text style={styles.textbutton}> Go Back </Text> 
// </Pressable>
