import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import { locations } from '../../data';
import { useGlobalContext } from '../../context/GlobalProvider';

const SetPickupLocationScreen = () => {
  const [pickupLocation, setPickupLocation] = useState(' ');
  const [pickupLocationType, setpickupLocationType] = useState(' ');
  const [PickupOtherCategory, setPickupOtherCategory] = useState(' ');
  const navigation = useNavigation();
  const { orderDetails, setOrderDetails } = useGlobalContext();

  const handlePickupLocationChange = (text) => {
    setPickupLocation(text);
  };

  const handlepickupLocationTypeChange = (value) => {
    setpickupLocationType(value);
  };

  const handlePickupOtherCategoryChange = (text) => {
    setPickupOtherCategory(text);
  };

  const handleConfirmPickupLocation = () => {
    setOrderDetails({
      pickupLocation,
      pickupLocationType,
      PickupOtherCategory,
    });
    router.push('/(home)/SetDestinationLocation');
  };

  const handleGoBack = () => {
    navigation.navigate('HOME');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.titleContainer} onPress={handleGoBack}>
          <IconButton
            icon='arrow-left'
            size={14}
            //onPress={handleGoBack}
            color='#8B0000'
            style={{ marginBottom: 0 }}
          />
          <Text style={styles.titleText}>Go Back</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((location, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              description={location.description}
              onPress={() => setPickupLocation(location.title)}
            />
          );
        })}
      </MapView>
      <KeyboardAvoidingView style={styles.viewContainer} behavior='padding'>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.heading}>Set Pickup Location</Text>

          <TextInput
            style={styles.input}
            placeholder='Enter Pickup Location'
            placeholderTextColor='black'
            keyboardType='default'
            clearButtonMode={'always'}
            value={pickupLocation}
            onChangeText={handlePickupLocationChange}
          />

          <Text style={styles.subHeading}>Location Type Moving From?</Text>
          <TouchableOpacity
            style={[
              styles.pickupLocationTypeOption,
              pickupLocationType === 'House' && styles.selectedOption,
            ]}
            onPress={() => handlepickupLocationTypeChange('House')}
          >
            <MaterialCommunityIcons
              name='home'
              size={24}
              color={pickupLocationType === 'House' ? 'white' : 'black'}
            />
            <Text style={styles.pickupLocationTypeText}>House</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.pickupLocationTypeOption,
              pickupLocationType === 'Apartment' && styles.selectedOption,
            ]}
            onPress={() => handlepickupLocationTypeChange('Apartment')}
          >
            <MaterialCommunityIcons
              name='office-building'
              size={24}
              color={pickupLocationType === 'Apartment' ? 'white' : 'black'}
            />
            <Text style={styles.pickupLocationTypeText}>Apartment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.pickupLocationTypeOption,
              pickupLocationType === 'Office' && styles.selectedOption,
            ]}
            onPress={() => handlepickupLocationTypeChange('Office')}
          >
            <MaterialCommunityIcons
              name='briefcase'
              size={24}
              color={pickupLocationType === 'Office' ? 'white' : 'black'}
            />
            <Text style={styles.pickupLocationTypeText}>Office</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.pickupLocationTypeOption,
              pickupLocationType === 'Other' && styles.selectedOption,
            ]}
            onPress={() => handlepickupLocationTypeChange('Other')}
          >
            <MaterialCommunityIcons
              name='dots-horizontal'
              size={24}
              color={pickupLocationType === 'Other' ? 'white' : 'black'}
            />
            <Text style={styles.pickupLocationTypeText}>Other</Text>
          </TouchableOpacity>

          {pickupLocationType === 'Other' && (
            <TextInput
              style={styles.inputotheroption}
              placeholder='Enter Category Name'
              placeholderTextColor='black'
              keyboardType='default'
              clearButtonMode={'always'}
              value={PickupOtherCategory}
              onChangeText={handlePickupOtherCategoryChange}
            />
          )}

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmPickupLocation}
          >
            <Text style={styles.buttonText}>Confirm Pickup Location</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  map: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 10,
    marginTop: -10,
    backgroundColor: '#bf9000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  pickupLocationTypeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '40%',
    borderRadius: 8,
    padding: 3,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#7EC8E3',
  },
  pickupLocationTypeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  inputotheroption: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 0,
  },
  confirmButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bf9000',
  },
  titleContainer: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
  },
});

export default SetPickupLocationScreen;
