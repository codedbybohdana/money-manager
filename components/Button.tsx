import { CustomButtonProps } from "@/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, radius } from "@/constants/theme";
import { vertical } from "@/utils/styling";

const Button = ({
  style,
  onPress,
  children,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._16,
    borderCurve: "continuous",
    height: vertical(52),
    justifyContent: "center",
    alignItems: "center",
  },
});
