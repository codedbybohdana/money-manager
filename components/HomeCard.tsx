import { colors, spacingX, spacingY } from "@/constants/theme";
import { horizontal, vertical } from "@/utils/styling";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Typo from "./Typo";
const HomeCard = () => {
  return (
    <ImageBackground
      source={require("../assets/images/card.png")}
      resizeMode="stretch"
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View>
          {/* total balance */}
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={17} fontWeight={"500"}>
              Total Balance
            </Typo>
          </View>
          <Typo color={colors.black} size={30} fontWeight={"bold"}>
            $ 234.23
          </Typo>
        </View>

        {/* expense & income */}
        <View style={styles.stats}>
          {/* income */}
          <View style={{ gap: vertical(5) }}>
            <View style={styles.incomeExpense}>
              <Typo size={16} color={colors.neutral700} fontWeight={"500"}>
                Income
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.green} fontWeight={"600"}>
                $ 300.00
              </Typo>
            </View>
          </View>

          {/* expense */}
          <View style={{ gap: vertical(5) }}>
            <View style={styles.incomeExpense}>
              <Typo size={16} color={colors.neutral700} fontWeight={"500"}>
                Expense
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.rose} fontWeight={"600"}>
                $ 500.00
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  bgImage: {
    height: horizontal(210),
    width: "100%",
  },
  container: {
    padding: spacingX._20,
    paddingHorizontal: horizontal(23),
    height: "87%",
    width: "100%",
    justifyContent: "space-between",
  },
  totalBalanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsIcon: {
    backgroundColor: colors.neutral350,
    padding: spacingY._5,
    borderRadius: 50,
  },
  incomeExpense: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._7,
  },
});
