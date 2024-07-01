import { ColorApp } from "@/components/Themed";
import { View, ViewStyle, StyleSheet, TextStyle } from "react-native"


interface StylesProps {
    error?: boolean;
    validationColor?: string
}

interface StyleSheetType {
    container: ViewStyle;
    greeting: TextStyle;
    userName: TextStyle;
    searchInput: ViewStyle;
    input: TextStyle;
    TopSection: ViewStyle;
    BottomSection: ViewStyle;
    itemMenu: ViewStyle;
    Menu: ViewStyle;
    textMenu: TextStyle;
    iconMenu: ViewStyle;
}


type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;


export const styles: StylesFunctionProps = () =>
    StyleSheet.create<StyleSheetType>({
        container: {
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 2,
            height: 330,
            width: "100%",
            backgroundColor: ColorApp("background"),
        },
        greeting: {
            fontSize: 40,
            fontWeight: "medium",
            color: "grey",
            fontStyle: "italic",
        },
        userName: {
            fontSize: 40,
            fontWeight: "bold",
        },
        TopSection: {
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            width: "100%",
            justifyContent: "space-between",

        },
        BottomSection: {
            flexDirection: "column",
            gap: 7,
            paddingHorizontal: 35,
        },
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
        itemMenu: {
            flex: 1,
            borderTopEndRadius: 50,
            backgroundColor: ColorApp("searchInputColor"),
            paddingHorizontal: 35,
            paddingVertical: 20,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            gap:5

        },
        Menu: {
            flexDirection: "column",
            alignItems: "stretch",
            paddingVertical: 30,
            paddingHorizontal: 20,
            width: "47%",
            justifyContent: "space-between",
            backgroundColor: ColorApp("background"),
            borderRadius: 20,
            borderTopRightRadius:50,
            marginTop: 10,
            gap:30,
            shadowOpacity: 0.25,
        },
        textMenu: {
            color: ColorApp("text"),
            fontWeight: "bold",
            fontSize: 15,
        },
        iconMenu: {
            borderRadius:50,
            padding:20,
            width:'50%',
            // flex:1,
            alignItems:'center'
        }
    });