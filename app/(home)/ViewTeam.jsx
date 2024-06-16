import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Linking } from "react-native";
import { router } from "expo-router";
const HouseMoversScreen = () => {
  const [wage, SetWage] = useState("2500");
  const [reviewText, setReviewText] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmitReview = () => {
    if (reviewText.trim() !== "") {
      setComments([...comments, reviewText]);
      setReviewText("");
    }
  };

  const handleDeleteReview = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleGoBack = () => {
    router.push("SelectTeams");
  };

  const makePhoneCall = () => {
    const phoneNumber = "1234567890"; // Replace with the desired phone number
    // Check if the Linking API is supported on the device
    Linking.canOpenURL(`tel:${phoneNumber}`).then((supported) => {
      if (supported) {
        // Open the phone dialer with the specified phone number
        Linking.openURL(`tel:${phoneNumber}`);
      } else {
        console.log("Phone call not available");
      }
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require("../../assets/kk.jpg")} style={styles.image} />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            Our delivery staff is experienced and more expert to deliver your
            office belongings to every location in and out of Lahore. We will
            deliver your office belongings conveniently and accurately through
            the best routes to avoid traffic problems and roadblocks. Instead of
            using the old-fashioned traditional procedures, Big Boy Movers is
            well ready for using accountable and modern methods of office
            relocation so that none of your belongings are missing by chance.
          </Text>
          <Text style={styles.text2}>
            Average Wage Per Hour: <Text style={styles.text3}>{wage}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              router.push("OrderPlaced");
            }}
          >
            <Text style={styles.buttonText}>Make Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => {
              makePhoneCall;
            }}
          >
            <Text style={styles.buttonText}>Contact Team</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write your review here..."
            placeholderTextColor="gray"
            value={reviewText}
            clearButtonMode={"always"}
            multiline={true}
            numberOfLines={10}
            maxLength={400}
            onChangeText={(text) => setReviewText(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitReview}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.commentsContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {comments.map((comment, index) => (
              <View style={styles.comment} key={index}>
                <Text style={styles.commentText}>{comment}</Text>
                <TouchableOpacity
                  onPress={() => handleDeleteReview(index)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    //flex: 1,
    //marginTop:10,
    width: "100%",
    height: "30%",
    resizeMode: "cover",
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    backgroundColor: "#bf9000",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginHorizontal: 20,
  },
  text2: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 20,
  },
  text3: {
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  reviewContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#bf9000",
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#bf9000",
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  button2: {
    marginTop: 7,
    paddingHorizontal: 10,
    backgroundColor: "#bf9000",
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  button3: {
    marginTop: 7,
    paddingHorizontal: 10,
    backgroundColor: "#bf9000",
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  comment: {
    backgroundColor: "#bf9000",
    borderRadius: 5,
    marginBottom: 5,
    padding: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentText: {
    color: "white",
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "red",
    fontSize: 14,
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

export default HouseMoversScreen;
