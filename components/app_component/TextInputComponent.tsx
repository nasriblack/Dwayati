import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { InputTextstyles } from "@/styles/inputTextComponent.style";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { ColorApp } from "../Themed";
import { Link } from "expo-router";

type Props = {
  styleContainer?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<ViewStyle>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const TextInputComponent = ({ styleContainer, styleInput }: Props) => {
  return (
    <View style={[InputTextstyles().searchInput, styleContainer]}>
      <Feather name="search" size={24} color={Colors["custom"].primaryColor} />
      <TextInput
        // onChangeText={onChangeNumber}
        // value={''}
        placeholder="Find Prescreptions or Medicaments"
        keyboardType="default"
        placeholderTextColor={ColorApp("text")}
        style={[InputTextstyles().input, styleInput]}
      />
      <Link href="/modal" asChild>
        <Pressable>
          {({ pressed }) => (
            <Feather
              name="filter"
              size={25}
              color={Colors["custom"].primaryColor}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
};

export default TextInputComponent;
