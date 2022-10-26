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
    fontFamily: Fonts.avertaSemiBold,
    color: Colors.danger,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22.4,
    fontFamily: Fonts.avertaLight,
    color: Colors.danger,
    marginBottom: 12,
  },
  otherView: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.black,
    opacity: 0.6,
  },

  fullPageCenteredView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.gray,
    flexDirection: "column",
  },
  fullPageModalView: {
    width: "100%",
    paddingTop: Helpers.switchPlatformStyles("ios", 60, 20),
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 24,
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
        elevation: 6,
      },
    }),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  fullPageCloseIcon: {
    width: 40,
    height: 40,
  },
  fullPageCloseIconButton: {
    width: 40,
    height: 40,
    fontFamily: Fonts.avertaBold,
  },
  fullPageCloseIconButtonContainer: {
    alignItems: "center",
  },
  fullPageTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.avertaBold,
    color: Colors.danger,
    marginLeft: 8,
  },
});
