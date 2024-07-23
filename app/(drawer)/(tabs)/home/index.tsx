import {
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View as ViewRN,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { ColorApp, Text, View } from "@/components/Themed";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { styles } from "../../../../styles/index.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import TextInputComponent from "@/components/app_component/TextInputComponent";

export default function TabOneScreen() {
  const ItemMenuArray = [
    {
      id: 1,
      title: "My Prescriptions",
      icon: "prescription-bottle-alt",
      color: "#c8faef",
      path: "/home/prescriptions",
    },
    {
      id: 2,
      title: "My Medicaments",
      icon: "file-medical",
      color: "#e3f5fe",
      path: "/home/medicaments",
    },
    {
      id: 3,
      title: "My Family",
      icon: "users",
      color: "#fdf6d9",
      path: "/home/family",
    },
    // {
    //   id: 4,
    //   title: "My Doctors",
    //   icon: "clinic-medical",
    //   color: "#ffe9e1",
    //   path: "/doctors",
    // },
  ];
  const screenWidth = Dimensions.get("window").width;

  return (
    <>
      <SafeAreaView style={{ ...styles().container }}>
        <View
          style={{
            ...styles().TopSection,
          }}
        >
          <DrawerToggleButton tintColor={ColorApp("text")} />
          <MaterialCommunityIcons
            name="face-man-profile"
            size={30}
            color={ColorApp("text")}
          />
        </View>
        <View style={{ ...styles().BottomSection }}>
          <Text style={{ ...styles().greeting }}>Hello,</Text>
          <Text style={{ ...styles().userName }}>Malek Lakhal</Text>
          <TextInputComponent
            styleContainer={{
              height: 50,
              paddingHorizontal: 20,
              width: "100%",
              position: "relative",
              top: 30,
            }}
            styleInput={{
              width: "85%",
            }}
          />
        </View>
      </SafeAreaView>
      <ViewRN
        style={{
          flex: 1,
          backgroundColor: ColorApp("background"),
        }}
      >
        <View style={{ ...styles().itemMenu }}>
          {ItemMenuArray.map((item) => {
            return (
              <Pressable
                onPress={() => {
                  router.push(item.path);
                }}
                key={item.id}
                style={{ ...styles().Menu }}
              >
                <View
                  style={{ ...styles().iconMenu, backgroundColor: item.color }}
                >
                  <FontAwesome5 name={item.icon} size={16} color="black" />
                </View>
                <Text style={{ ...styles().textMenu }}>{item.title}</Text>
              </Pressable>
            );
          })}
        </View>
      </ViewRN>
    </>
  );
}
