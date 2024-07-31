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
            uri: "https://www.researchgate.net/profile/Aude-Motulsky/publication/331607809/figure/fig3/AS:734264853286913@1552073791912/Exemple-dordonnance-conforme-Tire-du-Guide-de-redaction-des-ordonnances-individuelles.png",
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
        <View style={{ ...prescriptionsStyle().CardInfoView }}>
          <Text style={{ ...prescriptionsStyle().CardTtitle }}>Grippe</Text>
          <View style={{ ...prescriptionsStyle().CardMedicamentNameContainer }}>
            <View style={{ ...prescriptionsStyle().CardMedicamentNameView }}>
              <Text style={{ ...prescriptionsStyle().CardMedicamentName }}>
                maxillas
              </Text>
            </View>
            <View style={{ ...prescriptionsStyle().CardMedicamentNameView }}>
              <Text style={{ ...prescriptionsStyle().CardMedicamentName }}>
                Doliprane Vitamine C
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Prescriptions;
