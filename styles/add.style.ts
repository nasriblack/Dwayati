import { ColorApp } from "@/components/Themed";
import { View, ViewStyle, StyleSheet, TextStyle } from "react-native";

interface StylesProps {
  error?: boolean;
  validationColor?: string;
}

interface StyleSheetType {
  
}

type StylesFunctionProps = (props?: StylesProps) => StyleSheetType;

export const styles: StylesFunctionProps = () =>
  StyleSheet.create<StyleSheetType>({
    
  });
