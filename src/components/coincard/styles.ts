import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts } from "@lib";

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
    marginBottom: 20,
    width: 185,
    height: 70,
    justifyContent: "center",
  },
  content: {},
  touchable: {},
  title: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Fonts.montserratSemiBold,
  },
  rate: {
    fontSize: 12,
    color: Colors.warning,
    fontFamily: Fonts.montserratMediumItalic,
    opacity: 0.8,
    marginTop: 2,
  },
  modalContainer: {
    paddingHorizontal: 10,
  },
  modalStyle: {
    backgroundColor: Colors.primary,
  },
});
