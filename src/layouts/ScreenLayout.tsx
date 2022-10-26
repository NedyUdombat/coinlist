import React from "react";
import { SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";

import { Styles } from "@assets";
import { toastComponent } from "@components";
import { StyleType } from "@types";

interface ScreenLayoutProps {
  children: React.ReactNode;
  styles?: StyleType | StyleType[];
}

export const ScreenLayout = ({
  children,
  styles: propStyles,
}: ScreenLayoutProps) => {
  return (
    <SafeAreaView style={[Styles.globalStyles.container, propStyles]}>
      {children}
      <Toast config={toastComponent} visibilityTime={5000} topOffset={75} />
    </SafeAreaView>
  );
};
