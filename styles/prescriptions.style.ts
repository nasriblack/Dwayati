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
    ImageCardView: ViewStyle;
    CardInfoView: ViewStyle;
    CardTtitle: TextStyle;
    CardMedicamentNameContainer: ViewStyle;
    CardMedicamentName: TextStyle;
    CardMedicamentNameView: ViewStyle
}

type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;

export const prescriptionsStyle: StylesFunctionProps = () =>
    StyleSheet.create<StyleSheetType>({
        safeAreaViewStyle: {
            backgroundColor: ColorApp("background"),
            flex: 1,
            gap: 10,
            position: "relative",
            paddingVertical: 50,
            paddingHorizontal: 20,
        },
        ViewContainerStyle: {
            width: "100%",
            height: "30%",
            borderRadius: 25,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            borderColor: ColorApp("text"),
            borderWidth: 0.2,
            backgroundColor: ColorApp("searchInputColor"),
            shadowOffset: {
                width: 0,
                height: 1.5,
            },
            shadowOpacity: 0.8,
            shadowRadius: 2.46,
            shadowColor: ColorApp("shadowColor")
        },
        ImageCardView: {
            alignItems: "center",
            justifyContent: "center",
            // flex:1,
        },
        CardInfoView: {
            flexDirection: "column",
            flex: 1,
            flexWrap: "wrap",
            borderRadius: 25,
            backgroundColor: ColorApp("searchInputColor"),
        },
        CardTtitle: {
            width: "90%",
            padding: 5,
            fontStyle: "italic",
            fontSize: 25,
        },
        CardMedicamentNameContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 20,
            gap: 10,
            backgroundColor: ColorApp("searchInputColor"),
        },
        CardMedicamentNameView: {
            padding: 8,
            borderRadius: 30,
            borderWidth: 0.2,
            borderColor: ColorApp("shadowColor"),
        },
        CardMedicamentName: {
            fontSize: 10,
            fontWeight: "700"
        },
    });
