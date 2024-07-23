import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { ColorApp, Text, View } from "@/components/Themed";
import { modalStyle } from "@/styles/modal.style";
import { Fragment, useState } from "react";

export default function ModalScreen() {
  const filterArray = [
    {
      filterName: "Naw3 el dwa",
      filterItem: [
        { item: "7rabch", id: 1 },
        { item: "Boumadha", id: 2 },
        { item: "Sirop", id: 3 },
      ],
      key: "type",
    },
    {
      filterName: "Catgory mtaa Dwa",
      filterItem: [
        { item: "Grajem", id: 1 },
        { item: "Skhana", id: 2 },
        { item: "ka7a", id: 3 },
        { item: "Bard fel 3dham", id: 4 },
        { item: "kerch terji", id: 5 },
        { item: "Khchem yejri", id: 6 },
      ],
      key: "category",
    },
  ];

  const [filterSelected, setfilterSelected] = useState<any>([]);

  console.log("checking the filterSelected here", filterSelected);
  const resetFunction = () => {
    setfilterSelected([]);
  };

  return (
    <>
      <View style={[modalStyle().container]}>
        {/* <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" /> */}
        {/* <Text style={[modalStyle().title]}>Filters</Text> */}
        {filterArray.map((item) => {
          return (
            <View key={item.key}>
              <Text style={[modalStyle().filterName]}>{item.filterName}</Text>

              <View style={[modalStyle().filterSection]}>
                {item.filterItem.map((arg) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (!filterSelected.includes(arg.item)) {
                          setfilterSelected((prevState: any) => [
                            ...prevState,
                            arg.item,
                          ]);
                        } else {
                          setfilterSelected(
                            filterSelected.filter(
                              (item: any) => item !== arg.item
                            )
                          );
                        }
                      }}
                      key={arg.id}
                    >
                      <View
                        style={[
                          modalStyle().filterItem,
                          filterSelected.includes(arg.item) && {
                            backgroundColor: "grey",
                          },
                        ]}
                      >
                        <Text>{arg.item}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
      <View style={[modalStyle().buttonContainer]}>
        <TouchableOpacity
          onPress={resetFunction}
          style={[modalStyle().resetButton]}
        >
          <Text style={[modalStyle().resetText]}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[modalStyle().applyButton]}>
          <Text style={[modalStyle().applyText]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
