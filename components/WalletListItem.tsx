import { colors, radius, spacingX } from "@/constants/theme";
import { WalletType } from "@/types";
import { vertical } from "@/utils/styling";
import { Image } from "expo-image";
import { Router } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typo from "./Typo";

const WalletListItem = ({
  item,
  index,
  router,
}: {
  item: WalletType;
  index: number;
  router: Router;
}) => {
  const handleOpen = () => {
    router.push({
      pathname: "/(modals)/walletModal",
      params: {
        id: item?.id,
        name: item?.name,
        image: item?.image,
      },
    });
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleOpen}>
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1 }}
            source={item.image}
            contentFit="cover"
            transition={100}
          />
        </View>

        <View style={styles.nameContainer}>
          <Typo size={16}>{item.name}</Typo>
        </View>

        <Icons.CaretRightIcon
          size={vertical(20)}
          weight="bold"
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WalletListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vertical(17),
  },
  imageContainer: {
    height: vertical(45),
    width: vertical(45),
    borderRadius: radius._12,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  nameContainer: {
    flex: 1,
    gap: 2,
    marginLeft: spacingX._10,
  },
});
