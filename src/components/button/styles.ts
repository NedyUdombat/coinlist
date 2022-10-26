import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  iconButton: {
    height: 40,
    width: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  filled: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  filledText: {
    fontFamily: Fonts.montserratSemiBold,
    fontSize: 16,
    color: "#FFFFFF",
  },
  filledDisabled: {
    backgroundColor: "rgba(61, 102, 61, 0.7)",
    borderColor: "rgba(61, 102, 61, 0.7)",
  },
  hollow: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  hollowText: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.montserratRegular,
  },
  hollowDisabled: {
    backgroundColor: "#c4c4c4",
  },
  plain: {
    height: 24,
    backgroundColor: Colors.transparent,
  },
  plainText: {
    fontSize: 14,
    color: "#333333",
    fontFamily: Fonts.montserratRegular,
  },
  plainDisabled: {
    backgroundColor: Colors.transparent,
  },
  link: {
    paddingLeft: 0,
    paddingRight: 0,
    height: 24,
    backgroundColor: Colors.transparent,
  },
  linkText: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: Fonts.montserratRegular,
  },
  linkDisabled: {
    backgroundColor: Colors.transparent,
  },
});
