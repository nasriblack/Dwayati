import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { ColorApp } from "../Themed";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import TextInputComponent from "./TextInputComponent";

const HeaderApp = (headerProps: NativeStackHeaderProps) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 35,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {headerProps.back && (
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="white"
            onPress={() => headerProps.navigation.goBack()}
          />
        )}
        <Text style={styles.title}>{headerProps.route.name}</Text>
      </View>
      <TextInputComponent
        styleContainer={{
          height: 55,
          paddingHorizontal: 20,
          width: "80%",

          marginHorizontal: screenWidth / 12,
          position: "relative",
          top: 30,
        }}
        styleInput={{
          width: "90%",
        }}
      />
    </SafeAreaView>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.custom.primaryColor,
    borderBottomRightRadius: 50,
    zIndex: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flex: 2,
  },
});
