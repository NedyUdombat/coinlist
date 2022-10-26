import React from "react";
import {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
  ToastConfig,
  InfoToast,
} from "react-native-toast-message";

import styles from "./styles";

export const toastComponent: ToastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={styles.successToastContainerStyle}
      contentContainerStyle={styles.toastContentContainerStyle}
      text1Style={styles.toastText1Style}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={styles.errorToastContainerStyle}
      contentContainerStyle={styles.toastContentContainerStyle}
      text1Style={styles.toastText1Style}
    />
  ),

  info: props => (
    <InfoToast
      {...props}
      style={styles.infoToastContainerStyle}
      contentContainerStyle={styles.toastContentContainerStyle}
      text1Style={styles.toastText1Style}
    />
  ),
};
