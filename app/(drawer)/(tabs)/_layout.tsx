import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Dimensions, Pressable, Text, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { DrawerToggleButton } from "@react-navigation/drawer";
import HeaderApp from "@/components/app_component/HeaderApp";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { ColorApp } from "@/components/Themed";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const screenWidth = Dimensions.get("window").width;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 27,
          left: 16,
          right: 16,
          height: 72,
          elevation: 0,
          backgroundColor: ColorApp("background"),
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#a1e6ce",
          borderWidth: 0.5,
          borderTopColor: "#a1e6ce",
          width: screenWidth - 100,
          marginLeft: screenWidth / 2 - screenWidth / 2.4,
        },
        // headerShown: useClientOnlyValue(false, true),
        // headerTitle: () => <HeaderApp />,

        // headerLeft: () => <DrawerToggleButton tintColor="white" />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          // title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? Colors.custom.primaryColor : "grey"}
                size={focused ? 30 : 20}
              />
              <Text
                style={{
                  color: focused ? Colors.custom.primaryColor : "grey",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          // title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 56,
                width: 56,
                borderRadius: 999,
                backgroundColor: Colors.custom.primaryColor,
                marginBottom: 26,
                borderWidth: 5,
                borderColor: Colors[colorScheme ?? "light"].borderAddButtonTab,
              }}
            >
              <Ionicons name="add" color="white" size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          // title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <FontAwesome6
                name="user-doctor"
                color={focused ? Colors.custom.primaryColor : "grey"}
                size={focused ? 30 : 20}
              />
              <Text
                style={{
                  color: focused ? Colors.custom.primaryColor : "grey",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                Doctors
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Doctors",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
