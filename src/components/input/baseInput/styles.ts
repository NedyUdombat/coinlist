import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  input: {
    padding: 0,
    color: Colors.black_3,
    fontFamily: Fonts.montserratRegular,
    fontSize: 14,
    lineHeight: 18,
    borderRadius: 8,
    paddingLeft: 16,
    height: 48,
    minHeight: 48,
    position: "relative",
    borderWidth: 1,
  },
  container: {
    marginTop: 16,
    marginBottom: 4,
  },
  containerWithError: {
    borderColor: Colors.danger,
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 8,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: Fonts.montserratRegular,
    color: Colors.black,
    marginBottom: 4,
  },
  iconbutton: {
    position: "absolute",
    right: 10,
    top: 4,
  },
  errorMessage: {
    marginTop: 4,
    fontFamily: Fonts.montserratRegular,
    fontSize: 12,
    color: "#DC4437",
  },
  caption: {
    marginTop: 8,
    fontFamily: Fonts.montserratRegular,
    fontSize: 12,
    lineHeight: 15,
    color: "#000000b3",
    textAlign: "right",
  },
});
