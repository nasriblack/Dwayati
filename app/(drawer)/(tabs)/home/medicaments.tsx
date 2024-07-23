import { Image, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { ColorApp, Text, View } from "@/components/Themed";
import { medicamentStyle as styles } from "../../../../styles/medicaments.style";
import TextInputComponent from "@/components/app_component/TextInputComponent";

const Medicaments = () => {
  return (
    <SafeAreaView style={{ ...styles().safeAreaViewStyle }}>
      <View style={{ ...styles().ViewContainerStyle }}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/26.jpg",
          }}
          width={120}
          height={120}
          style={{ borderRadius: 15, marginTop: 15, marginLeft: 10 }}
        />
        <View style={{ ...styles().CardInfoView }}>
          <Text style={{ ...styles().CardTtitle }}>esm el dwa</Text>
          <View style={{ ...styles().CardMedicamentNameContainer }}>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>ka7a</Text>
            </View>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>Skhana</Text>
            </View>
          </View>
          <View style={{ ...styles().ExperiationDateContainer }}>
            <Text>Experiation date : </Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "red" }}>
              10/2026
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Medicaments;
