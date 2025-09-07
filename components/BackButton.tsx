import { colors, radius } from "@/constants/theme";
import { BackButtonProps } from "@/types";
import { vertical } from "@/utils/styling";
import { Router, useRouter } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  const router: Router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style && style]}
    >
      <ArrowLeftIcon
        size={vertical(iconSize)}
        color={colors.black}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    borderRadius: radius._12,
    borderCurve: "continuous",
    padding: 5,
  },
});
