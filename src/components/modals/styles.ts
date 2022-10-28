import { Platform, StyleSheet } from "react-native";
import { Colors, Fonts, Helpers } from "@lib";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    backgroundColor: Colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingVertical: 24,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
    marginTop: -15,
  },
  closeIcon: {
    height: 20,
  },
  modalViewChildren: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  closeIconButton: {
    width: 40,
    height: 40,
  },
  closeIconButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    height: 50,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.montserratSemiBold,
    color: Colors.danger,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22.4,
    fontFamily: Fonts.montserratLight,
    color: Colors.danger,
    marginBottom: 12,
  },
  otherView: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.black,
    opacity: 0.6,
    zIndex: -1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
});
