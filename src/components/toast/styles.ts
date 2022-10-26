import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  toastContentContainerStyle: {
    paddingHorizontal: 0,
    marginHorizontal: 10,
  },
  toastText1Style: {
    fontSize: 12,
    fontFamily: Fonts.montserratRegular,
    fontWeight: "500",
    color: Colors.white,
  },
  successToastContainerStyle: {
    borderLeftColor: Colors.success,
    backgroundColor: Colors.success,
    width: 400,
  },
  errorToastContainerStyle: {
    borderLeftColor: Colors.danger,
    backgroundColor: Colors.danger,
    width: 400,
  },
  infoToastContainerStyle: {
    borderLeftColor: Colors.info,
    backgroundColor: Colors.info,
    width: 400,
  },
});
