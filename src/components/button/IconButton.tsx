import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./styles";
import { StyleType } from "@types";

export const IconButton = (props: {
  styles?: StyleType | StyleType[];
  onPress?: () => void;
  children?: React.ReactNode;
}) => {
  const { onPress, children, styles: propStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconButton, propStyle]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};
