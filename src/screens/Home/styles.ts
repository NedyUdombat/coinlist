import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  contentContainer: {
    backgroundColor: Colors.info,
    paddingHorizontal: 24,
    flex: 1,
  },
  submitButton: {
    marginTop: 40,
  },
});
