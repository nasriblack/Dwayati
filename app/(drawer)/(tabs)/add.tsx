import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import {
  SafeAreaView,
  View as ViewRN,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFormik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Medicament {
  MedicamenntName: string;
  dateEnd: string;
  description: string;
  tag: never[];
  MedicamentImg: string;
  forWho: string;
  [key: string]: any; // Index signature
}

const AddScreen = () => {
  const [ButtonSelected, setButtonSelected] = useState("Medicament");

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      medicament: {
        MedicamenntName: "",
        dateEnd: "",
        description: "",
        tag: [],
        // MedicamentImg: "",
        forWho: "",
      },
      Prescription: {
        diseaseName: "",
        description: "",
        tag: [],
        Medicaments: [],
        forWho: "",
      },
    },
    onSubmit: (values) =>
      alert(
        `MedicamenntName: ${values.medicament.MedicamenntName}, description: ${values.medicament.description}`
      ),
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const Input = [
    {
      medicament: [
        {
          name: "MedicamentName",
          label: "esm el dwa",
          placeholder: "",
          type: "",
        },
        {
          name: "dateEnd",
          label: "date expération",
          placeholder: "",
          type: "",
        },
        {
          name: "description",
          label: "description",
          placeholder: "",
          type: "",
        },
        {
          name: "tag",
          label: "tag",
          placeholder: "",
          type: "",
        },
        // {
        //   name: "MedicamentImg",
        //   label: "",
        //   placeholder: "",
        //   type: "",
        // },
        {
          name: "forWho",
          label: "lechkoun?",
          placeholder: "",
          type: "",
        },
      ],
    },
    {
      prescription: [
        {
          name: "diseaseName",
          label: "esm el mardh",
          type: "Type2",
        },
        {
          name: "description",
          label: "description mtaa el mardh",
          type: "Type2",
        },
        {
          name: "tag",
          label: "tag ",
          type: "Type2",
        },
        {
          name: "Medicaments",
          label: "esm el dwayat",
          type: "Type2",
        },
        {
          name: "forWho",
          label: "lechkoun ?",
          type: "Type2",
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <ViewRN style={styles.buttonContainer}>
        <ViewRN
          style={{
            ...styles.ButtonViewStyle,
            backgroundColor:
              ButtonSelected == "Medicament" ? "#34c896" : "#ccc",
          }}
        >
          <TouchableOpacity onPress={() => setButtonSelected("Medicament")}>
            <Text style={{ textAlign: "center" }}>Medicament</Text>
          </TouchableOpacity>
        </ViewRN>
        <ViewRN
          style={{
            ...styles.ButtonViewStyle,
            backgroundColor:
              ButtonSelected == "Prescription" ? "#34c896" : "#ccc",
          }}
        >
          <TouchableOpacity onPress={() => setButtonSelected("Prescription")}>
            <Text style={{ textAlign: "center" }}>Prescription</Text>
          </TouchableOpacity>
        </ViewRN>
      </ViewRN>
      <ViewRN
        style={{
          backgroundColor: "#b6e9d8",
          height: 100,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          alignSelf: "center",
          borderColor: "grey",
          borderWidth: 1,
          marginVertical: 15,
        }}
      >
        <MaterialCommunityIcons
          style={{
            textAlign: "center",
          }}
          name="file-image-plus"
          size={50}
          color="black"
        />
      </ViewRN>
      {ButtonSelected == "Medicament" ? (
        <ViewRN style={{ paddingHorizontal: 20, gap: 20 }}>
          {Input[0].medicament?.map((arg) => {
            const value =
              values.medicament[arg.name as keyof typeof values.medicament];
            const safeValue = typeof value === "string" ? value : "";
            return (
              <ViewRN key={arg.name}>
                <Text>{arg.label}</Text>
                <View
                  style={{
                    borderColor: "#000000",
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <TextInput
                    onChangeText={handleChange(`medicament.${arg.name}`)}
                    value={safeValue}
                  />
                </View>
              </ViewRN>
            );
          })}
        </ViewRN>
      ) : (
        <ViewRN style={{ paddingHorizontal: 20 }}>
          {Input[0].prescription?.map((arg) => {
            return (
              <ViewRN key={arg.name}>
                <Text>{arg.label}</Text>
                <View
                  style={{
                    borderColor: "#000000",
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <TextInput
                    onChangeText={handleChange(`Prescription.${arg.name}`)}
                    // onChangeText={handleChange("medicament.forWho")}
                    value={values.medicament.forWho}
                  />
                </View>
              </ViewRN>
            );
          })}
        </ViewRN>
      )}
      <ViewRN style={{ alignItems: "center", paddingVertical: 15 }}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={{
            backgroundColor: "#b6e9d8",
            paddingHorizontal: 80,
            paddingVertical: 20,
            borderRadius: 30,
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </ViewRN>
    </SafeAreaView>
  );
};

export default AddScreen;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-around",
    borderRadius: 30,
  },
  ButtonViewStyle: {
    flex: 1,
    // backgroundColor: "#34c896",
    padding: 20,
    borderRadius: 30,
    color: "white",
  },
  ButtonViewStylePrescription: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 30,
    color: "white",
  },
});
