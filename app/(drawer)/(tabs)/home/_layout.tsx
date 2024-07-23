import React from "react";
import { Slot, Stack } from "expo-router";
import HeaderApp from "@/components/app_component/HeaderApp";
import { SafeAreaView } from "react-native";
import BackHeaderComponent from "@/components/app_component/BackHeaderComponent";

export default function _layout() {
  // console.log("checking the props here", props);
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <HeaderApp />
    //   <Slot />
    // </SafeAreaView>
    <Stack
      screenOptions={(props) => {
        return {
          // headerShown: false,
          headerShown: props.route.name !== "index",
          headerBackVisible: false,
          header(props) {
            return <HeaderApp {...props} />;
          },
        };
      }}
    />
  );
}
