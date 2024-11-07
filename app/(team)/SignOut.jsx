import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import {useGlobalContext} from '../../context/GlobalProvider';

const SignOut = () => {
  const { endSession } = useGlobalContext();

  const handleSignOut = async () => {
    await endSession();
     router.push('(auth)/signInAsTeam');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>Do you really want to sign out from House Movers?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.push('(team)')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight:"bold",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  signOutButton: {
    backgroundColor: '#bf9000',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#bf9000',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignOut;
