import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HeaderApp</Text>
      <Text style={styles.title}>HeaderApp</Text>
      <Text style={styles.title}>HeaderApp</Text>
    </SafeAreaView>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    padding: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
