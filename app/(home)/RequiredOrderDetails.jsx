import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";

const ItemDetailsScreen = () => {
  const [items, setItems] = useState([
    { name: "", description: "", quantity: 1 },
  ]);

  const addItem = () => {
    setItems([...items, { name: "", description: "", quantity: 1 }]);
  };
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItemName = (index, name) => {
    const updatedItems = [...items];
    updatedItems[index].name = name;
    setItems(updatedItems);
  };

  const updateItemDescription = (index, description) => {
    const updatedItems = [...items];
    updatedItems[index].description = description;
    setItems(updatedItems);
  };

  const updateItemQuantity = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  };

  const handleNextButton = () => {
    // if(items.name != ''){
    //         Alert.alert('Insufficient Item Details', 'Please Enter at least name of item above');
    //         return;
    // }
    if (items.length < 2) {
      Alert.alert(
        "Insufficient Item Details",
        "Please enter at least two item details"
      );
      return;
    }
    router.push("SelectTeams");
    // Perform desired action when the Next button is pressed
    //Alert.alert('Next Button Pressed');
  };

  const handleGoBack = () => {
    router.push("SetDestinationLocation");
  };

  return (
    <View style={styles.container1}>
      <ScrollView contentContainerStyle={styles.container2}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.heading}>Item {index + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              placeholderTextColor="gray"
              keyboardType="default"
              clearButtonMode={"always"}
              value={item.name}
              onChangeText={(text) => updateItemName(index, text)}
            />
            <TextInput
              style={styles.inputdescription}
              placeholder="Description or Condition"
              placeholderTextColor="gray"
              keyboardType="default"
              clearButtonMode={"always"}
              multiline={true}
              numberOfLines={10}
              maxLength={200}
              value={item.description}
              onChangeText={(text) => updateItemDescription(index, text)}
            />
            <View style={styles.quantityContainer}>
              <Text style={styles.label}>Quantity:</Text>
              <TouchableOpacity
                onPress={() => updateItemQuantity(index, item.quantity - 1)}
              >
                <Ionicons name="remove" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateItemQuantity(index, item.quantity + 1)}
              >
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => removeItem(index)}
              style={styles.deleteButton}
            >
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity onPress={addItem} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
        <Text style={styles.buttonText}>Save & Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexGrow: 1,
    backgroundColor: "#bf9000",
    padding: 16,
  },
  container1: {
    flexGrow: 1,
    backgroundColor: "#bf9000",
    padding: 16,
  },
  itemContainer: {
    backgroundColor: "black",
    marginBottom: 5,
    padding: 10,
    borderRadius: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "black",
    color: "white",
    marginBottom: 8,
    borderColor: "#bf9000",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  inputdescription: {
    backgroundColor: "black",
    borderColor: "#bf9000",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    height: 70,
    color: "white",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 7,
  },
  label: {
    color: "white",
    marginRight: 8,
  },
  quantity: {
    color: "#00FFFF",
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 8,
  },
  deleteButton: {
    alignItems: "flex-end",
    marginBottom: 0,
  },
  addButton: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 28,
  },
  nextButton: {
    position: "absolute",
    backgroundColor: "black",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    bottom: 10, // Adjust this value to set the vertical position of the button
    left: 17.5, // Adjust this value to set the horizontal position of the button
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 125,
  },
  buttonText: {
    color: "#bf9000",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "coloumn",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8B0000",
  },
});

export default ItemDetailsScreen;
