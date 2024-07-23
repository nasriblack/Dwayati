import { Image, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { ColorApp, Text, View } from "@/components/Themed";
import { medicamentsStyle as styles } from "../../../../styles/medicaments.style";
import TextInputComponent from "@/components/app_component/TextInputComponent";

const Medicaments = () => {
  return (
    <SafeAreaView style={{ ...styles().safeAreaViewStyle }}>
      <View style={{ ...styles().seperation }}></View>
      <View style={{ ...styles().ViewContainerStyle }}>
        <View style={{ ...styles().ViewCardStyle }}>
          <View style={{ ...styles().ImageViewStyle }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/26.jpg",
              }}
              width={80}
              height={80}
              style={{ borderRadius: 15 }}
            />
          </View>
          <View style={{ ...styles().ViewInfoCardStyle }}>
            <Text style={{ ...styles().TextNameStyle }}>Maxillas</Text>
            <View style={{ ...styles().TextTagStyleView }}>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
            </View>
            <Text style={{ ...styles().TextDateStyle }}>09/2026</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles().ViewContainerStyle }}>
        <View style={{ ...styles().ViewCardStyle }}>
          <View style={{ ...styles().ImageViewStyle }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/26.jpg",
              }}
              width={80}
              height={80}
              style={{ borderRadius: 15 }}
            />
          </View>
          <View style={{ ...styles().ViewInfoCardStyle }}>
            <Text style={{ ...styles().TextNameStyle }}>Maxillas</Text>
            <View style={{ ...styles().TextTagStyleView }}>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
              <View style={{ ...styles().TextTagStyle }}>
                <Text>grajem</Text>
              </View>
            </View>
            <Text style={{ ...styles().TextDateStyle }}>09/2026</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Medicaments;
