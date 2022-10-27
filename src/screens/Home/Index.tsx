import React from "react";
import { View } from "react-native";

import styles from "./styles";
import { ScreenLayout } from "@layouts";
import { Logo, CoinList, Search } from "@components";

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.contentContainer}>
          <Search />
          <CoinList />
        </View>
      </View>
    </ScreenLayout>
  );
};
