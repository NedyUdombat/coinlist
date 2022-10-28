import { Platform } from "react-native";

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

export const Helpers = {
  switchPlatformStyles,
};
