import { ColorApp } from "@/components/Themed";
import { View, ViewStyle, StyleSheet, TextStyle } from "react-native"


interface StylesProps {
    error?: boolean;
    validationColor?: string
}

interface StyleSheetType {
   
    searchInput: ViewStyle;
    input: TextStyle;
   
}


type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;


export const InputTextstyles: StylesFunctionProps = () =>
    StyleSheet.create<StyleSheetType>({
       
        searchInput: {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            width: "100%",
            height: "30%",
            justifyContent: "space-evenly",
            backgroundColor: ColorApp("searchInputColor"),
            borderRadius: 15,
            marginTop: 10,
        },
        input: {
            padding: 20,
            color: "black",
            width: "100%",
        },
        
    });