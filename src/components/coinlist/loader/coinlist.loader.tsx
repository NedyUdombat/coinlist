import React from "react";
import { Colors } from "@lib";
import { View } from "react-native";
import styles from "./styles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const CoinListLoader = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={2}
      highlightColor={Colors.color_808080}>
      <View style={styles.container}>
        {Array.from({ length: 10 }, (_, i) => (
          <View style={styles.placeholderitem} key={i} />
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};
