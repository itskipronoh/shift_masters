import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView,TouchableOpacity, StyleSheet } from 'react-native';

const VehicleData = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleManufacturer, setVehicleManufacturer] = useState('');
  const [vehicleRegisterNumber, setVehicleRegisterNumber] = useState('');
  const [loadingCapacity, setLoadingCapacity] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [vehicleList, setVehicleList] = useState([]);
  // fetch('http://127.0.0.1:3000/viewvehical', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   const jsonArray = Array.from(Object.values(data));
  //   const newVehicleList = jsonArray.map((item) => ({
  //     id: item.id,
  //     vehicleName: item.V_name,
  //     vehicleModel: item.V_model,
  //     vehicleManufacturer: item.V_manufacturer,
  //     vehicleRegisterNumber: item.V_number,
  //     loadingCapacity: item.V_capacity,
  //     vehicleCategory: item.V_category,
  //   }));
  //   setVehicleList(newVehicleList);
  // });

  // const addVehicle = () => {
  //   if ( vehicleName === '' ||
  //     vehicleModel === '' ||
  //     vehicleManufacturer === '' ||
  //     vehicleRegisterNumber === '' ||
  //     loadingCapacity === ''
  //   ) {
  //     alert('Please enter data in all fields.');
  //     return;
  //   }
  // }


  const addVehicle = () => {
    // if (
    //   vehicleName === '' ||
    //   vehicleModel === '' ||
    //   vehicleManufacturer === '' ||
    //   vehicleRegisterNumber === '' ||
    //   loadingCapacity === '' ||
    //   vehicleCategory === '' 

    // ) {
    //   alert('Please enter data in all fields.');
    //   return;
    // }
    // else{
    //   const fdata = {
    //     V_name: vehicleName ,
    //     V_model: vehicleModel ,
    //     V_manufacturer: vehicleManufacturer ,
    //     V_number: vehicleRegisterNumber ,
    //     V_capacity: loadingCapacity ,
    //     V_category: vehicleCategory
    //   }

    //   fetch('http://127.0.0.1:3000/addvehical',{
    //     method: 'POST',
    //     headers: { 
    //       'Content-Type': 'application/json',
    //     },
    //     body : JSON.stringify(fdata)
    //   })
    //   .then(response => response.json()).then(
    //     data=> {
    //       if(data.error) {
    //         console.log(data.error);
    //       }
    //       console.log(data);
    //       fetch('http://127.0.0.1:3000/viewvehical', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         const jsonArray = Array.from(Object.values(data));
    //         const newVehicleList = jsonArray.map((item) => ({
    //           id: item.id,
    //           vehicleName: item.V_name,
    //           vehicleModel: item.V_model,
    //           vehicleManufacturer: item.V_manufacturer,
    //           vehicleRegisterNumber: item.V_number,
    //           loadingCapacity: item.V_capacity,
    //           vehicleCategory: item.V_category,
    //         }));
    //         setVehicleList(newVehicleList);
    //       });
    //     }
    //   )
      
    // }
  };

  const deleteVehicle = (id) => {
      // const fdata = {
      //   V_number : id,
      // }
  
      // fetch(`http://127.0.0.1:3000/deletevehical`, {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body : JSON.stringify(fdata)
      // })
      //   .then(() => {

      //     fetch('http://127.0.0.1:3000/viewvehical', {
      //       method: 'GET',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     })
      //       .then((response) => response.json())
      //       .then((data) => {
      //         const jsonArray = Array.from(Object.values(data));
      //         const newVehicleList = jsonArray.map((item) => ({
      //           id: item.id,
      //           vehicleName: item.V_name,
      //           vehicleModel: item.V_model,
      //           vehicleManufacturer: item.V_manufacturer,
      //           vehicleRegisterNumber: item.V_number,
      //           loadingCapacity: item.V_capacity,
      //           vehicleCategory: item.V_category,
      //         }));
      //         setVehicleList(newVehicleList);
      //       });

      //   })
      //   .catch(error => {
      //     console.error('Error deleting vehicle:', error);
      //   });

  };
  
  const handleDeleteVehicle = (id) => {
    setVehicleList(vehicleList);
  };
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Name:</Text>
          <TextInput
            style={styles.input}
            value={vehicleName}
            onChangeText={setVehicleName}
            clearButtonMode="always"
            keyboardType="default"
            placeholder='Enter Vehicle Name i.e; FUSO FIGHTER'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Model Year:</Text>
          <TextInput
            style={styles.input}
            value={vehicleModel}
            onChangeText={setVehicleModel}
            clearButtonMode="always"
            keyboardType="numeric"
            placeholder='Enter Moder Year i.e; (1995)'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Manufacturer:</Text>
          <TextInput
            style={styles.input}
            value={vehicleManufacturer}
            onChangeText={setVehicleManufacturer}
            clearButtonMode="always"
            keyboardType="default"
            placeholder='Enter Manufacturer i.e; Mitsubishi'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Register Number Plate:</Text>
          <TextInput
            style={styles.input}
            value={vehicleRegisterNumber}
            onChangeText={setVehicleRegisterNumber}
            clearButtonMode="always"
            keyboardType="default"
            placeholder='Enter Vehicle Reg.# i.e; LHR-1234'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Loading Capacity in Kilogrammes/Tonnes:</Text>
          <TextInput
            style={styles.input}
            value={loadingCapacity}
            onChangeText={setLoadingCapacity}
            clearButtonMode="always"
            keyboardType="default"
            placeholder='Enter Loading Capacity i.e; 1000 kgs'
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category Type:</Text>
          <TextInput
            style={styles.input}
            value={vehicleCategory}
            onChangeText={setVehicleCategory}
            placeholder='Enter Type(Truck/Pickup/Rickshaw/Container)'
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={addVehicle}>
          <Text style = {styles.addButtontext}>Add Vehicle </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Vehicle List:</Text>
        {vehicleList.map(vehicle => (
        <View style={styles.vehicleItem} key={vehicle.id}>
          <Text>{`Name: ${vehicle.vehicleName}`}</Text>
          <Text>{`Model: ${vehicle.vehicleModel}`}</Text>
          <Text>{`Manufacturer: ${vehicle.vehicleManufacturer}`}</Text>
          <Text>{`Register Number: ${vehicle.vehicleRegisterNumber}`}</Text>
          <Text>{`Loading Capacity: ${vehicle.loadingCapacity}`}</Text>
          <Text>{`Category: ${vehicle.vehicleCategory}`}</Text>
          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonContainerdelete} onPress={() => deleteVehicle(vehicle.vehicleRegisterNumber)}>
            <Text style={styles.deleteButtontext}>Delete</Text>
          </TouchableOpacity>
          </View>
        </View>
      ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf9000',
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontWeight:'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 10, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    marginBottom: 20,
  },
  addButtontext:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF9000'
  },
  editButton: {
    backgroundColor: '#007cc3',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginRight:5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonContainerdelete:{
    backgroundColor: 'red',
    width:100,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  deleteButtontext: { 
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  vehicleItem: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default VehicleData;
