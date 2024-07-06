import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const SignOut = ({navigate}) => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    // Perform sign out functionality here
    // Example: navigate to the sign-in screen or clear user session
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
