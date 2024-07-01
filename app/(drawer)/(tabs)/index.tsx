import {
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
import { styles } from "./index.style";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TabOneScreen() {
  const ItemMenuArray = [
    {
      id: 1,
      title: "My Prescriptions",
      icon: "prescription-bottle-alt",
      color: "#c8faef",
    },
    { id: 2, title: "My Medicaments", icon: "file-medical", color: "#e3f5fe" },
    { id: 3, title: "My Family", icon: "users", color: "#fdf6d9" },
    { id: 4, title: "My Doctors", icon: "clinic-medical", color: "#ffe9e1" },
  ];
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
          <Text style={{ ...styles().userName }}>Nasri Lakhal</Text>
          <View style={{ ...styles().searchInput }}>
            <Feather
              name="search"
              size={24}
              color={Colors["custom"].primaryColor}
            />
            <TextInput
              // onChangeText={onChangeNumber}
              // value={''}
              placeholder="Find Prescreptions or Medicaments"
              keyboardType="default"
              placeholderTextColor={ColorApp("text")}
              style={{ ...styles().input }}
            />
          </View>
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
              <View key={item.id} style={{ ...styles().Menu }}>
                <View
                  style={{ ...styles().iconMenu, backgroundColor: item.color }}
                >
                  <FontAwesome5 name={item.icon} size={16} color="black" />
                </View>
                <Text style={{ ...styles().textMenu }}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </ViewRN>
    </>
  );
}
