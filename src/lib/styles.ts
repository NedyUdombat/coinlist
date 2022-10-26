import { Dimensions, Platform } from "react-native";
import { StyleType } from "@types";

const platformStyles = (platformType: string, styles: StyleType) => {
  if (Platform.OS === platformType) {
    return styles;
  }
  return {};
};

const switchPlatformStyles = (
  platformType: string,
  styleValue: string | number,
  altStyleValue: string | number,
) => {
  if (Platform.OS === platformType) {
    return styleValue;
  }
  return altStyleValue;
};

const screenHeight = Dimensions.get("screen").height;

export const Helpers = {
  platformStyles,
  switchPlatformStyles,
  screenHeight,
};
