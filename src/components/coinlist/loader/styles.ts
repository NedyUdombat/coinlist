import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "100%",
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "yellow",
    height: 400,
  },
  placeholderitem: {
    width: 180,
    height: 60,
    borderRadius: 8,
    marginBottom: 20,
  },
});
