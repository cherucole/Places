import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const PlacesListScreen = props => {
  return (
    <View>
      <Text>Places List Screen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = {
  headerTitle: "This is it"
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
