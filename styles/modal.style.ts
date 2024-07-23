import { ColorApp } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { View, ViewStyle, StyleSheet, TextStyle } from "react-native";

interface StylesProps {
    error?: boolean;
    validationColor?: string;
}

interface StyleSheetType {
    container: ViewStyle;
    title: TextStyle;
    separator: ViewStyle;
    filterSection: ViewStyle;
    filterItem: ViewStyle;
    filterName: TextStyle;
    buttonContainer: ViewStyle;
    resetButton: ViewStyle;
    applyButton: ViewStyle;
    resetText: TextStyle;
    applyText: TextStyle;
    filterItemActivated: ViewStyle;
}

type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;

export const modalStyle: StylesFunctionProps = () =>
    StyleSheet.create<StyleSheetType>({
        container: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 30,
            gap: 10,
            flexWrap: "wrap",
        },
        title: {
            fontSize: 40,
            fontWeight: "bold",
            borderBottomColor: "grey",
            borderBottomWidth:10
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: "80%",
        },
        filterSection: {
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 15,
            paddingVertical: 30,
            flexWrap: "wrap",
        },
        filterItem: {
            borderRadius: 15,
            shadowOpacity: 0.5,
            shadowColor: ColorApp("shadowColor"),
            shadowOffset: {
                width: 0,
                height: -4,
            },
            paddingHorizontal: 20,
            paddingVertical: 15,
        },
        filterItemActivated: {
            backgroundColor:'grey'
        },
        filterName: {
            fontSize: 20,
            fontWeight: "bold",
        },
        buttonContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 25,
            paddingVertical: 50,
            paddingHorizontal: 40,
        },
        resetButton: {
            paddingHorizontal: 60,
            paddingVertical: 15,
            backgroundColor: ColorApp("searchInputColor"),
            borderRadius: 15,
        },
        resetText: {
            color: ColorApp("text")
        },
        applyButton: {
            paddingHorizontal: 60,
            paddingVertical: 15,
            backgroundColor: Colors.custom.primaryColor,
            borderRadius: 15,
        },
        applyText: {
            color: ColorApp("background")

        }
    });
