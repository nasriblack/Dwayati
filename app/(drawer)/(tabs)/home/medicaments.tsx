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
            uri: "https://pharmadn.fr/fichiers/articles/g/3400934778896.jpg",
          }}
          width={120}
          height={120}
          style={{
            borderRadius: 15,
            marginTop: 15,
            marginLeft: 10,
            objectFit: "contain",
          }}
        />
        <View style={{ ...styles().CardInfoView }}>
          <Text style={{ ...styles().CardTtitle }}>Maxilase</Text>
          <View style={{ ...styles().CardMedicamentNameContainer }}>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>grajem</Text>
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
      <View style={{ ...styles().ViewContainerStyle }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsNu_ZDtHnts9rZWWa9MIbN4QMQSqVcb-Dw&s",
          }}
          width={120}
          height={120}
          style={{
            borderRadius: 15,
            marginTop: 15,
            marginLeft: 10,
            objectFit: "contain",
          }}
        />
        <View style={{ ...styles().CardInfoView }}>
          <Text style={{ ...styles().CardTtitle }}>Doliprane Vitamine C</Text>
          <View style={{ ...styles().CardMedicamentNameContainer }}>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>skhana</Text>
            </View>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>oji3et ras</Text>
            </View>
            <View style={{ ...styles().CardMedicamentNameView }}>
              <Text style={{ ...styles().CardMedicamentName }}>oji3a</Text>
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
