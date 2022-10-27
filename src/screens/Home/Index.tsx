import React from "react";
import { View } from "react-native";

import styles from "./styles";
import { ScreenLayout } from "@layouts";
import { Logo, CoinList, Search } from "@components";
import { useCoins } from "@hooks";

export const HomeScreen = () => {
  const { coins, control, handleSearchInput } = useCoins();

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.contentContainer}>
          <Search control={control} handleSearchInput={handleSearchInput} />
          <CoinList coins={coins} />
        </View>
      </View>
    </ScreenLayout>
  );
};
