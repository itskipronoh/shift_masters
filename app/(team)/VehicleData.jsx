import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { BaseURI } from '../../api';

const VehicleData = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleManufacturer, setVehicleManufacturer] = useState('');
  const [vehicleRegisterNumber, setVehicleRegisterNumber] = useState('');
  const [loadingCapacity, setLoadingCapacity] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [vehicleList, setVehicleList] = useState([]);
  const [error, setError] = useState('');
  const toast = useToast();

  const fetchVehicles = async () => {
    try {
      const response = await fetch(`${BaseURI}vehicles/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const newVehicleList = data.map((item) => ({
        // id: item._id, // Assuming _id is the unique identifier
        vehicleName: item.name,
        vehicleModelYear: item.model,
        vehicleManufacturer: item.manufacturer,
        vehicleRegisterNumberPlate: item.registerNumberPlate,
        loadingCapacity: item.loadingCapacity,
        vehicleCategoryType: item.categoryType,
      }));
      setVehicleList(newVehicleList);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      setError('Failed to retrieve vehicle data.');
      toast.show('Failed to retrieve vehicle data.', {
        type: 'danger',
        placement: 'top',
        duration: 2500,
        offset: 30,
        animationType: 'zoom-in',
      });
    }
  };

  // Function to add a new vehicle
  const addVehicle = async () => {
    if (
      !vehicleName ||
      !vehicleModel ||
      !vehicleManufacturer ||
      !vehicleRegisterNumber ||
      !loadingCapacity ||
      !vehicleCategory
    ) {
      setError('Please enter data in all fields.');
      toast.show('Please enter data in all fields.', {
        type: 'danger',
        placement: 'top',
        duration: 2500,
        offset: 30,
        animationType: 'zoom-in',
      });
      return;
    }
    try {
      const response = await fetch(`${BaseURI}vehicles/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: vehicleName,
          modelYear: vehicleModel,
          manufacturer: vehicleManufacturer,
          registerNumberPlate: vehicleRegisterNumber,
          loadingCapacity: loadingCapacity,
          categoryType: vehicleCategory,
        }),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
        toast.show(`${data.error}`, {
          type: 'danger',
          placement: 'top',
          duration: 2500,
          offset: 30,
          animationType: 'zoom-in',
        });
      } else {
        setError('');
        toast.show('Vehicle added successfully', {
          type: 'success',
          placement: 'top',
          duration: 2500,
          offset: 30,
          animationType: 'zoom-in',
        });
        fetchVehicles(); // Refresh the list after adding
      }
    } catch (error) {
      console.error('Error adding vehicle:', error);
      setError('Failed to add vehicle.');
      toast.show('Failed to add vehicle.', {
        type: 'danger',
        placement: 'top',
        duration: 2500,
        offset: 30,
        animationType: 'zoom-in',
      });
    }
  };

  // Function to delete a vehicle by ID
  const deleteVehicle = async (id) => {
    try {
      const response = await fetch(`${BaseURI}vehicles/:id`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registerNumberPlate: id }), // assuming 'registerNumberPlate' is unique
      });

      if (response.ok) {
        toast.show('Vehicle deleted successfully', {
          type: 'success',
          placement: 'top',
          duration: 2500,
          offset: 30,
          animationType: 'zoom-in',
        });
        fetchVehicles(); // Refresh the list after deletion
      } else {
        console.error('Error deleting vehicle:', response);
        setError('Failed to delete vehicle.');
        toast.show('Failed to delete vehicle.', {
          type: 'danger',
          placement: 'top',
          duration: 2500,
          offset: 30,
          animationType: 'zoom-in',
        });
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      setError('An error occurred while deleting the vehicle.');
      toast.show('An error occurred while deleting the vehicle.', {
        type: 'danger',
        placement: 'top',
        duration: 2500,
        offset: 30,
        animationType: 'zoom-in',
      });
    }
  };

  fetch(`${BaseURI}/viewvehical`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsonArray = Array.from(Object.values(data));
      const newVehicleList = jsonArray.map((item) => ({
        // id: item.id,
        vehicleName: item.V_name,
        vehicleModel: item.V_model,
        vehicleManufacturer: item.V_manufacturer,
        vehicleRegisterNumber: item.V_number,
        loadingCapacity: item.V_capacity,
        vehicleCategory: item.V_category,
      }));
      setVehicleList(newVehicleList);
    });

  //     const fdata = {
  //       V_number : id,
  //     }

  //     fetch(`${BaseURI}/deletevehical`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body : JSON.stringify(fdata)
  //     })
  //       .then(() => {

  //         fetch(`${BaseURI}/viewvehical`, {
  //           method: 'GET',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             const jsonArray = Array.from(Object.values(data));
  //             const newVehicleList = jsonArray.map((item) => ({
  //               // id: item.id,
  //               vehicleName: item.V_name,
  //               vehicleModel: item.V_model,
  //               vehicleManufacturer: item.V_manufacturer,
  //               vehicleRegisterNumber: item.V_number,
  //               loadingCapacity: item.V_capacity,
  //               vehicleCategory: item.V_category,
  //             }));
  //             setVehicleList(newVehicleList);
  //           });

  //       })
  //       .catch(error => {
  //         console.error('Error deleting vehicle:', error);
  //       });

  // };

  const handleDeleteVehicle = (id) => {
    setVehicleList(vehicleList);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Create a new vehicle
  const createVehicle = async () => {
    try {
      const response = await fetch(`${BaseURI}/vehicles/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to create vehicle');
      const newVehicle = await response.json();
      setVehicles([...vehicles, newVehicle]);
      toast.success('Vehicle added successfully!');
      setFormData({
        name: '',
        modelYear: '',
        manufacturer: '',
        registerNumberPlate: '',
        loadingCapacity: '',
        categoryType: '',
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Update vehicle
  const updateVehicle = async (id) => {
    try {
      const response = await fetch(`${BaseURI}/vehicles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to update vehicle');
      const updatedVehicle = await response.json();
      setVehicles(vehicles.map((v) => (v._id === id ? updatedVehicle : v)));
      toast.success('Vehicle updated successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Name:</Text>
          <TextInput
            style={styles.input}
            value={vehicleName}
            onChangeText={setVehicleName}
            clearButtonMode='always'
            keyboardType='default'
            placeholder='Enter Vehicle Name i.e; Truck'
            placeholderTextColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Model Year:</Text>
          <TextInput
            style={styles.input}
            value={vehicleModel}
            onChangeText={setVehicleModel}
            clearButtonMode='always'
            keyboardType='numeric'
            placeholder='Enter Moder Year i.e; (2024)'
            placeholderTextColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Manufacturer:</Text>
          <TextInput
            style={styles.input}
            value={vehicleManufacturer}
            onChangeText={setVehicleManufacturer}
            clearButtonMode='always'
            keyboardType='default'
            placeholder='Enter Manufacturer i.e; Mitsubishi'
            placeholderTextColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vehicle Register Number Plate:</Text>
          <TextInput
            style={styles.input}
            value={vehicleRegisterNumber}
            onChangeText={setVehicleRegisterNumber}
            clearButtonMode='always'
            keyboardType='default'
            placeholder='Enter Vehicle Reg i.e; KDM 1234'
            placeholderTextColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Loading Capacity in Kilogrammes/Tonnes:
          </Text>
          <TextInput
            style={styles.input}
            value={loadingCapacity}
            onChangeText={setLoadingCapacity}
            clearButtonMode='always'
            keyboardType='default'
            placeholder='Enter Loading Capacity i.e; 1000 kgs'
            placeholderTextColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category Type:</Text>
          <TextInput
            style={styles.input}
            value={vehicleCategory}
            onChangeText={setVehicleCategory}
            placeholder='Enter Type(Truck/Pickup/Rickshaw/Container)'
            placeholderTextColor='black'
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={createVehicle}
        >
          <Text style={styles.addButtontext}>Add Vehicle </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Vehicle List:</Text>
        {vehicleList.map((vehicle) => (
          <View style={styles.vehicleItem} key={vehicle.id}>
            <Text>{`Name: ${vehicle.vehicleName}`}</Text>
            <Text>{`Model: ${vehicle.vehicleModel}`}</Text>
            <Text>{`Manufacturer: ${vehicle.vehicleManufacturer}`}</Text>
            <Text>{`Register Number: ${vehicle.vehicleRegisterNumber}`}</Text>
            <Text>{`Loading Capacity: ${vehicle.loadingCapacity}`}</Text>
            <Text>{`Category: ${vehicle.vehicleCategory}`}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.buttonContainerdelete}
                onPress={() => deleteVehicle(vehicle.vehicleRegisterNumber)}
              >
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
    fontWeight: 'bold',
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
  addButtontext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF9000',
  },
  editButton: {
    backgroundColor: '#007cc3',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainerdelete: {
    backgroundColor: 'red',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  deleteButtontext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
