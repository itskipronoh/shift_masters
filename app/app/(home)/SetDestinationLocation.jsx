import React, { useState } from 'react';
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
import { useRouter } from 'expo-router';
import { locations } from '../../data';
import { useGlobalContext } from '../../context/GlobalProvider';

const SetDestinationLocationScreen = () => {
  const router = useRouter();
  const [DestinationLocation, setDestinationLocation] = useState(' ');
  const [DestinationLocationType, setDestinationLocationType] = useState(' ');
  const [DestinationOtherCategory, setDestinationOtherCategory] = useState(' ');
  const { orderDetails, setOrderDetails } = useGlobalContext();

  const handleDestinationLocationChange = (text) => {
    setDestinationLocation(text);
  };

  const handleDestinationLocationTypeChange = (value) => {
    setDestinationLocationType(value);
  };

  const handleDestinationOtherCategoryChange = (text) => {
    setDestinationOtherCategory(text);
  };

  const handleConfirmDestinationLocation = () => {
    setOrderDetails({
      ...orderDetails,
      DestinationLocationType,
      DestinationOtherCategory,
      DestinationLocation,
    });

    router.push('/(home)/RequiredOrderDetails');
  };

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
              onPress={() => setDestinationLocation(location.title)}
            />
          );
        })}
      </MapView>

      <KeyboardAvoidingView style={styles.viewContainer} behavior='padding'>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.heading}>Where do you wanna Move?</Text>

          <TextInput
            style={styles.input}
            placeholder='Enter Destination Location'
            placeholderTextColor='black'
            keyboardType='default'
            clearButtonMode={'always'}
            value={DestinationLocation}
            onChangeText={handleDestinationLocationChange}
          />

          <Text style={styles.subHeading}>Location Type Moving To?</Text>
          <TouchableOpacity
            style={[
              styles.DestinationLocationTypeOption,
              DestinationLocationType === 'House' && styles.selectedOption,
            ]}
            onPress={() => handleDestinationLocationTypeChange('House')}
          >
            <MaterialCommunityIcons
              name='home'
              size={24}
              color={DestinationLocationType === 'House' ? 'white' : 'black'}
            />
            <Text style={styles.DestinationLocationTypeText}>House</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.DestinationLocationTypeOption,
              DestinationLocationType === 'Apartment' && styles.selectedOption,
            ]}
            onPress={() => handleDestinationLocationTypeChange('Apartment')}
          >
            <MaterialCommunityIcons
              name='office-building'
              size={24}
              color={
                DestinationLocationType === 'Apartment' ? 'white' : 'black'
              }
            />
            <Text style={styles.DestinationLocationTypeText}>Apartment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.DestinationLocationTypeOption,
              DestinationLocationType === 'Office' && styles.selectedOption,
            ]}
            onPress={() => handleDestinationLocationTypeChange('Office')}
          >
            <MaterialCommunityIcons
              name='briefcase'
              size={24}
              color={DestinationLocationType === 'Office' ? 'white' : 'black'}
            />
            <Text style={styles.DestinationLocationTypeText}>Office</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.DestinationLocationTypeOption,
              DestinationLocationType === 'Other' && styles.selectedOption,
            ]}
            onPress={() => handleDestinationLocationTypeChange('Other')}
          >
            <MaterialCommunityIcons
              name='dots-horizontal'
              size={24}
              color={DestinationLocationType === 'Other' ? 'white' : 'black'}
            />
            <Text style={styles.DestinationLocationTypeText}>Other</Text>
          </TouchableOpacity>

          {DestinationLocationType === 'Other' && (
            <TextInput
              style={styles.inputotheroption}
              placeholder='Enter Category Name'
              placeholderTextColor='black'
              keyboardType='default'
              clearButtonMode={'always'}
              value={DestinationOtherCategory}
              onChangeText={handleDestinationOtherCategoryChange}
            />
          )}

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmDestinationLocation}
          >
            <Text style={styles.buttonText}>Order NOW!!!</Text>
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
  DestinationLocationTypeOption: {
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
  DestinationLocationTypeText: {
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

export default SetDestinationLocationScreen;
