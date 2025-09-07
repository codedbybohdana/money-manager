import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { vertical } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
// import { useAuth } from "@/contexts/authContext";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* login & image */}
        <View>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.loginButton}
          >
            <Typo size={20} fontWeight={"500"}>
              Sign in
            </Typo>
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/hand-with-money.webp")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.footer}>
          <View style={{ alignItems: "center" }}>
            <Typo size={30} fontWeight={"600"}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={"600"}>
              of your finances
            </Typo>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={() => router.push("/(auth)/register")}>
              <Typo size={22} fontWeight={"500"}>
                Get Started
              </Typo>
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: vertical(300),
    alignSelf: "center",
    marginTop: vertical(150),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._40,
    paddingTop: spacingY._5,
  },
  footer: {
    backgroundColor: colors.textLight,
    alignItems: "center",
    paddingTop: vertical(60),
    paddingBottom: vertical(50),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._30,
  },
});

export default WelcomePage;
