import { StyleSheet } from "react-native";
import { Colors } from "@lib";

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
});
