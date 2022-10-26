import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    minHeight: "100%",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
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
