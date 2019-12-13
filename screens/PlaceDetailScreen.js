import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = props => {
  return (
    <View>
      <Text>Places Detail Screen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle")
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
