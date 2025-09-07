import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "phosphor-react-native";
import { colors, radius } from "@/constants/theme";
import { ImageUploadProps } from "@/types";
import { Image } from "expo-image";
import { horizontal, vertical } from "@/utils/styling";
import * as ImagePicker from "expo-image-picker";
import Typo from "./Typo";
import { getFilePath } from "@/services/imageService";

const ImageUpload = ({
  file = null,
  onSelect,
  onClear,
  containerStyle,
  imageStyle,
  placeholder = "",
}: ImageUploadProps) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });

    console.log(result);

    if (!result.canceled) {
      onSelect(result.assets?.[0]);
    }
  };

  return (
    <View>
      {!file && (
        <TouchableOpacity
          onPress={pickImage}
          style={[styles.inputContainer, containerStyle && containerStyle]}
        >
          <Icons.UploadSimpleIcon color={colors.black} />
          {placeholder && <Typo size={15}>{placeholder}</Typo>}
        </TouchableOpacity>
      )}

      {file && (
        <View style={[styles.image, imageStyle && imageStyle]}>
          <Image
            style={{ flex: 1 }}
            source={getFilePath(file)}
            //   placeholder={{ blurhash }}
            contentFit="cover"
            transition={100}
          />
          <TouchableOpacity onPress={() => onClear()} style={styles.deleteIcon}>
            <Icons.XCircleIcon
              color={colors.white}
              size={vertical(24)}
              weight="fill"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  image: {
    height: horizontal(150),
    width: horizontal(150),
    borderRadius: radius._16,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  inputContainer: {
    height: vertical(54),
    borderRadius: radius._16,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral500,
    borderStyle: "dashed",
  },
  deleteIcon: {
    position: "absolute",
    top: horizontal(6),
    right: horizontal(6),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
