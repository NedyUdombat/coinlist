import React from "react";
import { Text } from "react-native";

import styles from "./styles";
import { StyleType } from "@types";

interface LogoProps {
  styles?: StyleType | StyleType[];
}

export const Logo = ({ styles: propStyles }: LogoProps) => {
  return (
    <Text style={[styles.title, propStyles]}>
      coin<Text style={styles.titleSuffix}>LIST</Text>
    </Text>
  );
};
