import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { IconButton } from "react-native-paper";
const teamsData = [
  {
    name: "Team A",
    wage: 2000,
    rating: 4.5,
  },
  {
    name: "Team B",
    wage: 2500,
    rating: 4.7,
  },
  {
    name: "Team C",
    wage: 2500,
    rating: 4.7,
  },
  {
    name: "Team D",
    wage: 1550,
    rating: 3.8,
  },
  {
    name: "Team E",
    wage: 1800,
    rating: 3.9,
  },
  {
    name: "Team F",
    wage: 1999,
    rating: 4.0,
  },
  // ... and so on for the other teams
];

const TeamScreen = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showOrderButton, setShowOrderButton] = useState(false);
  const [blurOtherLists, setBlurOtherLists] = useState(false);

  const handleSelectTeam = (team) => {
    if (selectedTeam === team) {
      setSelectedTeam(null);
      setShowOrderButton(false);
      setBlurOtherLists(false);
    } else {
      setSelectedTeam(team);
      setShowOrderButton(true);
      setBlurOtherLists(true);
    }
  };

  const renderTeams = () => {
    return teamsData.map((team, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.teamContainer,
          selectedTeam === team && styles.selectedTeam,
          blurOtherLists && selectedTeam !== team && styles.blurTeam,
        ]}
        onPress={() => handleSelectTeam(team)}
      >
        <View style={styles.teamInfoContainer}>
          <Text style={styles.teamName}>{team.name}</Text>
          <Text style={styles.teamWage}>
            Average Wage/Hour: Rps/.
            <Text style={styles.teamWageAmount}>{team.wage}</Text>
          </Text>
          <Text style={styles.teamRating}>
            Rating: <Text style={styles.teamrating}>{team.rating}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push("ViewTeam");
            }}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));
  };
  const handleGoBack = () => {
    router.push("RequiredOrderDetails");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderTeams()}
      </ScrollView>
      {showOrderButton && (
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => {
            router.push("OrderPlaced");
          }}
        >
          <Text style={styles.orderButtonText}>Make Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  teamContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: "#bf9000",
    borderRadius: 10,
  },
  selectedTeam: {
    backgroundColor: "#997303",
  },
  blurTeam: {
    opacity: 0.5,
  },
  teamInfoContainer: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  teamWage: {
    fontSize: 16,
    color: "black",
  },
  teamRating: {
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 4,
  },
  buttonText: {
    color: "red",
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "#bf9000",
    borderRadius: 10,
    margin: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  teamWageAmount: {
    color: "red",
    fontWeight: "bold",
  },
  teamrating: {
    color: "blue",
    fontWeight: "bold",
  },
  orderButtonText: {
    color: "black",
    fontSize: 18,
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

export default TeamScreen;
