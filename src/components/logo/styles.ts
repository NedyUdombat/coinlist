import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: 24,
    lineHeight: 58.51,
    fontFamily: Fonts.montserratSemiBold,
    textAlign: "left",
  },
  titleSuffix: {
    color: Colors.success,
    fontFamily: Fonts.montserratExtraBold,
  },
});
