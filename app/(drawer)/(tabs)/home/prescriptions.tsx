import { Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "@/components/Themed";
import { prescriptionsStyle } from "@/styles/prescriptions.style";

const Prescriptions = () => {
  return (
    <SafeAreaView style={{ ...prescriptionsStyle().safeAreaViewStyle }}>
      <View style={{ ...prescriptionsStyle().ViewContainerStyle }}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/26.jpg",
          }}
          width={120}
          height={120}
          style={{ borderRadius: 15, marginTop: 15, marginLeft: 10 }}
        />
        <View style={{ ...prescriptionsStyle().CardInfoView }}>
          <Text style={{ ...prescriptionsStyle().CardTtitle }}>
            esm el mardh
          </Text>
          <View style={{ ...prescriptionsStyle().CardMedicamentNameContainer }}>
            <View style={{ ...prescriptionsStyle().CardMedicamentNameView }}>
              <Text style={{ ...prescriptionsStyle().CardMedicamentName }}>
                maxillas
              </Text>
            </View>
            <View style={{ ...prescriptionsStyle().CardMedicamentNameView }}>
              <Text style={{ ...prescriptionsStyle().CardMedicamentName }}>
                maxillas
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Prescriptions;
