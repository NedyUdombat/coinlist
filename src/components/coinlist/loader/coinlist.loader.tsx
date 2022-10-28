import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import styles from "./styles";
import { Colors } from "@lib";

export const CoinListLoader = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={2}
      backgroundColor={Colors.white}
      highlightColor={Colors.color_808080}>
      <View style={styles.container}>
        {Array.from({ length: 10 }, (_, i) => (
          <View style={styles.placeholderitem} key={i} />
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};
