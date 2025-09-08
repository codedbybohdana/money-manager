import HomeCard from "@/components/HomeCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import { vertical } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();
  
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View style={{ gap: 4 }}>
            <Typo fontWeight={"500"} size={20}>
              {user?.name || " "}
            </Typo>
          </View>
        </View>

        <View>
          <HomeCard />
        </View>


      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    marginTop: vertical(8),
  },
  header: {
    alignItems: "center",
    marginBottom: spacingY._20,
    margin: spacingY._20,
  },
  searchIcon: {
    backgroundColor: colors.neutral700,
    padding: spacingX._10,
    borderRadius: 50,
  },
  floatingButton: {
    height: vertical(50),
    width: vertical(50),
    borderRadius: 100,
    position: "absolute",
    bottom: vertical(30),
    right: vertical(30),
  },

  scrollViewStyle: {
    marginTop: spacingY._10,
    paddingBottom: vertical(100),
    gap: spacingY._25,
  },
});
