import { StyleSheet } from "react-native";
import { Colors } from "@lib";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    minHeight: "100%",
  },
  flex1: { flex: 1 },
  pl0: {
    paddingLeft: 0,
  },
});
