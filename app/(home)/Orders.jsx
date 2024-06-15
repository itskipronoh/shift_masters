import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Orders = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>Orders Screen is in Development Phase</Text>
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
});

export default Orders;
