import { ColorApp } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { View, ViewStyle, StyleSheet, TextStyle } from "react-native";

interface StylesProps {
    error?: boolean;
    validationColor?: string;
}

interface StyleSheetType {
    safeAreaViewStyle: ViewStyle;
    ViewContainerStyle: ViewStyle;
    ViewCardStyle: ViewStyle;
    ImageViewStyle: ViewStyle;
    ViewInfoCardStyle: ViewStyle;
    TextDateStyle: TextStyle;
    TextNameStyle: TextStyle;
    TextTagStyleView: ViewStyle;
    TextTagStyle: TextStyle;
    seperation: ViewStyle;
}

type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;

export const medicamentsStyle: StylesFunctionProps = () =>
    StyleSheet.create<StyleSheetType>({
        safeAreaViewStyle: {
            backgroundColor: ColorApp("background"),
            flex: 1,
            gap: 10,
            position: "relative",
        },

        ViewContainerStyle: {
            gap: 40,
            borderRadius: 50,

            // borderBottomRightRadius: 50,
        },
        ViewCardStyle: {
            display: "flex",
            flexDirection: "row",
            gap: 10,
            borderRadius: 50,
            padding: 30,
            shadowColor: ColorApp("shadowColor"),
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3.46,

            elevation: 9,
        },
        ImageViewStyle: {
            alignItems: "center",
            justifyContent: "center",
        },
        ViewInfoCardStyle: {
            gap: 7,
            flex: 1,
            position: "relative",
        },
        TextDateStyle: {
            position: "absolute",
            top: 0,
            right: 10,
        },
        TextNameStyle: {
            fontSize: 30,
            fontWeight: "medium",
            // color: "grey",
            fontStyle: "italic",
        },
        TextTagStyleView: {
            flexDirection: "row",
            gap: 5,
            flexWrap: "wrap",
        },
        TextTagStyle: {
            padding: 10,
            borderRadius: 10,
            backgroundColor: ColorApp("tabIconDefault"),
            shadowColor: ColorApp("shadowColor"),
            shadowOffset: {
                width: 0,
                height: -3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1.46,

        },
        seperation: {
            height: 50,
            backgroundColor: ColorApp("background"),
        },
    });
