import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {};

function CustomDrawerContent(props: any) {
  const pathname = usePathname();
  const logo = {
    width: 50,
    height: undefined,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#34c896",
    aspectRatio: 1,
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={require("../../assets/images/nasri.jpg")}
            width={80}
            height={80}
            style={{ ...logo, marginTop: 15, marginLeft: 10 }}
          />
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>Nasri Lakhal</Text>
            <Text style={styles.userEmail}>naserlakhal@gmail.com</Text>
          </View>
        </View>
        {/* <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="favorite-outline" size={size} color={"#fff"} />
          )}
          label={"My family"}
          labelStyle={[styles.navItemLabel, { color: "#fff" }]}
          style={{
            backgroundColor: pathname == "/favourites" ? "#333" : "#fff",
          }}
          onPress={() => {
            router.push("/favourites");
          }}
        /> */}
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={"#fff"} />
          )}
          label={"Settings"}
          labelStyle={[styles.navItemLabel, { color: "#fff" }]}
          style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/settings");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="help" size={size} color={"#fff"} />
          )}
          label={"Help"}
          labelStyle={[styles.navItemLabel, { color: "#fff" }]}
          style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/settings");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="moon" size={size} color={"#fff"} />
          )}
          isRadio={true}
          label={"Dark Mode"}
          labelStyle={[styles.navItemLabel, { color: "#fff" }]}
          style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/settings");
          }}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* <Drawer.Screen name="(tabs)" /> */}

      {/* <Drawer.Screen name="favourites" options={{headerShown: true}} />
        <Drawer.Screen name="settings" options={{headerShown: true}} /> */}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  userEmail: {
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "white",
  },
});
